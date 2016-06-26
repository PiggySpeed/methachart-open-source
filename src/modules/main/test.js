import expect from 'expect';
import * as actions from './mainactions';

describe('actions', () => {
  it('should create an action to console log text', () => {
    const text = "TREE";
    const expectedAction = {
      type: actions.ON_CLICK,
      text: text
    };
    expect(actions.onClick(text)).toEqual(expectedAction)
  })
});

