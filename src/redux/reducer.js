import DISHES from "../data/dishes/dishes";
import COMMENTS from "../data/dishes/comments";
import { combineReducers } from "redux";

const dishReducer = (dishState = DISHES, action) => {
  return dishState;
}

const commentReducer = (commentState = COMMENTS, action) => {
  if (action.type === 'ADD_COMMENT') {
    let comment = action.payload;
    comment.id = commentState.length;
    comment.date = new Date().toDateString();
    return commentState.concat(comment)
  }
  return commentState;
}

export const Reducer = combineReducers({
  dishes: dishReducer,
  comments: commentReducer
})