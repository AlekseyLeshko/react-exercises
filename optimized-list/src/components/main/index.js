require('normalize.css/normalize.css');
require('styles/app.css');

import React, {Component} from 'react';
import Header from '../header';
import List from '../list';

class Main extends Component {
  render() {
    return (
      <div className="index">
        <Header />
        <List />
      </div>
    );
  }
}

Main.defaultProps = {
};

export default Main;
