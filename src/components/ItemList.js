import { useDispatch } from "react-redux";
import { LOGO } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          className="flex flex-col sm:flex-row justify-between border-b border-gray-300 py-4 gap-4"
          key={index}
        >
          {/* Image + Button */}
          <div className="sm:hidden w-full relative">
            <img
              className="w-full h-40 object-cover rounded-lg border"
              src={LOGO + item?.card?.info?.imageId}
              alt={item?.card?.info?.name}
            />
            <button
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-md shadow-md hover:bg-gray-800 transition"
              onClick={() => handleAddItems(item)}
            >
              Add +
            </button>
          </div>

          {/* Text Section */}
          <div className="sm:w-9/12 w-full break-words">
            <h3 className="font-semibold text-base mb-1 text-gray-800 break-words">
              {item?.card?.info?.name}
            </h3>
            <p className="text-sm text-gray-700 mb-1">
              {item?.card?.info?.price || item?.card?.info?.defaultPrice
                ? `₹${
                    (item?.card?.info?.price ??
                      item?.card?.info?.defaultPrice) / 100
                  }`
                : "Not Available"}
            </p>

            <p className="text-xs text-gray-500 break-words max-w-full">
              {item?.card?.info?.description}
            </p>
          </div>

          {/* Desktop Image + Button */}
          <div className="hidden sm:block sm:w-3/12 relative">
            <img
              className="w-full h-24 object-cover rounded-lg border"
              src={LOGO + item?.card?.info?.imageId}
              alt={item?.card?.info?.name}
            />
            <button
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-1.5 rounded-md shadow-md hover:bg-gray-800 transition"
              onClick={() => handleAddItems(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
