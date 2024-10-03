import actionTypes from "../actionTypes";

const initialState = {
  restaurants: [],
  isLoading: true,
  error: null,
};

const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RES_LOADING:
      return state;

    case actionTypes.RES_ERROR:
      return { ...state, error: true, isLoading: false };

    case actionTypes.RES_SUCCESS:
      return { restaurants: action.payload, isLoading: false, error: null };

    default:
      return state;
  }
};

export default restaurantsReducer;
