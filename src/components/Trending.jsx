import { Swiper, SwiperSlide, } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../src/customStyle/trending.css";
import demoImg from "../assets/49_1.jpg";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import TrendingNavButtons from "./TrendingNavButtons";
import { IoCart } from "react-icons/io5";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../hooks/useAxiosCommon";
function Trending() {
  const [mouseEnter, setMouseEnter] = useState(true);
  const [currentIdx, setCurrentIdx] = useState()
  const [category, setCategory] = useState('')
  const axiosCommon = useAxiosCommon()


  // cart show function
  const cartShow = (value1, value2) => {
    setMouseEnter(value1)
    setCurrentIdx(value2)
  }
  const cartHide = (value1, value2, value3) => {
    setMouseEnter(value1)
    setCurrentIdx(value2)
    setCategory(value3)
  }


// get trending items
  const {data: trending = []} = useQuery({
    queryKey: ['trending'],
    queryFn: async () => {
      const {data} = await axiosCommon.get(`/items/trending?category=${"Trending"}` )
      console.log(data)
      return data
    }
  })

  // get popular items
  const {data: popular = []} = useQuery({
    queryKey: ['popular'],
    queryFn: async () => {
      const {data} = await axiosCommon.get(`/items/popular?category=${"Popular"}` )
      console.log(data)
      return data
    }
  })
  // get top selling items
  const {data: topRated = []} = useQuery({
    queryKey: ['topRated'],
    queryFn: async () => {
      const {data} = await axiosCommon.get(`/items/topRated?category=${"Toprated"}` )
      console.log(data)
      return data
    }
  })



  return (
    <div className="container mx-auto px-20 ">

        {/* Trending */}
      <div className="flex justify-between relative">
        <h3 className="font-semibold text-[#4B5966] text-2xl pb-6">
          Trending <span className="text-[#5CAF90]">Items</span>
        </h3>
      </div>
      <div className="w-full  ">
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
          <TrendingNavButtons></TrendingNavButtons>
         {
          trending.map( (trending, index) => 
            <SwiperSlide key={index}>
            <div
                onMouseLeave={() => cartHide(false, index, trending.category)}
                onMouseEnter={() => cartShow(true, index, trending.category)}
                className="border  border-gray-200 p-4  flex items-center gap-6"
              >
                <div className=" w-1/3 bg-gray-200">
                  <img className="w-fit h-fit object-cover" src={trending.product_image} alt="" />
                </div>
                <div className="space-y-1  w-[70%]">
                  <h4 className="text-gray-600 font-medium ">
                    {trending.product_name.slice(0, 10)}
                  </h4>
                  <h4 className="text-xs font-medium text-gray-400">{trending.product_category}</h4>
                  <div className="flex justify-between items-center">
                   <div className="flex items-center gap-2"> <h4 className="font-semibold text-gray-700 text-sm">
                      {" "}
                     {trending.price}
                    </h4>
                    <span className="text-xs font-light line-through text-gray-500">
                     {trending.discount_price}
                    </span></div>
                    <div
                      className={`${
                        mouseEnter && currentIdx === index && category === trending.category
                          ? "opacity-100 transition-all cursor-pointer duration-300 border border-gray-200 p-2"
                          : "opacity-0 border border-gray-200 cursor-pointer p-2 transition-all duration-300"
                      }`}
                    >
                      <IoCart color="gray" size={22} />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
         }
        
        </Swiper>
      </div>

        {/* Popular */}
      <div className="flex justify-between relative">
        <h3 className="font-semibold text-[#4B5966] text-2xl pb-6">
          Popular <span className="text-[#5CAF90]">Items</span>
        </h3>
      </div>
      <div className="w-full  ">
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
          <TrendingNavButtons></TrendingNavButtons>
          {
          popular.map( (popular, index) => 
            <SwiperSlide key={index}>
            <div
                onMouseLeave={() => cartHide(false, index, popular.category)}
                onMouseEnter={() => cartShow(true, index, popular.category)}
                className="border  border-gray-200 p-4  flex items-center gap-6"
              >
                <div className=" w-1/3 bg-gray-200">
                  <img className="w-fit h-fit object-cover" src={popular.product_image} alt="" />
                </div>
                <div className="space-y-1  w-[70%]">
                  <h4 className="text-gray-600 font-medium ">
                    {popular.product_name.slice(0, 10)}
                  </h4>
                  <h4 className="text-xs font-medium text-gray-400">{popular.product_category}</h4>
                  <div className="flex justify-between items-center">
                   <div className="flex items-center gap-2"> <h4 className="font-semibold text-gray-700 text-sm">
                      {" "}
                     {popular.price}
                    </h4>
                    <span className="text-xs font-light line-through text-gray-500">
                     {popular.discount_price}
                    </span></div>
                    <div
                      className={`${
                        mouseEnter && currentIdx === index && category === popular.category
                          ? "opacity-100 transition-all cursor-pointer duration-300 border border-gray-200 p-2"
                          : "opacity-0 border border-gray-200 cursor-pointer p-2 transition-all duration-300"
                      }`}
                    >
                      <IoCart color="gray" size={22} />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
         }
        </Swiper>
      </div>

        {/* Top Selling */}
      <div className="flex justify-between relative">
        <h3 className="font-semibold text-[#4B5966] text-2xl pb-6">
          Top <span className="text-[#5CAF90]">Selling</span>
        </h3>
      </div>
      <div className="w-full    ">
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
          <TrendingNavButtons></TrendingNavButtons>
          {
          topRated.map( (topSelling, index) => 
            <SwiperSlide key={index}>
            <div
                onMouseLeave={() => cartHide(false, index, topSelling.category)}
                onMouseEnter={() => cartShow(true, index , topSelling.category)}
                className="border  border-gray-200 p-4  flex items-center gap-6"
              >
                <div className=" w-1/3 bg-gray-200">
                  <img className="w-fit h-fit object-cover" src={topSelling.product_image} alt="" />
                </div>
                <div className="space-y-1  w-[70%]">
                  <h4 className="text-gray-600 font-medium ">
                    {topSelling.product_name.slice(0, 10)}
                  </h4>
                  <h4 className="text-xs font-medium text-gray-400">{topSelling.product_category}</h4>
                  <div className="flex justify-between items-center">
                   <div className="flex items-center gap-2"> <h4 className="font-semibold text-gray-700 text-sm">
                      {" "}
                     {topSelling.price}
                    </h4>
                    <span className="text-xs font-light line-through text-gray-500">
                     {topSelling.discount_price}
                    </span></div>
                    <div
                      className={`${
                        mouseEnter && currentIdx === index && category === topSelling.category
                          ? "opacity-100 transition-all cursor-pointer duration-300 border border-gray-200 p-2"
                          : "opacity-0 border border-gray-200 cursor-pointer p-2 transition-all duration-300"
                      }`}
                    >
                      <IoCart color="gray" size={22} />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
         }
        </Swiper>
      </div>
    </div>
  );
}

export default Trending;
