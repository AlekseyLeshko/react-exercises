require('./style.css');

import React, {PureComponent} from 'react';

class ItemComponent extends PureComponent {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.user !== nextProps.user;
  }

  toggle = () => {
    const user = { ...this.props.user };
    user.value = !user.value;

    this.props.updateUser(user);
  }

  render() {
    const {user} = this.props;

    return (
      <div className="item">
        <div className="id">id:{user.id}</div>
        <div className="name">name:{user.name}</div>
        <div className="value">value:{user.value.toString()}</div>
        <button onClick={this.toggle}>toggle</button>
      </div>
    );
  }
};

ItemComponent.defaultProps = {
};

export default ItemComponent;
