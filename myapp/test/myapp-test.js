import { expect } from 'chai';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import MyApp from '../src/myapp';

describe('MyApp', () => {
  let instance;

  beforeEach(() => {
    const shallowRenderer = createRenderer();
    shallowRenderer.render(React.createElement(MyApp, {}, 'child text'));
    instance = shallowRenderer.getRenderOutput();
  });

  it('should be a div', () => {
    expect(instance.type).to.equal('div');
  });

  it('should have prop foo equals 1', () => {
    expect(instance.props.foo).to.equal(1);
  });
});
