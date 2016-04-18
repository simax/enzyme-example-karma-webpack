import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Foo from '../src/Foo';
// import sinon from 'sinon';

describe("A suite", function() {
  it("1. When Shallow rendered, starts with a class of initial", () => {
    expect(shallow(<Foo />).is('.initial')).toBe(true);
  });

  it("2. When mounted in DOM, starts with a class of initial", () => {
    expect(mount(<Foo />).find('.initial').length).toBe(1);
  });

  it("3. When shallow rendered, simulating click cause onClick to have been called", () => {
    var btnSpy = spyOn(Foo.prototype.__reactAutoBindMap, 'onClick');
    var componentRef = shallow(<Foo />);
    componentRef.find('button').simulate('click');
    expect(btnSpy).toHaveBeenCalled();
  });

  it("4. When shallow rendered, simulating click should change class to testClass", () => {
    var componentRef = shallow(<Foo />);
    componentRef.find('button').simulate('click');
    expect(componentRef.find(".testClass").length).toBe(1);
  });

});
