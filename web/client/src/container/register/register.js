import React from 'react';
import Logo from '../../component/logo/logo';

import { List, InputItem, WhiteSpace, Button, Radio, Toast } from 'antd-mobile';
import {connect} from 'react-redux';
import {regisger, clearMsg} from '../../redux/user.redux';

import { Redirect } from 'react-router-dom';

@connect(
	state => state.user,
	{regisger, clearMsg}
)
class Register extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			username:'',
			pwd:'',
			repeatpwd:'',
			type:'genius' // 或者boss
		}

		this.register = this.register.bind(this);
		this.handleRegister = this.handleRegister.bind(this);
	}

	register() {
		this.props.history.push('/register');
	}

	handleChange(key, val) {
		this.setState({
			[key]: val
		});
		if (this.props.error) {
			this.props.clearMsg();	
		}
	}

	handleRegister() {
		// const user = this.state.user;
		// const pwd = this.state.pwd;
		// const type = this.state.type;
		// axios.post('/users/register', {user, pwd, type})
		// .then(res => {
		// 	if (res.status === 200 && res.data.code === 0) {

		// 	}else{

		// 	}
		// });	
		this.props.regisger(this.state);
		console.log(this.state);
	}

	render(){
		const RadioItem = Radio.RadioItem;

		return (
			<div>
				{this.props.redirectTo ? <Redirect to={this.props.redirectTo} />:null}
				<Logo></Logo>
				<List>
					{this.props.error ? (Toast.fail(this.props.msg, 3)) : null}				
					<InputItem
						onChange={v => this.handleChange('username', v)}>Username</InputItem>
					<WhiteSpace />
					<InputItem type="password"
						onChange={v => this.handleChange('pwd', v)}>Password</InputItem>
					<WhiteSpace />
					<InputItem type="password"
						onChange={v => this.handleChange('repeatpwd', v)}>Again</InputItem>
					<WhiteSpace />
					<RadioItem checked={this.state.type === 'genius'}
						onChange={v => this.handleChange('type', 'genius')}>
						Genius
					</RadioItem>
					<RadioItem checked={this.state.type === 'boss'}
						onChange={v => this.handleChange('type', 'boss')}>
						Boss
					</RadioItem>
					<WhiteSpace />
					<Button type='primary' onClick={this.handleRegister}>Resiger </Button>
				</List>
			</div>

		)
	}
}

export default Register;