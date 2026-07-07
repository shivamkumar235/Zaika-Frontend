import { IndianRupee } from "lucide-react";
import nonveg from "../assets/non-veg.jpg";
// import { useState } from "react";
import { useCart } from "../context/CartContext";
const CotegoryCard = (propes) => {
  //   const [added, setAdded] = useState(false);
  //   const [Num, setNum] = useState(1);
  const { cart, addToCart, increase, decrease } = useCart();

  //   const IncNum = () => {
  //     setNum(Num + 1);
  //   };

  //   const DecNum = () => {
  //     if (Num > 1) {
  //       setNum(Num - 1);
  //     } else {
  //       setAdded(false);
  //     }
  //   };

  const item = cart.find((i) => i.id === propes.id);

  const quantity = item ? item.quantity : 0;

  return (
    <div>
      <div className=" h-[50vw] max-h-[340px]  w-[42vw] max-w-[290px] rounded-t-xl overflow-hidden border-2 border-[#c1c1c1] rounded-2xl">
        <img
          className="w-full h-[50%] bg-cover"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2026/5/1/dbe2668e-7f52-4e0f-bc9a-0ecaefc41d21_c02a6daa-1b16-4850-9868-4b2d38ef3bf3.jpg"
          alt="db"
        />

        <div className="p-2 sm:p-3 md:p-3 lg:p-3 flex-col flex justify-between h-[50%]">
          <div className="flex justify-between ">
            <div className="  w-[83%]">
              <h1 className=" font-semibold text-[3vw]   sm:text-[1.3vw] md:text-[1.3vw] lg:text-[1.3vw]">
                {propes.dishName}
              </h1>
              <p className="text-[2vw] sm:text-[0.9vw] md:text-[0.9vw] lg:text-[0.9vw]">
                {propes.description}
              </p>
            </div>
            <div>
              <img
                className="pt-2 h-7"
                src={
                  propes.type == "veg"
                    ? "https://i.pinimg.com/736x/67/64/ca/6764ca123d4fe6b1be2bdf9e0411bd72.jpg"
                    : nonveg
                }
                alt=""
              />
            </div>
          </div>

          <div className="flex mb-1 sm:mt-4 md:mt-4 lg:mt-4 mb-2 justify-between">
            <h2 className="flex items-center font-bold">
              <IndianRupee size={17} md:size={25} strokeWidth={3} />
              <p className="text-[4vw] sm:text-xl md:text-xl lg:text-xl">
                {propes.price}
              </p>
            </h2>

            {quantity === 0 ? (
              <button
                onClick={() => addToCart(propes)}
                className="px-3 sm:px-6 md:px-6 lg:px-6  sm:py-1 md:py-1 lg:py-1 border border-red-600 rounded-[2.1vw]  lg:rounded-xl text-red-600"
              >
                Add
              </button>
            ) : (
              <div className="flex  text-red-600 bg-red-600 overflow-hidden w-[15vw] sm:w-[6vw] md:w-[6vw] lg:w-[6vw]  border rounded-[1.5vw] sm:rounded-[0.6vw] md:rounded-[0.6vw] lg:rounded-[0.6vw] border-red-600">
                <button
                  onClick={() => decrease(propes.id)}
                  className="w-1/3 lg:p-1 cursor-pointer  bg-red-600 text-white"
                >
                  -
                </button>
                <p className="w-1/3 flex bg-white rounded-[0.5vw] sm:rounded-[0.2vw] md:rounded-[0.2vw] lg:rounded-[0.2vw] justify-center items-center text-black font-bold">
                  {quantity}
                </p>
                <button
                  onClick={() => increase(propes.id)}
                  className="w-1/3 cursor-pointer font-semibold bg-red-600 text-white"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CotegoryCard;
