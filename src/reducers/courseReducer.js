import * as types from '../actions/actionTypes';
import initialState from './initialState';

const courseReducer = (state = initialState.courses, action) => {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
          Object.assign({}, action.course)
      ];
      // Note: Use map function when only 1 attribute change is required
      // return state.map(course => {
      //   if (course.id !== action.course.id) {
      //     return course;
      //   }
      //   return {
      //     ...course,
      //     title: action.course.title,
      //     authorId: action.course.authorId,
      //     length: action.course.length,
      //     category: action.course.category
      //   };
      // });
    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, state, action.course)
      ];
    default:
      return state;
  }
};

export default courseReducer;