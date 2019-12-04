/* eslint-disable */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Random from '../src/index';

describe('<Random />', () => {
  it('returns span tag by default', () => {
    const component = shallow(<Random value='name.firstName' />);

    expect(component.html().includes('span')).to.be.true;
  });

  it('returns specified tag', () => {
    const component = shallow(<Random value='name.firstName' tag='h1' />);

    expect(component.html().includes('h1')).to.be.true;
  });

  it('returns image tag', () => {
    const component = shallow(<Random value='image.image' tag='img' />);

    expect(component.find('img[src]')).not.to.be.empty;
  });

  it('returns link properly', () => {
    const component = shallow(
      <Random value='image.image' tag='a'>
        Click Here!
      </Random>
    );

    expect(component.find('a[href]')).not.to.be.empty;
    expect(component.html().includes('Click Here!')).to.be.true;
  });
});
