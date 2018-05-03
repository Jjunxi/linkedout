import React from 'react'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import {Switch, Route} from 'react-router-dom'
// import NavLinkBar from '../navlink/navlink'
import Boss from '../../container/boss/boss'
import Genius from '../../container/genius/genius'

function Msg(){
	return <h2>消息列表页面</h2>
}

function Me(){
	return <h2>Me</h2>
}

@connect(
	state=>state
)
class Dashboard extends React.Component{

	render(){
		const {pathname} = this.props.location;
		const user = this.props.user;
		const navList = [
			{
				path:'/boss',
				text:'牛人',
				icon:'boss',
				title:'牛人列表',
				component:Boss,
				hide:user.type=='genius'
			},
			{
				path:'/genius',
				text:'boss',
				icon:'job',
				title:'BOSS列表',
				component:Genius,
				hide:user.type=='boss'
			},
			{
				path:'/msg',
				text:'消息',
				icon:'msg',
				title:'消息列表',
				component:Msg
			},
			{
				path:'/me',
				text:'我',
				icon:'user',
				title:'个人中心',
				component:Me
			}
		];


		return (
			<div>
				<NavBar className='fixd-header' mode='dard'>header</NavBar>
				<div style={{marginTop:45}}>
          <Switch>
            <Route path='/boss' component={Boss}></Route>
            <Route path='/genius' component={Genius}></Route>
            <Route path='/msg' component={Msg}></Route>
            <Route path='/me' component={Me}></Route>  
          </Switch>        
				</div>
				<NavBar mode='dark'>footer</NavBar>
			</div>
		);

		
	}

}

export default Dashboard;