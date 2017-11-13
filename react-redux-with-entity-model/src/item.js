import React from 'react';

export default class Link extends React.Component {
  click() {
  }

  render() {
    return (
      <div
        click={this.click}
      >
        hello world
      </div>
    );
  }
}

