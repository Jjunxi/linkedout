import React from 'react';
import Logo from '../../component/logo/logo';

import {List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd-mobile'


class Register extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			type: 'genius'
		};
		this.register = this.register.bind(this);
	}

	register() {
		this.props.history.push('/register');
	}

	render(){
		const RadioItem = Radio.RadioItem

		return (
			<div>
				<Logo></Logo>
				<List>
					<InputItem>Username</InputItem>
					<WhiteSpace />
					<InputItem>Password</InputItem>
					<WhiteSpace />
					<InputItem>Again</InputItem>
					<WhiteSpace />
					<RadioItem checked={this.state.type === 'genius'}>
						Genius
					</RadioItem>
					<RadioItem checked={this.state.type === 'boss'}>
						Boss
					</RadioItem>
					<WhiteSpace />
					<Button type='primary'>Resiger </Button>
				</List>
			</div>

		)
	}
}

export default Register;