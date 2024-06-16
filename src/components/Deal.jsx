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

  const { data: deals = [] } = useQuery({
    queryKey: ["deals"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/deals");
      return data;
    },
  });

  console.log(deals);

  return (
    <div className="container px-20 mx-auto py-16">
      <Swiper
        watchSlidesProgress={true}
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        className="mySwiper"
      >
        {deals.map((deal) => (
          <SwiperSlide key={deal._id}>
            <div className=" relative z-10 h-52 bg-[#F7F7F7] ">
              <div
                onMouseLeave={() => setSidebar(false)}
                onMouseEnter={() => setSidebar(true)}
                className=""
              >
                <img
                  className="scale-90  hover:scale-100  transition-all duration-200  "
                  src={deal.product_image}
                  alt=""
                />
                <div
                  className={`absolute ${
                    sidebar
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
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Deal;
