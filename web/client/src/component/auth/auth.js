import React from 'react';
import { withRouter } from 'react-router-dom';

import axios from 'axios';
import { Button } from 'antd-mobile';

// Auth is a common component, not a <Route>
@withRouter
class Auth extends React.Component{
    componentDidMount() {
        axios.get('/users/info')
             .then((res) => {
                 if (res.status === 200) {
                     if (res.data.code === 0) { // with user info
                        
                     } else {
                        // this.props.history.push('/login');
                     }
                 }
             }); 
    }

	render(){
		return null;
	}
}

export default Auth;
