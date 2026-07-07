import CotegoryScroll from "./CotegoryScroll";
import { ArrowRight } from "lucide-react";

const Ourcotegory = () => {
  return (
    <div className=" w-full flex flex-col mt-10">
      {" "}
      <div className=" flex-col px-5 sm:px-20 md:px-20 lg:px-20 ">
        <div className="flex items-center gap-2">
          <h1 className="font-black text-[5vw] sm:text-[1.3vw] md:text-[1.3vw] lg:text-[1.3vw]">
            Our All Best Cotegory
          </h1>
          <ArrowRight strokeWidth={3.5} />
        </div>
      </div>
      <CotegoryScroll />
    </div>
  );
};

export default Ourcotegory;
