import actionTypes from "../redux/actionTypes";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../components/Container";
import Loader from "../components/Loader";
import Error from "../components/Error";
import ProductItem from "../components/ProductItem";
import api from "../utils/api";
import OrderBox from "../components/OrderBox";

const Products = () => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((store) => store.products);
  useEffect(() => {
    api
      .get("/cart")
      .then((res) =>
        dispatch({ type: actionTypes.PRODUCT_SUCCESS, payload: res.data }),
      )
      .catch((err) =>
        dispatch({ type: actionTypes.PRODUCT_ERROR, payload: err }),
      );
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : products.length === 0 ? (
        <h1>Sepette hiç ürün yok</h1>
      ) : (
        <>
          <h1 className="font-medium text-4xl">SEPET</h1>
          <main className="grid lg:grid-cols-[auto_300px] gap-5 mt-3">
            <div className="flex flex-col gap-3">
              {products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
            <OrderBox />
          </main>
        </>
      )}
    </Container>
  );
};

export default Products;
