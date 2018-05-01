import axios from 'axios';
import { getRedirectPath } from '../util';

const initState = {
	error: false,
	redirectTo: '',
	msg: '',
	username: '',
	type: ''
};

const AUTH_SUCCESS = 'AUTH_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const CLEAR_ERR_MSG = 'CLEAR_ERR_MSG';
const LOAD_DATA = 'LOAD_DATA';

function auth_success(data){
	return {type:AUTH_SUCCESS, payload: data};
}

function error_msg(msg){
	return {type: ERROR_MSG, msg: msg};
}

function load_data(data){
	return {type: LOAD_DATA, payload: data};
}

// reducer
export function user(state = initState, action) {
    switch(action.type){
		case AUTH_SUCCESS:
			return {
				...state, 
				msg: '', 
				...action.payload,
				redirectTo: getRedirectPath(action.payload)
			};
		case ERROR_MSG:
			return {
				...state, 
				msg: action.msg,
				error: true
			};
		case CLEAR_ERR_MSG:
			return {
				...state,
				msg: '',
				error: false
			};
		case LOAD_DATA:
			return {
				...state, 
				...action.payload
			};
		default:
			return state;
	}
}

export function regisger({username, pwd, repeatpwd, type}){
	// @andy_sync
	if (!username || !pwd || !type) {
		return error_msg('用户名密码必须输入')
	}
	if (pwd !== repeatpwd) {
		return error_msg('密码和确认密码不同')
    }
	
	// @andy_async
	return dispatch => {
		axios.post('/user/register', {username, pwd, type})
			 .then(res => {
				 if (res.status === 200 && res.data.code === 0) {
					 //  dispatch(registerSuccess({username, pwd, type}));
					 dispatch(auth_success(res.data.data));
				 }else{
					 dispatch(error_msg(res.data.msg));
				 }
			});		
	}
}

export function login({username, pwd}){
	// @andy_sync
	if (!username || !pwd) {
		return error_msg('用户名密码必须输入')
	}
	
	// @andy_async
	return dispatch => {
		axios.post('/user/login',{username, pwd})
			 .then(res => {
				 if (res.status === 200 && res.data.code === 0) {
				 	 dispatch(auth_success(res.data.data))
				 }else{
					 dispatch(error_msg(res.data.msg))
				 }
			});		
	}
}

export function clearErrMsg() {
	// clear_msg();
	return {type: CLEAR_ERR_MSG};
}

export function loadData() {
	return dispatch => {
		axios.get('/user/info')
             .then(res=>{
				if (res.status === 200) {
					if (res.data.code === 0) {
						dispatch(load_data(res.data.data));
					}else{
						dispatch(error_msg(res.data.msg));
					}
				}
			});
	}
}