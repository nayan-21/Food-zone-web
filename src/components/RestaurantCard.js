import { LOGO } from "../utils/constant";

const ResCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData;

  return (
    <div className="res-card w-64 bg-[#fffef9] rounded-xl overflow-hidden shadow-md transition transform hover:scale-105 flex flex-col h-full">
      <div className="res-logo">
        <img
          className="w-full h-40 object-cover"
          src={LOGO + cloudinaryImageId}
          alt="Restaurant Logo"
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-1">
        <h1 className="font-bold text-lg">{name}</h1>
        <p className="text-sm text-gray-600 line-clamp-1">
          {cuisines.join(", ")}
        </p>
        <p className="font-semibold text-sm text-yellow-800 mt-1">
          ⭐ {avgRating}
        </p>
      </div>
    </div>
  );
};

export const withOpenLable = (ResCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 bg-green-700 text-white text-xs px-2 py-1 rounded-full shadow">
          Open
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
