import React from 'react';
import {connect} from 'react-redux';
import {getFriendList} from '../../redux/friend.redux';
import FriendList from '../friendlist/friendlist';

@connect(
	state=>state.friend,
	{getFriendList}
)
class Genius extends React.Component{
	componentDidMount() {
		this.props.getFriendList('boss');
	}
	render(){
		return (
      <FriendList friendList={this.props.friendList}></FriendList>
    );
	}

}
export default Genius;