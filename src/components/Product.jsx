import { IoIosAdd } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import {
  getProducts,
  addProduct,
  updateProduct,
} from "../redux/actions/basketActions";
import { useEffect } from "react";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const { products } = useSelector((store) => store.products);
  const found = products.find((item) => item.productId === product.id);
  const handleProduct = () => {
    found
      ? dispatch(updateProduct(found.id, found.amount + 1))
      : dispatch(addProduct(product));
  };

  return (
    <div className="p-3 border rounded-lg grid grid-cols-[1fr_115px] gap-3 transition duration-300 cursor-pointer hover:bg-red-100 hover:scale-[1.02] relative">
      <div className="flex flex-col justify-between">
        <h1 className="font-medium text-lg">{product.title}</h1>
        <p className="text-gray-400">{product.desc}</p>
        <span className="font-medium">{product.price}$</span>
      </div>
      <figure>
        <img src={product.photo} className="rounded-lg size-full" />
      </figure>
      <button
        className="absolute bottom-4 right-4 bg-white size-8 flex justify-center items-center rounded-full"
        onClick={handleProduct}
      >
        {found ? (
          <span className="text-lg font-medium">{found.amount}</span>
        ) : (
          <IoIosAdd className="size-6" />
        )}
      </button>
    </div>
  );
};

export default Product;
