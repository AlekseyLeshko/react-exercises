import React, {Component} from 'react';
import usersContainer from '../../containers/users';
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

    console.log(user);
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

HeaderComponent.defaultProps = {
};

export default usersContainer(HeaderComponent);
