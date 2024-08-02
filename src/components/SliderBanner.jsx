import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../src/customStyle/hero-slider.css"

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { RiArrowRightDoubleLine } from "react-icons/ri";

function SliderBanner() {
  return (
    <div className="my-2 ">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 2500,

          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[url('https://i.postimg.cc/fR2vmKkR/5.jpg')] bg-cover bg-center w-full h-[550px] ">
            <div className="flex flex-col w-full h-full container px-20 mx-auto justify-center">
              <h3 className="text-[#5CAF90] font-medium text-xl pb-5">
                Starting at $ <span className="font-bold">29.99</span>
              </h3>
              <h2 className="text-white text-[40px] leading-[50px] font-semibold">
                Explore glases <br></br> sale for Women's
              </h2>
              <button className="w-fit text-white flex items-center gap-2  px-4 py-2 mt-6 bg-gray-500 hover:bg-[#5CAF90]">
                <span>Shop Now</span> <RiArrowRightDoubleLine size={18} />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.postimg.cc/5NS8J3V2/6.jpg')] bg-cover bg-center w-full h-[550px]">
            <div className="flex flex-col w-full h-full container px-20 mx-auto justify-center">
              <h3 className="text-[#5CAF90] font-medium text-xl pb-5">
                Starting at $ <span className="font-bold">29.99</span>
              </h3>
              <h2 className="text-white text-[40px] leading-[50px] font-semibold">
                Explore sale for <br></br> Women's
              </h2>
              <button className="w-fit text-white flex items-center gap-2  px-4 py-2 mt-6 bg-gray-500 hover:bg-[#5CAF90]">
                <span>Shop Now</span> <RiArrowRightDoubleLine size={18} />
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SliderBanner;
