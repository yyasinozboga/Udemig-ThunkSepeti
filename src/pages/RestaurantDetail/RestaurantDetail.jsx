import { IoArrowDown } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { useState, useEffect } from "react";
import api from "../../utils/api";

const RestaurantDetail = ({ id }) => {
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    api
      .get(`/restaurants/${id}`)
      .then((res) => setRestaurant(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex gap-5 h-44 border-b-2 pb-7">
      <figure className="h-full">
        <img src={restaurant.photo} className="h-full rounded-lg" />
      </figure>

      <div className="flex flex-col justify-between">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <IoArrowDown className="text-red-500 size-5" />
            <span className="text-gray-400 font-medium">
              min {restaurant.minPrice} TL
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FaClock className="text-red-500" />
            <span className="text-gray-400 font-medium">
              {restaurant.estimatedDelivery} dak.
            </span>
          </div>
        </div>
        <h1 className="font-medium text-2xl">{restaurant.name}</h1>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <FaStar className="text-red-500" />
            <span className="text-gray-400 font-medium">
              {restaurant.rating}
            </span>
          </div>

          <span className="text-red-500 font-medium hover:cursor-pointer">
            Yorumları Gör
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
