import React, {Component} from 'react';
import usersContainer from '../../containers/users';
import {getName} from '../../helper';
require('./style.css');

class Header extends Component {
  shouldComponentUpdate() {
    return false;
  }

  addUser = () => {
    const user = {
      name: getName(),
      value: false,
    };

    this.props.createUser(user);
  }

  render() {
    return (
      <div className="header">
        <button onClick={this.addUser}>Add user</button>
      </div>
    );
  }
}

Header.defaultProps = {
};

export default usersContainer(Header);
