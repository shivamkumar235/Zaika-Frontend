import { ArrowRight, IndianRupee } from "lucide-react";

const CotegoryPageHero = () => {
  return (
    <div>
      <div className="w-full mt-15 h-[10vw] px-20">
        <div className="text-5xl font-semibold">Kabab</div>
        <h1 className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos,
          consequatur.
        </h1>
      </div>

      <div className="flex items-center px-20 gap-2">
        <h1 className="font-black text-[1.3vw]">Our All Best Cotegory</h1>
        <ArrowRight strokeWidth={3.5} />
      </div>

      <div className="px-40 flex gap-10 flex-wrap mt-5">
        <div className="h-[19vw] w-[17vw] rounded-t-xl overflow-hidden border-2 border-[#c1c1c1] rounded-2xl">
          <img
            className="w-full h-[50%] bg-cover"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2026/5/1/dbe2668e-7f52-4e0f-bc9a-0ecaefc41d21_c02a6daa-1b16-4850-9868-4b2d38ef3bf3.jpg"
            alt="db"
          />
          <div className="p-3 h-[50%]">
            <div>
              <div>
                <h1 className=" font-semibold text-[1.3vw]">Masala Dosa</h1>
                <p className="text-[1vw]">Lorem ipsum dolor sit amet.</p>
              </div>
              <div></div>
            </div>

            <div className="flex mt-4 justify-between">
              <h2 className="flex items-center font-bold">
                <IndianRupee size={25} strokeWidth={3} />
                <p className="text-xl ">87</p>
              </h2>
              <button className="px-6 text-red-600 py-1 border-1 rounded-xl border-red-600">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="h-[19vw] w-[17vw] rounded-t-xl overflow-hidden border-2 border-[#c1c1c1] rounded-2xl">
          <img
            className="w-full h-[50%] bg-cover"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2026/5/1/dbe2668e-7f52-4e0f-bc9a-0ecaefc41d21_c02a6daa-1b16-4850-9868-4b2d38ef3bf3.jpg"
            alt="db"
          />
          <div className="p-3 h-[50%]">
            <div>
              <div>
                <h1 className=" font-semibold text-[1.3vw]">Masala Dosa</h1>
                <p className="text-[1vw]">Lorem ipsum dolor sit amet.</p>
              </div>
              <div></div>
            </div>

            <div className="flex mt-4 justify-between">
              <h2 className="flex items-center font-bold">
                <IndianRupee size={25} strokeWidth={3} />
                <p className="text-xl ">87</p>
              </h2>
              <button className="px-6 text-red-600 py-1 border-1 rounded-xl border-red-600">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CotegoryPageHero;
