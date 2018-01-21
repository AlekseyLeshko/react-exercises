import { connect } from 'react-redux';
import * as actions from '../modules/entity/actions.js';

const mapStateToProps = (state, ownProps) => {
  const entity = state.entity;

  return {
    entity,
  };
};

const mapActionCreators = {
  updateEntity: actions.updateEntity,
};

export default (component) => connect(mapStateToProps, mapActionCreators)(component);

