import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import NavHeader from '../navheader/navheader';
import NavFooter from '../navfooter/navfooter';
import Boss from '../../component/boss/boss';
import Genius from '../../component/genius/genius';

function Msg() {
  return <h2>消息列表页面</h2>
}

function Me() {
  return <h2>Me</h2>
}

@connect(state => state)
class Dashboard extends React.Component {

  render() {
    const {pathname} = this.props.location;
    const user = this.props.user;
    const navList = [
      {
        path: '/boss',
        text: '牛人',
        icon: 'boss',
        title: '牛人列表',
        component: Boss,
        hide: user.type === 'genius'
      }, {
        path: '/genius',
        text: 'boss',
        icon: 'job',
        title: 'BOSS列表',
        component: Genius,
        hide: user.type === 'boss'
      }, {
        path: '/msg',
        text: '消息',
        icon: 'msg',
        title: '消息列表',
        component: Msg
      }, {
        path: '/me',
        text: '我',
        icon: 'user',
        title: '个人中心',
        component: Me
      }
    ];

    return (
      <div>
        <NavHeader data={navList}></NavHeader>
		
        <div style={{
          marginTop: 45
        }}>
			<Switch>
				{navList.map(v=>(
					<Route key={v.path} path={v.path} component={v.component}></Route>
				))}
			</Switch>
			{/* <Switch>
				<Route path='/boss' component={Boss}></Route>
				<Route path='/genius' component={Genius}></Route>
				<Route path='/msg' component={Msg}></Route>
				<Route path='/me' component={Me}></Route>
			</Switch> */}
        </div>
						
		<NavFooter data={navList}></NavFooter>
      </div>
    );

  }

}

export default Dashboard;