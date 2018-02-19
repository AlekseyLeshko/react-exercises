import React, {Component} from 'react';
import usersContainer from '../../containers/users';
import RandomButton from './components/random-toggle';
import {getName} from '../../helper';
require('./style.css');

class HeaderComponent extends Component {
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
        <RandomButton />
      </div>
    );
  }
}

HeaderComponent.defaultProps = {
};

export default usersContainer(HeaderComponent);
