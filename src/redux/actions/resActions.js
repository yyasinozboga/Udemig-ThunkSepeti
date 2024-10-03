import api from "../../utils/api";
import actionTypes from "../actionTypes";

export const setIsLoading = () => ({
  type: actionTypes.RES_LOADING,
});

export const setRestaurants = (payload) => ({
  type: actionTypes.RES_SUCCESS,
  payload,
});

export const setError = (payload) => ({
  type: actionTypes.RES_ERROR,
  payload,
});

export const getRestaurants = () => (dispatch) => {
  dispatch(setIsLoading());

  api
    .get("/restaurants")
    .then((res) => dispatch(setRestaurants(res.data)))
    .catch((err) => dispatch(setError(err)));
};
