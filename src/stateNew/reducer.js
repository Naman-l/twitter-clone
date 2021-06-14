import * as actionTypes from "./action.js";

const initialState = {
  newMetaData: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NEW_META_DATA:
      return {
        ...state,
        newMetaData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

// const pReducer = persistStore(per)
