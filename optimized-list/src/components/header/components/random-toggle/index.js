import React, {Component} from 'react';
import usersContainer from '../../../../containers/users';
import {getRandomInt} from '../../../../helper';

class RandomToggleComponent extends Component {
  toggle = () => {
    const { users } = this.props;
    if (!users.length) {
      return;
    }

    const randomIndex = getRandomInt(users.length);
    const user = { ...users[randomIndex] };
    user.value = !user.value;
    this.props.updateUser(user);
  }

  render() {
    return (
      <button onClick={this.toggle}>toggle random item</button>
    );
  }
}

RandomToggleComponent.defaultProps = {
};

export default usersContainer(RandomToggleComponent);
