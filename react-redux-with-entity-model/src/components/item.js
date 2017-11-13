import React from 'react';

export default class Item extends React.Component {
  click = () => {
    const entity = {
      ...this.props.entity,
      time: Date.now(),
      name: 'test-name',
    };

    this.props.updateEntity(entity);
  }

  render() {
    return (
      <div
        onClick={this.click}
      >
        {JSON.stringify(this.props.entity)}
      </div>
    );
  }
}

