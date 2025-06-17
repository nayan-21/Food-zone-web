import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Header = () => {
  const [logbtn, setLogbtn] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // for mobile menu
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();

  return (
    <div className="bg-[#f9f5ec] shadow-lg px-4 sticky top-0 z-50 py-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="w-12 sm:w-16 md:w-20 rounded-full cursor-pointer"
            src="https://masterbundles.com/wp-content/uploads/2023/02/3445-567.jpg"
            alt="logo"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden ">
          <button
            className="text-gray-700 text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center">
          <ul className="flex text-gray-700 font-semibold text-sm md:text-base items-center">
            <li className="mx-2 md:mx-4">
              Online Status: {onlineStatus ? "🟢" : "🔴"}
            </li>
            {/* <Link to="/grocery">
              <li className="mx-2 md:mx-4">Grocery</li>
            </Link> */}
            <Link to="/">
              <li className="mx-2 md:mx-4">Home</li>
            </Link>
            <Link to="/about">
              <li className="mx-2 md:mx-4">About</li>
            </Link>
            <Link to="/contact">
              <li className="mx-2 md:mx-4">Contact</li>
            </Link>
            <Link to="/cart">
              <li className="mx-2 md:mx-4">Cart - {cartItems.length}</li>
            </Link>
            <Link to="/login">
              <button
                className="border border-gray-300 px-4 py-1.5 bg-[#cce3d0] hover:bg-[#b4d6bd] text-gray-700 rounded-md shadow-sm transition duration-200"

                onClick={() => {
                  logbtn === "Login" ? setLogbtn("Logout") : setLogbtn("Login");
                }}
              >
                {logbtn}
              </button>
            </Link>
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col text-gray-700 font-semibold space-y-2 text-sm">
            <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
            {/* <Link to="/grocery">
              <li>Grocery</li>
            </Link> */}
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <Link to="/cart">
              <li>Cart - {cartItems.length}</li>
            </Link>
            <Link to="/login">
              <button
                className="border border-gray-300 px-4 py-1.5 bg-[#cce3d0] hover:bg-[#b4d6bd] text-gray-700 rounded-md shadow-sm transition duration-200"

                onClick={() => {
                  logbtn === "Login" ? setLogbtn("Logout") : setLogbtn("Login");
                }}
              >
                {logbtn}
              </button>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
