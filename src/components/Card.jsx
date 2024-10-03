import { FaStar } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = ({ restaurant }) => {
  return (
    <Link
      to={`/restaurants/${restaurant.id}`}
      className="relative transition-all shadow-md hover:shadow-xl hover:cursor-pointer"
    >
      <figure className="w-full">
        <img src={restaurant.photo} className="w-full rounded-t-lg" />
      </figure>

      <div className="flex flex-col p-2 gap-2 w-full">
        <div className="flex items-center justify-between">
          <h2 className="font-medium text-lg">{restaurant.name}</h2>
          <div className="flex items-center gap-2">
            <FaStar className="text-red-500" />
            <span className="font-medium">{restaurant.rating}</span>
          </div>
        </div>
        <span className="text-gray-400 font-medium">
          {restaurant.minPrice} TL minimum
        </span>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <FaClock />
            <span className="font-medium">{restaurant.estimatedDelivery}</span>
          </div>
          {restaurant.isDeliveryFree && (
            <div className="flex items-center gap-2">
              <MdDeliveryDining className="text-red-500 size-5" />
              <span className="text-red-500 font-medium">Ücretsiz</span>
            </div>
          )}
        </div>
      </div>

      <span className="absolute top-2 right-2 font-medium text-white py-1 px-3 rounded-lg bg-red-500">
        {restaurant.distance} km uzakta
      </span>
    </Link>
  );
};

export default Card;
