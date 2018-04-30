import React from 'react';
import Logo from '../../component/logo/logo';

import { List, InputItem, WhiteSpace, Button, Radio } from 'antd-mobile'
import {connect} from 'react-redux'
import {regisger} from '../../redux/user.redux'

import axios from 'axios';

@connect(
	state => state.user,
	{regisger}
)
class Register extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			user:'',
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
		const RadioItem = Radio.RadioItem

		return (
			<div>
				<Logo></Logo>
				<List>
					<InputItem
						onChange={v => this.handleChange('user', v)}>Username</InputItem>
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