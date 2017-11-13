import React from 'react';
import test from 'ava';
import { wrapper } from 'chuhai';
import AppDefault from './src/app-default.js';
import renderer from 'react-test-renderer';

const suite = wrapper(test);

suite('entity model before and after redux store', t => {
  const expected = 'test-name';
  let component;
  let text;

  t.cycle(() => {
    let tree = component.toJSON()
    tree.props.onClick();
    tree = component.toJSON();
    
    const obj = JSON.parse(tree.children[0]);

    t.is(obj.name, expected);
  });

  t.bench('default use without model', () => {
    component = renderer.create(
      <AppDefault/>
    );
  });
});

