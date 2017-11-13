import React from 'react';

export default class Item extends React.Component {
  click = () => {
    this.props.entity.setTime(Date.now());
    this.props.entity.name = 'test-name';

    this.props.updateEntity(this.props.entity);
  }

  render() {
    return (
      <div
        onClick={this.click}
      >
        {this.props.entity.getDate()}
      </div>
    );
  }
}

