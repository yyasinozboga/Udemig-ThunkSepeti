import { Link, useNavigate } from "react-router-dom";
import { IoRestaurant } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";
import { useSelector } from "react-redux";
import Container from "./Container";

const Header = () => {
  const { restaurants } = useSelector((store) => store.restaurants);
  const { products } = useSelector((store) => store.products);
  const navigate = useNavigate();
  const count = products.reduce((a, product) => a + product.amount, 0);

  return (
    <Container designs={"flex justify-between items-center border-b-2"}>
      <Link to={"/"} className="text-2xl md:text-3xl font-bold text-red-500">
        ThunkSepeti
      </Link>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <span className="font-medium">Yakınızızda {restaurants.length}</span>
          <IoRestaurant className="text-red-500" />
        </div>
        <button className="border rounded-md px-3 py-1 font-medium text-red-500">
          Kayıt Ol
        </button>
        <button
          className="flex items-center gap-3"
          onClick={() => navigate("/products")}
        >
          <BsBasket className="size-5" />
          <span className="font-medium text-lg">{count}</span>
        </button>
      </div>
    </Container>
  );
};

export default Header;
