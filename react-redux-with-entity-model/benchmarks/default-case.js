import React from 'react';
import test from 'ava';
import { wrapper } from 'chuhai';
import AppComponent from '../src/default/components/app';
import renderer from 'react-test-renderer';
import moment from 'moment';
import {timeFormat} from '../src/constants';
import store from '../src/default/store';

const suite = wrapper(test);

suite('render component default(without model)', t => {
  t.bench('', () => {
    const component = renderer.create(<AppComponent/>);
    const tree = component.toJSON()
    tree.props.onClick();

    t.not(tree.children[0], undefined);
  });
});
