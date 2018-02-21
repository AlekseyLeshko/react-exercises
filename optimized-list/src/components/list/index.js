require('./style.css');

import React, { Component} from 'react';
import usersContainer from '../../containers/users';
import Item from '../item';

class ListComponent extends Component {
  renderItem = (user, index) => (<Item user={user} key={index} updateUser={this.props.updateUser} />)

  render() {
    const { users } = this.props;
    const items = users.map(this.renderItem);

    return (
      <div className="container">
        <div className="list">
          {items}
        </div>
      </div>
    );
  }
}

ListComponent.defaultProps = {
};

export default usersContainer(ListComponent);
