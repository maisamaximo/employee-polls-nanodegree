import {
    USERS,
    ADD_ANSWER_TO_USER,
    ADD_QUESTION_TO_USER,
  } from "../constants/actionsTypes";
  
  export function receiveUsers(users) {
    return {
      type: USERS,
      users,
    };
  }
  
  export function addAnswerUser(authedUser, qid, answer) {
    return {
      type: ADD_ANSWER_TO_USER,
      authedUser,
      qid,
      answer,
    };
  }
  
  export function addQuestionUser({ author, id }) {
    return {
      type: ADD_QUESTION_TO_USER,
      author,
      qid: id,
    };
  }
  