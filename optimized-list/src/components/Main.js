require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Header from './header';
import usersContainer from '../containers/users';

let yeomanImage = require('../images/yeoman.png');

class MainComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header />
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">
          {JSON.stringify(this.props.users)}
        </div>
      </div>
    );
  }
}

MainComponent.defaultProps = {
};

export default usersContainer(MainComponent);
