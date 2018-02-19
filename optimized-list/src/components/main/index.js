require('normalize.css/normalize.css');
require('styles/app.css');

import React from 'react';
import Header from '../header';
import List from '../list';

class MainComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header />
        <List />
      </div>
    );
  }
}

MainComponent.defaultProps = {
};

export default MainComponent;
