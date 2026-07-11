import { X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const DeliveryDrawer = ({ open, setOpen }) => {
  const [customerName, setcustomerName] = useState("");
  const [phone, setphone] = useState("");
  const [houseNo, sethouseNo] = useState("");
  const [area, setarea] = useState("");
  const [landmark, setlandmark] = useState("");
  const [city, setcity] = useState("");
  const [pincode, setpincode] = useState("");

  const { total, cart } = useCart();
  //   const [first, setfirst] = useState(second)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      customerName,
      phone,
      address: {
        houseNo,
        area,
        landmark,
        city,
        pincode,
      },
      items: cart,
      grandTotal: total,
      paymentMethod: "Cash on Delivery",
    };
    console.log(orderData);

    const response = await fetch(`${import.meta.env.VITE_API_URL}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-all duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed top-0 right-0 h-screen w-[350px] sm:w-[420px] bg-white z-50
          transition-transform duration-500
          ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-between items-center p-5 border-b">
            <h1 className="text-2xl font-bold">Delivery Details</h1>

            <button onClick={() => setOpen(false)}>
              <X />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-5 space-y-4">
            <input
              value={customerName}
              onChange={(e) => {
                setcustomerName(e.target.value);
              }}
              className="w-full border p-3 rounded-lg"
              placeholder="Full Name"
            />
            <input
              value={phone}
              onChange={(e) => {
                setphone(e.target.value);
              }}
              className="w-full border p-3 rounded-lg"
              placeholder="Phone Number"
            />

            <input
              value={houseNo}
              onChange={(e) => {
                sethouseNo(e.target.value);
              }}
              className="w-full border p-3 rounded-lg"
              placeholder="House No"
            />
            <input
              value={area}
              onChange={(e) => {
                setarea(e.target.value);
              }}
              className="w-full border p-3 rounded-lg"
              placeholder="Area / Locality"
            />
            <input
              value={landmark}
              onChange={(e) => {
                setlandmark(e.target.value);
              }}
              className="w-full border p-3 rounded-lg"
              placeholder="Landmark"
            />
            <input
              value={city}
              onChange={(e) => {
                setcity(e.target.value);
              }}
              className="w-full border p-3 rounded-lg"
              placeholder="City"
            />
            <input
              value={pincode}
              onChange={(e) => {
                setpincode(e.target.value);
              }}
              className="w-full border p-3 rounded-lg"
              placeholder="Pincode"
            />

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DeliveryDrawer;
