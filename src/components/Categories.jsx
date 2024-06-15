import { useQuery } from "@tanstack/react-query";
import { axiosCommon } from "../hooks/useAxiosCommon";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function Categories() {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["all-categories"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/all-categories");
      return data;
    },
  });

  console.log(categories);

  return (
    <div className="container px-20 mx-auto py-16">
      <Swiper
        watchSlidesProgress={true}
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        className="mySwiper"
      >
        {categories.map((category) => (
          <SwiperSlide key={category._id}>
            <div className=" h-40 relative w-full bg-[#F7F7F7] flex justify-center flex-col items-center">
              <img className="w-14" src={category.category_image} alt="" />
              <h4 className="text-center font-semibold  text-gray-600 pt-3 pb-1">
                {category.category_name}
              </h4>
              <p className="text-gray-500 text-sm">24 Items</p>
              {category.Offer && (
                <p className="px-1.5 text-xs font-medium py-0.5 bg-[#5CAF90] text-white absolute right-0 top-0">
                  {category.Offer}%
                </p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Categories;
