import { useState } from "react";
import ItemList from "./ItemList";

const MenuCart = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  let logic = data?.categories?.map((c) => c.itemCards);
  // console.log("L", logic);

  return (
    <div>
      <div className="w-full sm:w-1/2 mx-auto my-3 bg-white p-3 rounded-lg shadow-lg font-bold">
        <div className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
          <span>
            {data.title} ({data?.itemCards?.length || data?.categories?.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={data?.itemCards || logic} />}
      </div>
    </div>
  );
};

export default MenuCart;
