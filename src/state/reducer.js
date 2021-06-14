import * as actionTypes from "./action.js";

const initialState = {
  tweetsData: "Helloe There",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TWEET_MESSAGE_DATA:
      return {
        ...state,
        tweetsData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
