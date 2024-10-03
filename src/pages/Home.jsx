import { useSelector } from "react-redux";
import Card from "../components/Card";
import Container from "../components/Container";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Home = () => {
  const { restaurants, isLoading, error } = useSelector(
    (store) => store.restaurants,
  );

  return (
    <Container>
      <h1 className="font-bold text-lg md:text-xl">
        Yakınınızdaki Restoranlar
      </h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5">
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Home;
