import React, {Component} from 'react';
import usersContainer from '../../containers/users';
import RandomButton from './components/random-toggle';
require('./style.css');

const makeid = () => {
  let text = '';
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};

class HeaderComponent extends Component {
  addUser = () => {
    const user = {
      name: makeid(),
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
