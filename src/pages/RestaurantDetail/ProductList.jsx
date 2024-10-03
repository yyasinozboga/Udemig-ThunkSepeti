import { FaFire } from "react-icons/fa";
import { useState, useEffect } from "react";
import api from "../../utils/api";
import Product from "../../components/Product";

const ProductList = ({ id }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    api
      .get(`/products?restaurantId=${id}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="flex items-center gap-2">
        <FaFire className="text-red-500 size-6" />
        <span className="font-bold text-2xl">Popüler</span>
      </div>
      <p className="text-gray-400 font-medium">
        Restoranın en çok tercih edilen ürünleri
      </p>
      <div className="flex flex-col gap-3 mt-3">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
