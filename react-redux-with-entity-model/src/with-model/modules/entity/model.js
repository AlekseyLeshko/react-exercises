import moment from 'moment';
import {timeFormat} from '../../../constants';

export default class Entity {
  constructor(data) {
    this.time = data.time;
  }

  getDate = () => {
    const date = moment(this.time).format(timeFormat);

    return date;
  }

  setTime = (time) => {
    this.time = time;
  }

  convertToStore = () => {
    return {
      time: this.time,
    };
  }
};

