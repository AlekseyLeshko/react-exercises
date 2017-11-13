import React from 'react';
import test from 'ava';
import { wrapper } from 'chuhai';
import Item from './src/item.js';
import renderer from 'react-test-renderer';

const suite = wrapper(test);

suite('array concat', t => {
  t.cycle(() => {
    t.pass();
  });

  t.bench('use simple redux store', () => {
    const component = renderer.create(
      <Item/>
    );
    let tree = component.toJSON()
    tree.props.click();
  });
});

