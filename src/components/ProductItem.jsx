import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateProduct, deleteProduct } from "../redux/actions/basketActions";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const incProduct = () => {
    dispatch(updateProduct(product.id, product.amount + 1));
  };
  const decProduct = () => {
    dispatch(updateProduct(product.id, product.amount - 1));
  };
  const deleteClick = () => {
    dispatch(deleteProduct(product.id));
  };

  return (
    <div className="border rounded-md p-3 flex gap-3">
      <figure className="w-[115px]">
        <img src={product.photo} className="size-full rounded-lg" />
      </figure>
      <div className="flex flex-col justify-between w-full">
        <h1 className="text-red-500 font-medium text-lg">{product.title}</h1>
        <div className="flex justify-between items-center w-full">
          <span className="font-medium text-lg">{product.price}$</span>
          <div className="flex items-center gap-3 border rounded-lg py-1 px-3">
            {product.amount === 1 ? (
              <button>
                <FaTrash
                  className="text-red-500 size-4"
                  onClick={deleteClick}
                />
              </button>
            ) : (
              <button>
                <FaMinus className="text-red-500 size-4" onClick={decProduct} />
              </button>
            )}
            <span className="text-lg font-medium">{product.amount}</span>
            <button>
              <FaPlus className="text-red-500 size-4" onClick={incProduct} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
