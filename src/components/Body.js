import Simmar from "./Simmar";
import ResCard, { withOpenLable } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchRes, setSearchRes] = useState("");
  const [filterList, setFilterList] = useState([]);

  const ResCardWithOpenLable = withOpenLable(ResCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const BASE_URL = "https://food-zone-backend-hz7e.onrender.com";
    const data = await fetch(`${BASE_URL}/api/swiggy`);
    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you are offline, please check your Internet!!!</h1>;
  }

  return listOfRestaurant.length === 0 ? (
    <Simmar />
  ) : (
    <div className="body bg-[#f5f5f4] min-h-screen px-4 sm:px-6   ">
      <div className="Search-container flex flex-col sm:flex-row justify-between gap-2 sm:gap-4 mb-4">
        <input
          className="p-2 my-6 rounded-lg w-full sm:w-1/2 text-center outline-none shadow-md"
          type="text"
          placeholder="Search Here..."
          value={searchRes}
          onChange={(e) => {
            setSearchRes(e.target.value);
          }}
        />
        <div className="flex flex-col sm:flex-row -mt-5 sm:mt-1 gap-2 sm:gap-4 justify-center items-center">
          <button
            className="px-4 py-1.5 text-sm  font-semibold bg-[#cce3d0] text-gray-800 rounded-md m-2 shadow-sm hover:bg-[#b4d6bd] transition duration-200"

            onClick={() => {
              let filterSearch = listOfRestaurant.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchRes.toLowerCase());
              });
              setFilterList(filterSearch);
            }}
          >
            Search
          </button>
          <button
            className="px-4 py-1.5 text-sm -mt-1 sm:mt-1 font-semibold bg-[#cce3d0] text-gray-800 rounded-md m-2 shadow-sm hover:bg-[#b4d6bd] transition duration-200"
            onClick={() => {
              let filterData = listOfRestaurant.filter((res) => {
                return res.info.avgRating > 4.5;
              });
              setFilterList(filterData);
            }}
          >
            Top Restaurant
          </button>
        </div>
      </div>


      <div className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center my-8">
        {filterList.map((res) => {
          return (
            <Link key={res?.info?.id} to={"restaurants/" + res?.info?.id}>
              {res?.info?.isOpen ? (
                <ResCardWithOpenLable resData={res?.info} />
              ) : (
                <ResCard resData={res?.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
