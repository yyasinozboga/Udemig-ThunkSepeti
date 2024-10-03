import { useParams } from "react-router-dom";
import RestaurantDetail from "./RestaurantDetail";
import ProductList from "./ProductList";
import Container from "../../components/Container";

const Restaurant = () => {
  const { id } = useParams();

  return (
    <div>
      <Container>
        <RestaurantDetail id={id} />
      </Container>

      <Container>
        <ProductList id={id} />
      </Container>
    </div>
  );
};

export default Restaurant;
