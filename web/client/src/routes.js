import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';


import Login from './container/login/login';
import Register from './container/register/register';
import AuthRoute from './component/authroute/authroute';

class Routes extends React.Component{
	render(){
		return (
			<BrowserRouter>
				<div>
					{/* <AuthRoute></AuthRoute> */}
					<Route path='/login' component={Login}></Route>
					<Route path='/register' component={Register}></Route>
				</div>
			</BrowserRouter>
		)
	}
}

export default Routes;
