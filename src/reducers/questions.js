import {
  ADD_ANSWER_TO_QUESTION,
  ADD_QUESTION,
  QUESTIONS,
} from "../constants/actionsTypes";

export default function questions(state = {}, action) {
  switch (action.type) {
    case QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ADD_ANSWER_TO_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat(action.author),
          },
        },
      };
    default:
      return state;
  }
}
