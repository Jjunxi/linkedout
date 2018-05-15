import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Login from './container/login/login';
import Register from './container/register/register';
import BossInfo from './container/bossinfo/bossinfo';
import GeniusInfo from './container/geniusinfo/geniusinfo';
import Dashboard from './component/dashboard/dashboard';

import Auth from './component/auth/auth';


class Routes extends React.Component{
	render(){
		return (
			<BrowserRouter>
				<div>
					<Auth></Auth>
					<Switch>
						<Route path='/login' component={Login}></Route>
						<Route path='/register' component={Register}></Route>
						<Route path='/bossinfo' component={BossInfo}></Route>
						<Route path='/geniusinfo' component={GeniusInfo}></Route>
						{/* <Route path='/boss' component={Boss}></Route> */}
						{/* <Route path='/genius' component={Genius}></Route> */}
						<Route component={Dashboard}></Route>
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

export default Routes;
