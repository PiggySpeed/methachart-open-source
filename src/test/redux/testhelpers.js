import { expect } from 'chai';
import sinon from 'sinon';

export const testActionReducer = (oldAction, expectedAction, oldState, expectedState, reducer) => {
  const resultState = reducer(oldState, oldAction);

  console.log(oldAction, expectedAction);
  expect(oldAction).to.deep.equal(expectedAction);
  expect(resultState).to.deep.equal(expectedState);
};

export const testThunk = (oldAction, expAction, getState) => {
  const dispatch = sinon.spy();
  oldAction(dispatch, getState);

  expect(dispatch.calledWith(expAction));
};