import React from 'react';
import Logo from '../../component/logo/logo';

import {List, InputItem, WingBlank, WhiteSpace, Button, Toast} from 'antd-mobile'

import {connect} from 'react-redux'
import {login, clearMsg} from '../../redux/user.redux'

import { Redirect } from 'react-router-dom';

@connect(
	state=>state.user,
	{login, clearMsg}
)
class Login extends React.Component{
	constructor(props) {
		super(props);

		this.register = this.register.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	register() {
		this.props.history.push('/register');
	}

	handleChange(key,val){
		this.setState({
			[key]:val
		});
		if (this.props.msg)
			this.props.clearMsg();
	}

	handleLogin(){
		this.props.login(this.state);
	}

	render(){
		return (
			<div>
				{this.props.redirectTo ? <Redirect to={this.props.redirectTo} />:null}
				<Logo></Logo>
				<WingBlank>
					<List>
						{this.props.msg ? (Toast.fail(this.props.msg, 2)) : null}
						<InputItem
							onChange={v=>this.handleChange('username',v)}
						>用户</InputItem>
						<WhiteSpace />
						<InputItem
							onChange={v=>this.handleChange('pwd',v)}
						>密码</InputItem>
					</List>
					<WhiteSpace />
					<Button onClick={this.handleLogin} type='primary'>登录</Button>
					<WhiteSpace />
					<Button onClick={this.register} type='primary'>注册</Button>
				</WingBlank>
			</div>
		)
	}
}

export default Login;