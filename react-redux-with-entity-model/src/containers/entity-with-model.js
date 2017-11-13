import { connect } from 'react-redux';
import * as actions from '../modules/entity/with-model/actions.js';
import model from '../modules/entity/with-model/model.js';

const mapStateToProps = (state, ownProps) => {
  const entity = state.entity;
  const model = new Model(entity);

  return {
    entity: model,
  };
};

const mapActionCreators = {
  updateEntity: actions.updateEntity,
};

export default (component) => connect(mapStateToProps, mapActionCreators)(component);

