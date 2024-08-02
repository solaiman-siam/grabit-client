import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../src/customStyle/trending.css";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import TrendingNavButtons from "./TrendingNavButtons";
// import TrendingNavButtons from "./TrendingNavButtons";
function Trending() {
  return (
    <div className="container mx-auto px-20 ">
      <div className="flex justify-between relative">
        <h3 className="font-semibold text-[#4B5966] text-2xl pb-6">
          Trending <span className="text-[#5CAF90]">Items</span>
        </h3>

     
     
      </div>

      <div className="w-full h-60 d-flex  ">

        <Swiper
          slidesPerView={3}
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
            <div className="bg-red-400  h-40 ">
              <img src="" alt="" />
              <div className="flex flex-col w-full h-full justify -center">
                <h3>Shoes and comfortable loose</h3>
                <p>Shoes</p>
                <div className="flex gap-2">
                  <span className="font-semibold text-gray-700">$20:00</span>
                  <span className="line-through text-gray-400">$34:00</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red-200  h-40 "></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-green-400  h-40 "></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red-200  h-40 "></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red-200  h-40 "></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red-200  h-40 "></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red-200  h-40 "></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red-200  h-40 "></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red-200  h-40 "></div>
          </SwiperSlide>
          
          
        <TrendingNavButtons></TrendingNavButtons>
        </Swiper>
      </div>
    </div>
  );
}

export default Trending;
