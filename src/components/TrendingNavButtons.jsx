import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useSwiper } from 'swiper/react'

function TrendingNavButtons() {


    const swiper = useSwiper()

  return (
    <div className='flex gap-2 pt-2  justify-end'>
        <button onClick={()=> swiper.slidePrev()} ><IoIosArrowBack className='text-gray-500 hover:text-[#5CAF90] transition-colors' size={24}/></button>
        <button onClick={()=> swiper.slideNext()}><IoIosArrowForward className='text-gray-500 hover:text-[#5CAF90] transition-colors' size={24} /></button>
    </div>
  )
}

export default TrendingNavButtons