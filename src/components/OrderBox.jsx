import { useSelector } from "react-redux";

const OrderBox = () => {
  const { products } = useSelector((store) => store.products);
  const total = products.reduce(
    (a, product) => a + product.amount * product.price,
    0,
  );

  return (
    <div className="border rounded-lg p-3 flex flex-col gap-3 h-[180px]">
      <h1 className="font-medium text-2xl">Sipariş Detayı</h1>
      <div className="flex items-center gap-2">
        <span className="text-gray-400 font-medium">Ürün Adedi:</span>
        <span className="text-red-500 font-medium">{products.length}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-gray-400 font-medium">Toplam Fiyat:</span>
        <span className="text-red-500 font-medium">{total.toFixed(2)}$</span>
      </div>
      <button className="border rounded-md py-1 px-3 text-white bg-red-500 font-medium w-[150px]">
        Siparişi Onayla
      </button>
    </div>
  );
};

export default OrderBox;
