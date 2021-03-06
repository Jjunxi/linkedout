import React from 'react';
import PropTypes from 'prop-types';
import {Card, WhiteSpace, WingBlank} from 'antd-mobile';

class FriendList extends React.Component{
	static propTypes = {
		friendList: PropTypes.array.isRequired
	};
	render(){
		const Header = Card.Header;
		const Body = Card.Body;
		return (
			<WingBlank>
				<WhiteSpace></WhiteSpace>
				{this.props.friendList.map(v => (
					v.avatar ?
					(<Card key={v._id}>
						<Header
							title={v.username}
							thumb={require(`../avatars/${v.avatar}.png`)}
							extra={<span>{v.title}</span>}
						></Header>
						<Body>
							{v.type === 'boss'? <div>公司:{v.company}</div> : null}
							{v.desc.split('\n').map(d=>(
								<div key={d}>{d}</div>
							))}
							{v.type === 'boss'? <div>薪资:{v.money}</div> : null}
						</Body>
					</Card>) 
					: null
				))}
			</WingBlank>
		)


	}
}
export default FriendList;

