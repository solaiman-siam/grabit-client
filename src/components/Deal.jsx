import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { LuEye } from "react-icons/lu";
import { MdOutlineCompareArrows } from "react-icons/md";
import { PiHeartBold } from "react-icons/pi";
import { RiShoppingCartLine } from "react-icons/ri";
import useAxiosCommon from "../hooks/useAxiosCommon";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function Deal() {
  const axiosCommon = useAxiosCommon();
  const [sidebar, setSidebar] = useState(false);
  const [currentIdx, setCurrentIdx] = useState();

  const { data: deals = [] } = useQuery({
    queryKey: ["deals"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/deals");
      return data;
    },
  });


  const handleHoverEnter = (value1, value2) => {
    setSidebar(value1);
    setCurrentIdx(value2);
  };

  const handleHoverOut = (value1, value2) => {
    setSidebar(value1);
    setCurrentIdx(value2);
  };


  return (
    <div className="container px-20 mx-auto py-5 ">
      <div>
        <h3 className="text-2xl text-gray-600 font-semibold pb-2">
          Day Of The <span className="text-[#5CAF90]">Deal</span>
        </h3>
        <p className="pb-10 text-gray-400 font-normal text-[15px] ">
          Don't wait. The time will never be just right.
        </p>
      </div>
      <Swiper
        watchSlidesProgress={true}
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        className="mySwiper"
      >
        {deals.map((deal, index) => (
          <SwiperSlide
            onMouseLeave={() => handleHoverEnter(false, index)}
            onMouseEnter={() => handleHoverOut(true, index)}
            className="group border cursor-pointer"
            key={deal._id}
          >
            <div className=" relative  z-10 h-52 bg-[#F7F7F7] ">
              <div className="">
                <img
                  className="scale-90  group-hover:scale-100  transition-all duration-200  "
                  src={deal.product_image}
                  alt=""
                />
                <div
                  className={`absolute ${
                    sidebar && currentIdx === index
                      ? "right-2 transition-all duration-200"
                      : "-right-0 opacity-0   transition-all duration-200"
                  } flex flex-col top-10 gap-1 justify-center`}
                >
                  <div
                    title="Wishlist"
                    className="flex rounded-sm cursor-pointer justify-center items-center transition-colors duration-200 p-1 hover:bg-[#5CAF90] hover:text-white text-gray-400 bg-white"
                  >
                    <PiHeartBold size={20} />
                  </div>
                  <div
                    title="View"
                    className="flex rounded-sm cursor-pointer justify-center items-center transition-colors duration-200 p-1 hover:bg-[#5CAF90] hover:text-white text-gray-400 bg-white"
                  >
                    <LuEye size={20} />
                  </div>
                  <div
                    title="Compare"
                    className="flex rounded-sm cursor-pointer justify-center items-center transition-colors duration-200 p-1 hover:bg-[#5CAF90] hover:text-white text-gray-400 bg-white"
                  >
                    <MdOutlineCompareArrows size={20} />
                  </div>
                  <div
                    title="Cart"
                    className="flex rounded-sm cursor-pointer justify-center items-center transition-colors duration-200 p-1 hover:bg-[#5CAF90] hover:text-white text-gray-400 bg-white"
                  >
                    <RiShoppingCartLine size={20} />
                  </div>
                </div>
                {deal.stock && (
                  <p
                    className={`absolute ${
                      deal.stock === "sale"
                        ? "bg-red-400 text-white px-2.5 py-0.5  text-xs "
                        : ""
                    } ${
                      deal.stock === "new"
                        ? "bg-[#5CAF90] text-white px-2.5 py-0.5  text-xs"
                        : ""
                    } uppercase text-sm  top-2 left-2`}
                  >
                    {deal.stock}{" "}
                  </p>
                )}
              </div>
            </div>
            <div className="bg-white p-5">
              <h4 className="text-[13px] text-gray-400">{deal.category}</h4>
              <h4 className="pt-2 text-[15px] text-gray-500">
                {deal.product_name}
              </h4>
              {/* rating */}
              <div className="flex gap-4 pt-2">
                <p className="font-bold text-[14px] text-slate-600">
                  ${deal.discount_price}:00
                </p>
                <p className="line-through text-gray-500 text-[14px]">
                  ${deal.price}:00
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Deal;
