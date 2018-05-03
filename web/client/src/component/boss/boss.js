import React from 'react';
import {connect} from 'react-redux';
import {getFriendList} from '../../redux/friend.redux';
import FriendList from '../friendlist/friendlist';

@connect(
	state=>state.friend,
	{getFriendList}
)
class Boss extends React.Component{
	componentDidMount() {
		this.props.getFriendList('genius');
	}
	render(){
		return <FriendList friendList={this.props.friendList}></FriendList>
	}

}
export default Boss;