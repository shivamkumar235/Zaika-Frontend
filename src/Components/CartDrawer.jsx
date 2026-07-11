import { X } from "lucide-react";
import { useCart } from "../context/CartContext";
import CartItems from "./CartItems";

const CartDrawer = ({ open, setOpen, setOpenDelivery }) => {
  const { total, cart } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 transition-all duration-300 z-40
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[350px] sm:w-[420px] md:w-[420px] lg:w-[420px] bg-white z-50
        shadow-2xl transition-all duration-500
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b">
          <h1 className="text-3xl font-semibold">Your Cart</h1>

          <button onClick={() => setOpen(false)}>
            <X size={32} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="h-[68vh]  overflow-y-auto p-5">
          {cart.length < 1 ? (
            <p className="text-md text-center opacity-50">
              Please Select You Febrouit Food
            </p>
          ) : (
            <CartItems />
          )}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 w-full border-t p-5 bg-white">
          <div
            className={
              cart.length < 1
                ? "flex justify-between mt-3 text-3xl opacity-50 font-bold"
                : "flex justify-between mt-3 text-3xl font-bold"
            }
          >
            <p>Total</p>
            <p>{total}</p>
          </div>

          <button
            onClick={() => {
              setOpen(false);
              setOpenDelivery(true);

              // console.log("hai");
            }}
            className={
              cart.length < 1
                ? "mt-5 w-full bg-red-600 text-white py-3 rounded-xl text-xl font-semibold opacity-50"
                : "mt-5 w-full bg-red-600 text-white py-3 rounded-xl text-xl font-semibold"
            }
          >
            Checkout →
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
