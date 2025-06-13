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
  console.log(listOfRestaurant);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you are offline, please check your Internet!!!</h1>;
  }

  return listOfRestaurant.length === 0 ? (
    <Simmar />
  ) : (
    <div className="body bg-[#AAB99A]">
      <div className="Search-container flex ">
        <input
          className="p-1 m-4 rounded-sm w-64 text-center outline-none"
          type="text"
          placeholder="Search Here..."
          value={searchRes}
          onChange={(e) => {
            setSearchRes(e.target.value);
          }}
        />
        <button
          className="border px-4  text-sm bg-[#d0ddd0] text-black rounded-lg m-4 "
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
          className="border px-4  text-sm bg-[#d0ddd0] text-black rounded-lg m-4 "
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
      <div className="res-container flex flex-wrap justify-center">
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
