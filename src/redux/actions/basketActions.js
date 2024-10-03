import api from "../../utils/api";
import actionTypes from "../actionTypes";
import { v4 } from "uuid";

export const getProducts = () => (dispatch) => {
  dispatch({ type: actionTypes.PRODUCT_LOADING });

  api
    .get("/cart")
    .then((res) =>
      dispatch({
        type: actionTypes.PRODUCT_SUCCESS,
        payload: res.data,
      }),
    )
    .catch((err) =>
      dispatch({
        type: actionTypes.PRODUCT_ERROR,
        payload: err,
      }),
    );
};

export const addProduct = (payload) => (dispatch) => {
  const newProduct = {
    id: v4(),
    productId: payload.id,
    title: payload.title,
    price: payload.price,
    photo: payload.photo,
    amount: 1,
  };

  api
    .post("/cart", newProduct)
    .then(() =>
      dispatch({
        type: actionTypes.PRODUCT_ADD,
        payload: newProduct,
      }),
    )
    .catch((err) => console.log(err));
};

export const updateProduct = (id, newAmount) => (dispatch) => {
  api
    .patch(`/cart/${id}`, { amount: newAmount })
    .then((res) =>
      dispatch({
        type: actionTypes.PRODUCT_UPDATE,
        payload: res.data,
      }),
    )
    .catch((err) => console.log(err));
};

export const deleteProduct = (id) => (dispatch) => {
  api
    .delete(`/cart/${id}`)
    .then((res) =>
      dispatch({
        type: actionTypes.PRODUCT_DELETE,
        payload: res.data,
      }),
    )
    .catch((err) => console.log(err));
};
