import * as types from './actionTypes';

export function createCourse(course) {
  return {
    type: types.CREATE_COURSE,
    course // es6 feature that matches value to key without explicitly declaring the value
  };
}