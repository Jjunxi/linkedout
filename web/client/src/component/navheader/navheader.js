import React from 'react';
import PropTypes from 'prop-types';
import {NavBar} from 'antd-mobile';
import {withRouter} from 'react-router-dom'
@withRouter
class NavHeader extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };

  render() {
    const {pathname} = this.props.location;
    console.log(pathname);
    
    const navList = this.props.data.filter(v => !v.hide);
    return (
      <NavBar className='fixd-header' mode='dark'>
        {navList.find(v => v.path === pathname).title}
      </NavBar>
    )
  }
}

export default NavHeader;