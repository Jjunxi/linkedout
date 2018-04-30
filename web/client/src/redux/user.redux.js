import axios from 'axios';
import { getRedirectPath } from '../util';

const initState = {
	redirectTo: '',
	isAuth: false,
	msg: '',
	username: '',
	type: ''
};

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const CLEAR_MSG = 'CLEAR_MSG';

function registerSuccess(data){
	return {type:REGISTER_SUCCESS, payload: data}
}

function loginSuccess(data){
	return {type:LOGIN_SUCCESS, payload: data}
}

function errorMsg(msg){
	return {type: ERROR_MSG, msg: msg};
}

// reducer
export function user(state = initState, action) {
    switch(action.type){
		case REGISTER_SUCCESS:
			return {
				...state, 
				msg:'', 
				isAuth:true, 
				...action.payload,
				redirectTo:getRedirectPath(action.payload)
			};
		case LOGIN_SUCCESS:
			return {
				...state, 
				msg:'', 
				isAuth:true, 
				...action.payload,
				redirectTo:getRedirectPath(action.payload)
			};
		case ERROR_MSG:
			return {
				...state, 
				msg: action.msg,
				isAuth:false, 
			};
		case CLEAR_MSG:
			return {
				...state,
				msg: '',
			}
		default:
			return state;
	}
}

export function regisger({username, pwd, repeatpwd, type}){
	// @andy_sync
	if (!username || !pwd || !type) {
		return errorMsg('用户名密码必须输入')
	}
	if (pwd !== repeatpwd) {
		return errorMsg('密码和确认密码不同')
    }
	
	// @andy_async
	return dispatch => {
		axios.post('/user/register', {username, pwd, type})
			 .then(res => {
				 if (res.status === 200 && res.data.code === 0) {
					 //  dispatch(registerSuccess({username, pwd, type}));
					 dispatch(registerSuccess(res.data.data));
				 }else{
					 dispatch(errorMsg(res.data.msg));
				 }
			});		
	}
}

export function login({username, pwd}){
	// @andy_sync
	if (!username || !pwd) {
		return errorMsg('用户名密码必须输入')
	}
	
	// @andy_async
	return dispatch => {
		axios.post('/user/login',{username, pwd})
			 .then(res => {
				 if (res.status === 200 && res.data.code === 0) {
				 	 dispatch(loginSuccess(res.data.data))
				 }else{
					 dispatch(errorMsg(res.data.msg))
				 }
			});		
	}
}

export function clearMsg() {
	return {type: CLEAR_MSG};
}