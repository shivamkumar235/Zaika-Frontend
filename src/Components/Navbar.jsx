import { ShoppingCart, MapPinCheckInside } from "lucide-react";
// import { useCart } from "../context/CartContext";
import { useState } from "react";
const Navbar = ({ setOpenCart }) => {
  const [location, setLocation] = useState("");

  // const getAddress = async (lat, lng) => {
  //   console.log("hai");

  //   try {
  //     const res = await fetch(
  //       `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
  //     );

  //     const data = await res.json();
  //     setLocation(data.display_name);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       getAddress(position.coords.latitude, position.coords.longitude);
  //     },
  //     (err) => console.log(err),
  //   );
  // }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          console.log(latitude, longitude);

          // Backend me save karo
        },
        () => {
          alert("Location access denied");
        },
      );
    } else {
      alert("Geolocation is not supported.");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-19 py-4 gap-4">
      {/* Logo */}
      <div className="flex items-center gap-3 w-full sm:w-auto justify-between">
        <h1
          style={{ fontFamily: "Cinzel Bold" }}
          id="Zaika"
          className="text-3xl sm:text-4xl font-bold text-red-600"
        >
          Zaika
        </h1>

        {/* Mobile Cart */}
        <div
          onClick={() => setOpenCart(true)}
          className="sm:hidden h-11 w-11 bg-red-600 flex items-center justify-center rounded-2xl cursor-pointer hover:bg-red-500"
        >
          <ShoppingCart className="text-white" />
        </div>
      </div>

      {/* Location */}
      <div className="relative w-full sm:w-[60%] lg:w-[30vw]">
        <MapPinCheckInside
          // onClick={}
          className="absolute left-3 top-1/2 cursor-pointer -translate-y-1/2 text-red-600"
          size={22}
        />

        <div className="flex gap-2">
          {" "}
          <input
            type="text"
            value={location}
            placeholder="Enter your location"
            onChange={(e) => setLocation(e.target.value)}
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="w-full pl-10 pr-4 py-3 text-sm sm:text-base lg:text-lg border border-red-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            className="  rounded-xl hover:bg-red-500 text-red-600 hover:text-white font-semibold transition-colors cursor-pointer text-[0.9vw]  duration-800"
            onClick={getLocation}
          >
            Use Current Location
          </button>
        </div>
      </div>

      {/* Desktop / Tablet Cart */}
      <div
        onClick={() => setOpenCart(true)}
        className="hidden sm:flex h-11 w-11 bg-red-600 items-center justify-center rounded-2xl cursor-pointer hover:bg-red-500 transition-colors duration-500"
      >
        <ShoppingCart className="text-white" />
      </div>
    </div>
  );
};

export default Navbar;
