import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Navigation } from "swiper/modules";

function LatestBlog() {
  return (
    <div className="container mx-auto px-20 pt-20 pb-20">
      <div className="flex-1  pb-10">
        <h3 className="font-semibold text-[#4B5966] text-2xl">
          Latest <span className="text-[#5CAF90]">Blogs</span>
        </h3>
        <p className="text-sm text-gray-500 pt-2">
          Shop online for new arrivals and get free shipping!
        </p>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="pb-4 relative cursor-pointer">
            <div className="w-full h-48 overflow-hidden ">
              <img
                className="w-full h-full object-cover hover:scale-110 hover:-rotate-2  transition-all duration-300 "
                src="https://i.postimg.cc/bYtXsm6c/10.jpg"
                alt=""
              />
            </div>
            <div className="pt-2">
              <h3 className="font-medium text-gray-600 text-lg pb-1">
                Marketting Guide: 5 Steps to Success way{" "}
              </h3>

              <a
                className="text-[13px] font-medium transition-colors hover:text-[#5CAF90] text-gray-500 "
                href=""
              >
                See more >>
              </a>
            </div>

            <div className="p-2 flex flex-col items-center bg-[#0000007e] absolute top-4 right-4">
              <span className="text-lg font-bold  text-white ">30</span>
              <span className="text-xs font-light text-white">April</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pb-4 relative cursor-pointer">
            <div className="w-full h-48 overflow-hidden ">
              <img
                className="w-full h-full object-cover hover:scale-110 hover:-rotate-2  transition-all duration-300 "
                src="https://i.postimg.cc/PJP5wYFV/9.jpg"
                alt=""
              />
            </div>
            <div className="pt-2">
              <h3 className="font-medium text-gray-600 text-lg pb-1">
                Marketting Guide: 5 Steps to Success way{" "}
              </h3>

              <a
                className="text-[13px] font-medium transition-colors hover:text-[#5CAF90] text-gray-500 "
                href=""
              >
                See more >>
              </a>
            </div>

            <div className="p-2 flex flex-col items-center bg-[#0000007e] absolute top-3.5 right-3.5">
              <span className="text-lg font-bold  text-white ">30</span>
              <span className="text-xs font-light text-white">April</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pb-4 relative cursor-pointer">
            <div className="w-full h-48 overflow-hidden ">
              <img
                className="w-full h-full object-cover hover:scale-110 hover:-rotate-2  transition-all duration-300 "
                src="https://i.postimg.cc/gcTJPtnC/14.jpg"
                alt=""
              />
            </div>
            <div className="pt-2">
              <h3 className="font-medium text-gray-600 text-lg pb-1">
                Marketting Guide: 5 Steps to Success way{" "}
              </h3>

              <a
                className="text-[13px] font-medium transition-colors hover:text-[#5CAF90] text-gray-500 "
                href=""
              >
                See more >>
              </a>
            </div>

            <div className="p-2 flex flex-col items-center bg-[#0000007e] absolute top-3.5 right-3.5">
              <span className="text-lg font-bold  text-white ">30</span>
              <span className="text-xs font-light text-white">April</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pb-4 relative cursor-pointer" >
            <div className="w-full h-48 overflow-hidden ">
              <img
                className="w-full h-full object-cover hover:scale-110 hover:-rotate-2  transition-all duration-300 "
                src="https://i.postimg.cc/wjKj1t5F/13.jpg"
                alt=""
              />
            </div>
            <div className="pt-2">
              <h3 className="font-medium text-gray-600 text-lg pb-1">
                Marketting Guide: 5 Steps to Success way{" "}
              </h3>

              <a
                className="text-[13px] font-medium transition-colors hover:text-[#5CAF90] text-gray-500 "
                href=""
              >
                See more >>
              </a>
            </div>

            <div className="p-2 flex flex-col items-center bg-[#0000007e] absolute top-3.5 right-3.5">
              <span className="text-lg font-bold  text-white ">30</span>
              <span className="text-xs font-light text-white">April</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pb-4 relative cursor-pointer">
            <div className="w-full h-48 overflow-hidden ">
              <img
                className="w-full h-full object-cover hover:scale-110 hover:-rotate-2  transition-all duration-300 "
                src="https://i.postimg.cc/SKkQGwvM/11.jpg"
                alt=""
              />
            </div>
            <div className="pt-2">
              <h3 className="font-medium text-gray-600 text-lg pb-1">
                Marketting Guide: 5 Steps to Success way{" "}
              </h3>

              <a
                className="text-[13px] font-medium transition-colors hover:text-[#5CAF90] text-gray-500 "
                href=""
              >
                See more >>
              </a>
            </div>

            <div className="p-2 flex flex-col items-center bg-[#0000007e] absolute top-3.5 right-3.5">
              <span className="text-lg font-bold  text-white ">30</span>
              <span className="text-xs font-light text-white">April</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pb-4 relative cursor-pointer">
            <div className="w-full h-48 overflow-hidden ">
              <img
                className="w-full h-full object-cover hover:scale-110 hover:-rotate-2  transition-all duration-300 "
                src="https://i.postimg.cc/zBPJ83XC/12.jpg"
                alt=""
              />
            </div>
            <div className="pt-2">
              <h3 className="font-medium text-gray-600 text-lg pb-1">
                Marketting Guide: 5 Steps to Success way{" "}
              </h3>

              <a
                className="text-[13px] font-medium transition-colors hover:text-[#5CAF90] text-gray-500 "
                href=""
              >
                See more >>
              </a>
            </div>

            <div className="p-2 flex flex-col items-center bg-[#0000007e] absolute top-3.5 right-3.5">
              <span className="text-lg font-bold  text-white ">30</span>
              <span className="text-xs font-light text-white">April</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default LatestBlog;
