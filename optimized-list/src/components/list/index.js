require('./style.css');

import React from 'react';
import usersContainer from '../../containers/users';
import Item from './components/item';

class ListComponent extends React.Component {
  renderItem = (user, index) => (<Item user={user} key={index} />)

  render() {
    const { users } = this.props;
    const items = users.map(this.renderItem);

    return (
      <div className="list">
        {items}
      </div>
    );
  }
}

ListComponent.defaultProps = {
};

export default usersContainer(ListComponent);
