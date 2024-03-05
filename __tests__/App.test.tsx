import 'react-native';
import React from 'react';
import {it, expect} from '@jest/globals';
import renderer from 'react-test-renderer';
import App from '../App.tsx';

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
