import React from 'react';
import { withRouter } from 'react-router-dom';

import {connect} from 'react-redux';
import {loadData} from '../../redux/user.redux';

import { Redirect } from 'react-router-dom';

// Auth is a common component, not a <Route>
@withRouter
@connect(
	state => state.user,
	{loadData}
)
class Auth extends React.Component{
    componentDidMount() {
		const publicList = ['/login', '/register'];
		const pathname = this.props.location.pathname;
		if (publicList.indexOf(pathname) > -1) {
			return null;
        }

        this.props.loadData();
    }
    
	render(){
		return (
            <div>
				{this.props.msg ? <Redirect to='/login' />:null}                
            </div>
        );
	}
}

export default Auth;
