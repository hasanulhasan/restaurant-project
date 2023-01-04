import COMMENTS from "../data/dishes/comments";
import { combineReducers } from "redux";
import * as actiontypes from './actionTypes'

const dishReducer = (dishState = { isLoading: false, dishes: [], errMsg: null }, action) => {

  switch (action.type) {
    case actiontypes.DISHES_LOADING:
      return {
        ...dishState,
        isLoading: true,
        errMsg: null,
        dishes: []
      }
      break;
    case actiontypes.LOAD_DISHES:
      return {
        ...dishState,
        isLoading: false,
        errMsg: null,
        dishes: action.payload
      }
      break;
    case actiontypes.DISHES_FAILED:
      return {
        ...dishState,
        isLoading: false,
        errMsg: action.payload,
        dishes: []
      }
      break;
    default:
      return dishState;
      break;
  }
}

const commentReducer = (commentState = { isLoading: false, dishes: [] }, action) => {
  // if (action.type === 'ADD_COMMENT') {
  //   let comment = action.payload;
  //   comment.id = commentState.length;
  //   comment.date = new Date().toDateString();
  //   return commentState.concat(comment)
  // }
  // return commentState;

  switch (action.type) {

    case actiontypes.COMMENT_LOADING:
      return {
        ...commentState,
        isLoading: true,
        comments: []
      }
      break;
    case actiontypes.LOAD_COMMENTS:
      return {
        ...commentState,
        isLoading: false,
        comments: action.payload
      }
      break;

    case actiontypes.ADD_COMMENT:
      let comment = action.payload;
      return {
        ...commentState,
        comments: commentState.comments.concat(comment)
      }
      break;

    default:
      return commentState;
      break;
  }

}

export const Reducer = combineReducers({
  dishes: dishReducer,
  comments: commentReducer
})