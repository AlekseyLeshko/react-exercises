require('./style.css');

import React, {Component} from 'react';

class Item extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.user !== nextProps.user;
  }

  toggle = () => {
    const user = this.props.user.set('value', !this.props.user.get('value'));

    this.props.updateUser(user);
  }

  render() {
    const user = this.props.user.toJS();

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

Item.defaultProps = {
};

export default Item;
