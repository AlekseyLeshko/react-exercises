import React from 'react';
import moment from 'moment';
import {timeFormat} from '../../constants';

export default class Item extends React.Component {
  click = () => {
    const entity = {
      ...this.props.entity,
      time: Date.now(),
    };

    this.props.updateEntity(entity);
  }

  render() {
    const date = moment(this.props.entity.time).format(timeFormat);

    return (
      <div
        onClick={this.click}
      >
        {date}
      </div>
    );
  }
}

