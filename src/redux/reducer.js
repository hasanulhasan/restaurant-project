import COMMENTS from "../data/dishes/comments";
import { combineReducers } from "redux";
import * as actiontypes from './actionTypes'

const dishReducer = (dishState = { isLoading: false, dishes: [] }, action) => {

  switch (action.type) {
    case actiontypes.DISHES_LOADING:
      return {
        ...dishState,
        isLoading: true,
        dishes: []
      }
      break;
    case actiontypes.LOAD_DISHES:
      return {
        ...dishState,
        isLoading: false,
        dishes: action.payload
      }
      break;
    default:
      return dishState;
      break;
  }
}

const commentReducer = (commentState = COMMENTS, action) => {
  // if (action.type === 'ADD_COMMENT') {
  //   let comment = action.payload;
  //   comment.id = commentState.length;
  //   comment.date = new Date().toDateString();
  //   return commentState.concat(comment)
  // }
  // return commentState;

  switch (action.type) {
    case actiontypes.ADD_COMMENT:
      let comment = action.payload;
      comment.id = commentState.length;
      comment.date = new Date().toDateString();
      return commentState.concat(comment)
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