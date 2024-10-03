import actionTypes from "../actionTypes";

const initialState = {
  products: [],
  isLoading: true,
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_LOADING:
      return state;

    case actionTypes.PRODUCT_ERROR:
      return { ...state, error: true, isLoading: false };

    case actionTypes.PRODUCT_SUCCESS:
      return { products: action.payload, isLoading: false, error: null };

    case actionTypes.PRODUCT_ADD:
      const added = state.products.concat(action.payload);

      return { ...state, products: added, isLoading: false };

    case actionTypes.PRODUCT_UPDATE:
      const updated = state.products.map((product) =>
        product.id === action.payload.id ? action.payload : product,
      );

      return { ...state, products: updated, isLoading: false };

    case actionTypes.PRODUCT_DELETE:
      const filtered = state.products.filter(
        (product) => product.id !== action.payload.id,
      );

      return { ...state, products: filtered, isLoading: false };

    default:
      return state;
  }
};

export default productsReducer;
