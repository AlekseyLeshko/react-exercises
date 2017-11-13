export default class Entity {
  constructor(data) {
    this.time = data.time;
  }

  getDate = () => {
    const date = moment(this.time).format('DD/MM/YYYY');

    return date;
  }
};

