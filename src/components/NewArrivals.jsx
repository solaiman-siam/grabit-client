import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import useAxiosCommon from "../hooks/useAxiosCommon"
import { useState } from "react"

function NewArrivals() {

    const axiosCommon = useAxiosCommon()
    const [tabs, setTabs] = useState('')



    const {data: arrivals = [], refetch} = useQuery({
        queryKey: ['arrivals', tabs],
        queryFn: async () => {
            const {data} = await axiosCommon.get(`/arrivals?tabs=${tabs}`)
            return data

        }
    })

    console.log(arrivals);


    const handleAll = () => {
        setTabs('')
        refetch()
    }
    const handleClothes = (value) => {
        setTabs(value)
        refetch()
    }
    const handleFootwear = (value) => {
        setTabs(value)
        refetch()
    }
    const handleAccessories = (value) => {
        setTabs(value)
        refetch()
    }


    console.log(tabs);




    


  return (
    <div className="container mx-auto px-20 pt-16">
        <div className="flex">
            <div className="flex-1">
                <h3 className="font-semibold text-[#4B5966] text-2xl">New <span className="text-[#5CAF90]">Arrivals</span></h3>
                <p className="text-sm text-gray-500 pt-2">Shop online for new arrivals and get free shipping!</p>
            </div>
            <div className="flex-1 flex justify-end text-[15px] gap-10 text-gray-500 font-medium">
                <Link><button onClick={() => handleAll('')}>ALL</button></Link>
                <Link><button onClick={() => handleClothes('Clothes')}>CLOTHES</button></Link>
                <Link><button onClick={() => handleFootwear('Footwear')}>FOOTWARE</button></Link>
                <Link><button onClick={() => handleAccessories('Accessories')}>ACCESSORIES</button></Link>
                

            </div>

        </div>
    </div>
  )
}

export default NewArrivals