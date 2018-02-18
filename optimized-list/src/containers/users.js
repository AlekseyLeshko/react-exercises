import { connect } from 'react-redux';
import * as actions from '../modules/users/actions.js';
import * as selectors from '../modules/users/selectors';

const mapStateToProps = (state, ownProps) => {
  const users = selectors.getAllUsers(state);

  return {
    users,
  };
};

const mapActionCreators = {
  ...actions,
};

export default (component) => connect(mapStateToProps, mapActionCreators)(component);

