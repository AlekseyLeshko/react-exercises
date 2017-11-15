import React from 'react';
import test from 'ava';
import { wrapper } from 'chuhai';
import AppDefault from './src/app-default.js';
import AppWithModel from './src/app-default.js';
import renderer from 'react-test-renderer';
import moment from 'moment';

const suite = wrapper(test);

suite('render one component', t => {
  const expected = moment(Date.now()).format('DD/MM/YYYY');
  let component;

  t.cycle(() => {
    let tree = component.toJSON()
    tree.props.onClick();
    tree = component.toJSON();

    t.is(tree.children[0], expected);
  });

  t.bench('without model', () => {
    component = renderer.create(
      <AppDefault/>
    );
  });

  t.bench('with model', () => {
    component = renderer.create(
      <AppWithModel/>
    );
  });
});

