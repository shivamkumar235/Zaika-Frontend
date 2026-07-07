import { useCart } from "../context/CartContext";
import { IndianRupee } from "lucide-react";

const CartItems = () => {
  const { cart, increase, decrease } = useCart();

  return (
    <div>
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-4"
        >
          {/* Dish Name */}
          <div>
            <h2 className="font-semibold w-[45vw] sm:w-[12vw] md:w-[12vw] lg:w-[12vw]">
              {item.dishName}
            </h2>
          </div>

          {/* Quantity */}
          <div className="flex border rounded-lg overflow-hidden">
            <button
              onClick={() => decrease(item.id)}
              className="px-2 sm:px-3 md:px-3 lg:px-3 bg-red-700 text-white"
            >
              -
            </button>

            <span className="px-2 sm:px-4 md:px-4 lg:px-4 flex items-center">
              {item.quantity}
            </span>

            <button
              onClick={() => increase(item.id)}
              className="px-2 sm:px-3 md:px-3 lg:px-3 bg-red-700 text-white"
            >
              +
            </button>
          </div>

          {/* Price */}
          <h3 className="flex  font-bold items-center">
            <IndianRupee size={18} />
            {item.price * item.quantity}
          </h3>
        </div>
      ))}

      {/* <div className="mt-5 text-xl font-bold">Total : ₹{total}</div> */}
    </div>
  );
};

export default CartItems;
