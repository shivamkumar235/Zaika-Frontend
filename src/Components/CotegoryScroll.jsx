import tan from "../assets/tandoorik-bg.png";
import BiryniRise from "../assets/BiryaniRicebg.png";
import Chinese from "../assets/chanisebg.png";
import ChickenGravy from "../assets/chikenGravybg.png";
import rotinaan from "../assets/rotinaanbg.png";
import Muttongravy from "../assets/muttongravy-bg.png";
import platter from "../assets//platterbg.png";
import vagitable from "../assets/Vagitable-bg.png";
import salad from "../assets/salad-bg.png";
import fish from "../assets/fishbg.png";
import dessert from "../assets/dessert-bg.png";
import Beverages from "../assets/Beverages_2bg.png";
import Egggravy from "../assets/EggGravy-bg.png";
import Fishgravy from "../assets/fishgravy-bg.png";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CotegoryScroll = () => {
  // const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-center">
        <div id="cotegorytrack" className="flex w-[83%] overflow-auto mt-12">
          <div className="flex rounded-2xl ">
            <div className=" w-max flex-col ">
              {" "}
              <div className="flex-col flex justify-center  max-w-max items-center">
                <Link to="/Kabab">
                  <img
                    id="cotegoryimg"
                    className=" h-16 sm:h-30 md:h-30 lg:h-30 w-16 sm:w-30 md:w-30 lg:w-30  flex items-center transition-transform  duration-600  hover:rotate-3 cursor-pointer hover:scale-105"
                    src={tan}
                    alt=""
                  />
                </Link>
                <h2
                  id="cotegoryname"
                  // onClick={navigate("/Kabab")}
                  className=" font-semibold text-center text-gray-900 mt-2"
                >
                  Kabab
                </h2>
              </div>
              <div className="flex-col mt-7 flex justify-center  max-w-max items-center">
                <Link to="/Biryani Rice">
                  {" "}
                  <img
                    id="cotegoryimg"
                    className=" h-16 sm:h-30 md:h-30 lg:h-30 w-16 sm:w-30 md:w-30 lg:w-30  flex items-center transition-transform  duration-600  hover:rotate-3 cursor-pointer hover:scale-105"
                    src={BiryniRise}
                    alt=""
                  />
                </Link>
                <h2
                  id="cotegoryname"
                  className=" font-semibold text-center text-gray-900 mt-2"
                >
                  Biryani Rise
                </h2>
              </div>
            </div>

            <div className=" w-max flex flex-col ml-10 sm:ml-25 md:ml-25 lg:ml-25">
              {" "}
              <div className="flex-col flex justify-center  max-w-max items-center">
                <Link to="/Chicken in Gravy">
                  {" "}
                  <img
                    id="cotegoryimg"
                    className=" h-16 sm:h-30 md:h-30 lg:h-30 w-16 sm:w-30 md:w-30 lg:w-30  flex items-center transition-transform  duration-600  hover:rotate-3 cursor-pointer hover:scale-105"
                    src={ChickenGravy}
                    alt=""
                  />
                </Link>
                <h2
                  id="cotegoryname"
                  className=" font-semibold text-center text-gray-900 mt-2"
                >
                  Chicken Gravy
                </h2>
              </div>
              <div className="flex-col mt-7 flex justify-center  max-w-max items-center">
                <Link to="/Mutton in Gravy">
                  <img
                    id="cotegoryimg"
                    className=" h-16 sm:h-30 md:h-30 lg:h-30 w-16 sm:w-30 md:w-30 lg:w-30  flex items-center transition-transform  duration-600  hover:rotate-3 cursor-pointer hover:scale-105"
                    src={Muttongravy}
                    alt=""
                  />
                </Link>
                <h2
                  id="cotegoryname"
                  className=" font-semibold text-center text-gray-900 mt-2"
                >
                  Mutton Gravy
                </h2>
              </div>
            </div>

            <div className=" w-max flex-col ml-10 sm:ml-25 md:ml-25 lg:ml-25">
              {" "}
              <div className="flex-col flex justify-center  max-w-max items-center">
                <Link to="/Roti Naan">
                  <img
                    id="cotegoryimg"
                    className=" h-16 sm:h-30 md:h-30 lg:h-30 w-16 sm:w-30 md:w-30 lg:w-30  flex items-center transition-transform  duration-600  hover:rotate-3 cursor-pointer hover:scale-105"
                    src={rotinaan}
                    alt=""
                  />
                </Link>
                <h2
                  id="cotegoryname"
                  className=" font-semibold text-center text-gray-900 mt-2"
                >
                  Roti Naan
                </h2>
              </div>
              <div className="flex-col mt-7 flex justify-center  max-w-max items-center">
                <Link to="/Chinese">
                  <img
                    id="cotegoryimg"
                    className=" h-16 sm:h-30 md:h-30 lg:h-30 w-16 sm:w-30 md:w-30 lg:w-30  flex items-center transition-transform  duration-600  hover:rotate-3 cursor-pointer hover:scale-105"
                    src={Chinese}
                    alt=""
                  />
                </Link>

                <h2
                  id="cotegoryname"
                  className=" font-semibold text-center text-gray-900 mt-2"
                >
                  Chinese
                </h2>
              </div>
            </div>

            <div className=" w-max flex-col ml-10 sm:ml-25 md:ml-25 lg:ml-25">
              {" "}
              <div className="flex-col flex justify-center  max-w-max items-center">
                <Link to="/Vegetable">
                  <img
                    id="cotegoryimg"
                    className=" h-16 sm:h-30 md:h-30 lg:h-30 w-16 sm:w-30 md:w-30 lg:w-30  flex items-center transition-transform  duration-600  hover:rotate-3 cursor-pointer hover:scale-105"
                    src={vagitable}
                    alt=""
                  />
                </Link>
                <h2
                  id="cotegoryname"
                  className=" font-semibold text-center text-gray-900 mt-2"
                >
                  Vegetable
                </h2>
              </div>
              <div className="flex-col mt-7 flex justify-center  max-w-max items-center">
                <Link to="/Salad">
                  <img
                    id="cotegoryimg"
                    className=" h-16 sm:h-30 md:h-30 lg:h-30 w-16 sm:w-30 md:w-30 lg:w-30  flex items-center transition-transform  duration-600  hover:rotate-3 cursor-pointer hover:scale-105"
                    src={salad}
                    alt=""
                  />
                </Link>
                <h2
                  id="cotegoryname"
                  className=" font-semibold text-center text-gray-900 mt-2"
                >
                  Salad
                </h2>
              </div>
            </div>

            <div className=" w-max flex-col ml-10 sm:ml-25 md:ml-25 lg:ml-25">
              {" "}
              <div className="flex-col flex justify-center  max-w-max items-center">
                <Link to="/Platter">
                  {" "}
                  <img
                    id="cotegoryimg"
                    className=" h-16 sm:h-30 md:h-30 lg:h-30 w-16 sm:w-30 md:w-30 lg:w-30  flex items-center transition-transform  duration-600  hover:rotate-3 cursor-pointer hover:scale-105"
                    src={platter}
                    alt=""
                  />
                </Link>
                <h2
                  id="cotegoryname"
                  className=" font-semibold text-center text-gray-900 mt-2"
                >
                  Platter
                </h2>
              </div>
              <div className="flex-col mt-7 flex justify-center  max-w-max items-center">
                <Link to="/Fish">
                  <img
                    id="cotegoryimg"
                    className=" h-16 sm:h-30 md:h-30 lg:h-30 w-16 sm:w-30 md:w-30 lg:w-30  flex items-center transition-transform  duration-600  hover:rotate-3 cursor-pointer hover:scale-105"
                    src={fish}
                    alt=""
                  />
                </Link>
                <h2
                  id="cotegoryname"
                  className=" font-semibold text-center text-gray-900 mt-2"
                >
                  Fish & Prawn
                </h2>
              </div>
            </div>

            <div className=" w-max flex-col ml-10 sm:ml-25 md:ml-25 lg:ml-25">
              {" "}
              <div className="flex-col flex justify-center  max-w-max items-center">
                <Link to="/Dessert">
                  <img
                    id="cotegoryimg"
                    className=" h-16 sm:h-30 md:h-30 lg:h-30 w-16 sm:w-30 md:w-30 lg:w-30  flex items-center transition-transform  duration-600  hover:rotate-3 cursor-pointer hover:scale-105"
                    src={dessert}
                    alt=""
                  />
                </Link>
                <h2
                  id="cotegoryname"
                  className=" font-semibold text-center text-gray-900 mt-2"
                >
                  Dessert
                </h2>
              </div>
              <div className="flex-col mt-7 flex justify-center  max-w-max items-center">
                <Link to="/Beverages">
                  <img
                    id="cotegoryimg"
                    className=" h-16 sm:h-30 md:h-30 lg:h-30 w-14 sm:w-30 md:w-30 lg:w-25  flex items-center transition-transform  duration-600  hover:rotate-3 cursor-pointer hover:scale-105"
                    src={Beverages}
                    alt=""
                  />
                </Link>
                <h2
                  id="cotegoryname"
                  className=" font-semibold text-center text-gray-900 mt-2"
                >
                  Beverages
                </h2>
              </div>
            </div>

            <div className=" w-max flex-col ml-10 sm:ml-25 md:ml-25 lg:ml-25">
              {" "}
              <div className="flex-col flex justify-center  max-w-max items-center">
                <Link to="/Egg in Gravy">
                  {" "}
                  <img
                    id="cotegoryimg"
                    className=" h-16 sm:h-30 md:h-30 lg:h-30 w-16 sm:w-30 md:w-30 lg:w-30  flex items-center transition-transform  duration-600  hover:rotate-3 cursor-pointer hover:scale-105"
                    src={Egggravy}
                    alt=""
                  />
                </Link>
                <h2
                  id="cotegoryname"
                  className=" font-semibold text-center text-gray-900 mt-2"
                >
                  Egg in Gravy
                </h2>
              </div>
              <div className="flex-col mt-7 flex justify-center  max-w-max items-center">
                <Link to="Fish in Gravy">
                  <img
                    id="cotegoryimg"
                    className=" h-16 sm:h-30 md:h-30 lg:h-30 w-16 sm:w-30 md:w-30 lg:w-30  flex items-center transition-transform  duration-600  hover:rotate-3 cursor-pointer hover:scale-105"
                    src={Fishgravy}
                    alt=""
                  />
                </Link>
                <h2
                  id="cotegoryname"
                  className=" font-semibold text-center text-gray-900 mt-2"
                >
                  Fish in Gravy
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CotegoryScroll;
