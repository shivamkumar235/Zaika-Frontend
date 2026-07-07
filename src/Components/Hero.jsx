import { Minus } from "lucide-react";
import heroplate from "../assets/heroplatebg.png";
import foodstick from "../assets/stckb.png";

const Hero = () => {
  return (
    <div className="flex justify-center px-2 sm:px-3 md:px-14 lg:px-11">
      {" "}
      <div
        id="gerobg"
        className="w-[96%] h-[120vw] sm:h-[90vw] md:h-[55vw] lg:h-[30vw] bg-red-600 rounded-2xl px-5 sm:px-8 md:px-14 lg:px-20 flex flex-col lg:flex-row items-center justify-between overflow-hidden"
      >
        {/* Left */}
        <div className="w-full lg:w-[50%] mt-8 lg:mt-0">
          <div className="flex items-center">
            <Minus className="text-white w-5 h-5 lg:w-6 lg:h-6" />

            <h3
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="text-white text-sm sm:text-base md:text-lg lg:text-[1.1vw]"
            >
              Delivering near you, today
            </h3>
          </div>

          <h1
            style={{ fontFamily: "Cinzel Bold" }}
            className="text-white font-bold mt-3 text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[4vw]"
          >
            Welcome to Zaika!
          </h1>

          <h1
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="pl-1 text-sm sm:text-base md:text-lg lg:text-[18px] text-gray-200 mt-4 leading-7"
          >
            Order to Zaika for get delicious food, Like - Mughlai, Tandoor,
            Chinese and Indian from cooks near you. Add what you like, check out
            in under a minute.
          </h1>
        </div>

        {/* Right */}
        <div className="relative w-full lg:w-[50%] flex justify-center items-center mt-5 lg:mt-0">
          <img
            src={foodstick}
            alt=""
            className="absolute w-[18vw] sm:w-[14vw] md:w-[11vw] lg:w-[8vw] top-0 right-[8%]"
          />

          <img
            src={heroplate}
            alt=""
            className="w-[70vw] sm:w-[55vw] md:w-[42vw] lg:w-[25vw] hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
