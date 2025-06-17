import Simmar from "./Simmar";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCart from "./MenuCart";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Simmar />;

  const { text } = resInfo?.cards[0]?.card?.card;

  const menuCart =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        const type = c?.card?.card?.["@type"];
        return (
          type ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
          type ===
            "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );
      }
    );

  return (
    <div className="bg-[#f5f5f4] min-h-screen px-4 py-6 sm:px-6 md:px-12 lg:px-32">
      <h1 className="text-xl sm:text-3xl font-bold text-center mb-6 text-gray-700">
        {text}
      </h1>

      <div className="flex text-gray-700 flex-col gap-1 max-w-4xl mx-auto sm:max-w-7xl">
        {menuCart.map((menu, index) => (
          <MenuCart
            key={menu?.card?.card?.title}
            data={menu?.card?.card}
            showItems={index === showIndex ? true : false}
           setShowIndex={() => setShowIndex(prevIndex => prevIndex === index ? null : index)}

          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
