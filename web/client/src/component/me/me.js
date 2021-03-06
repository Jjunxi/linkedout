import React from 'react';
import {connect} from 'react-redux';
import {Result, List, Brief, WhiteSpace, Modal} from 'antd-mobile';
import browserCookie from 'browser-cookies';
import {logoutSubmit} from '../../redux/user.redux';
import {Redirect} from 'react-router-dom';

class Me extends React.Component {
  componentDidMount() {}
  render(){
    const props = this.props
    const Item = List.Item
    const Brief = Item.Brief
    console.log(props)
    return props.user?(
        <div>
            <Result
                img={<img src={require(`../avatars/${props.avatar}.png`)} style={{width:50}} alt="" />}
                title={props.user}
                message={props.type === 'boss'?props.company:null}
            />
            
            <List renderHeader={()=>'简介'}>
                <Item
                    multipleLine
                >
                    {props.title}
                    {props.desc.split('\n').map(v=><Brief key={v}>{v}</Brief>)}
                    {props.money?<Brief>薪资:{props.money}</Brief>:null}
                </Item>
                
            </List>
            <WhiteSpace></WhiteSpace>
            <List>
                <Item onClick={this.logout}>退出登录</Item>
            </List>
        </div>
    ):<Redirect to={props.redirectTo} />

}

}
export default Me;