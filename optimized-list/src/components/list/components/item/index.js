require('./style.css');

import React from 'react';

const ItemComponent = ({user}) => (
  <div className="item">
    <div className="id">id:{user.id}</div>
    <div className="name">name:{user.name}</div>
    <div className="value">value:{user.value.toString()}</div>
  </div>
);

ItemComponent.defaultProps = {
};

export default ItemComponent;
