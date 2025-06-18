import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold mb-6">Cart</h1>

      <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto">
        <div className="mb-6 flex flex-col items-center">
          <button
            className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>

          {cartItems.length === 0 && (
            <h2 className="text-lg mt-4 text-gray-600">Cart is empty. Add Items to the cart!</h2>
          )}
        </div>

        {cartItems.length !== 0 && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ItemList items={cartItems} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
