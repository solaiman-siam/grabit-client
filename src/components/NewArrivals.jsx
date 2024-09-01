import { useQuery } from "@tanstack/react-query"
import useAxiosCommon from "../hooks/useAxiosCommon"
import { useState } from "react"
import { RiShoppingCartLine } from "react-icons/ri"
import { MdOutlineCompareArrows } from "react-icons/md"
import { LuEye } from "react-icons/lu"
import { PiHeartBold } from "react-icons/pi"

function NewArrivals() {

    const axiosCommon = useAxiosCommon()
    const [arrivals, setArrivals] = useState([])
    const [tabs, setTabs] = useState('')
    const [sidebar, setSidebar] = useState(false);
    const [currentIdx, setCurrentIdx] = useState();


   

   const {data: allArrivals = []} = useQuery({
    queryKey: ['allData', setArrivals],
    queryFn: async () => {
      const {data} = await axiosCommon.get('/arrivals')
      setArrivals(data)
      return data
    }
   })



    const {data: tabSearchData = []} = useQuery({
      queryKey: ['tabSearch', tabs],
      queryFn: async () => {
        const {data} = await axiosCommon.get(`/tabSearch?tabs=${tabs}`)
        setArrivals(data)
        return data
      }
    })


// hover state storing
    const handleHoverEnter = (value1, value2) => {
        setSidebar(value1);
        setCurrentIdx(value2);
      };
    
      const handleHoverOut = (value1, value2) => {
        setSidebar(value1);
        setCurrentIdx(value2);
      };

// tab search handle
    const handleAll = () => {
        setArrivals(allArrivals)
    }
    const handleClothes = (value) => {
        setTabs(value)
    }
    const handleFootwear = (value) => {
        setTabs(value)
    }
    const handleAccessories = (value) => {
        setTabs(value)
    }



  return (
    <div className="container mx-auto px-20 pt-16">
        <div className="flex pb-10">
            <div className="flex-1">
                <h3 className="font-semibold text-[#4B5966] text-2xl">New <span className="text-[#5CAF90]">Arrivals</span></h3>
                <p className="text-sm text-gray-500 pt-2">Shop online for new arrivals and get free shipping!</p>
            </div>
            <div className="flex-1 flex justify-end text-[15px] gap-10 text-gray-500 font-medium">
                <button onClick={() => handleAll('')}>ALL</button>
                <button onClick={() => handleClothes('Clothes')}>CLOTHES</button>
                <button onClick={() => handleFootwear('Footwear')}>FOOTWARE</button>
                <button onClick={() => handleAccessories('Accessories')}>ACCESSORIES</button>
            </div>
        </div>

        <div className="grid grid-cols-5 gap-4" >
            {
                arrivals.slice(0, 10).map((product, index) => <div
                    onMouseLeave={() => handleHoverEnter(false, index)}
                    onMouseEnter={() => handleHoverOut(true, index)}
                    className="group border cursor-pointer"
                    key={product._id}
                  >
                    <div className=" relative  z-10 h-52 bg-[#F7F7F7] ">
                      <div className="">
                        <img
                          className="scale-90  group-hover:scale-100  transition-all duration-200  "
                          src={product.product_image}
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
                        {product.stock && (
                          <p
                            className={`absolute ${
                              product.stock === "sale"
                                ? "bg-red-400 text-white px-2.5 py-0.5  text-xs "
                                : ""
                            } ${
                              product.stock === "new"
                                ? "bg-[#5CAF90] text-white px-2.5 py-0.5  text-xs"
                                : ""
                            } uppercase text-sm  top-2 left-2`}
                          >
                            {product.stock}{" "}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="bg-white p-5">
                      <h4 className="text-[13px] text-gray-400">{product.category}</h4>
                      <h4 className="pt-2 text-[15px] text-gray-500">
                        {product.product_name}
                      </h4>
                      {/* rating */}
                      <div className="flex gap-4 pt-2">
                        <p className="font-bold text-[14px] text-slate-600">
                          ${product.discount_price}:00
                        </p>
                        <p className="line-through text-gray-500 text-[14px]">
                          ${product.price}:00
                        </p>
                      </div>
                    </div>
                  </div>
                )
            }
        </div>
    </div>
  )
}

export default NewArrivals