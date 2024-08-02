import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useSwiper } from 'swiper/react'

function TrendingNavButtons() {


    const swiper = useSwiper()

  return (
    <div className='d-flex gap-6  justify-center'>
        <button onClick={()=> swiper.slidePrev()} ><IoIosArrowBack size={24}/></button>
        <button onClick={()=> swiper.slideNext()}><IoIosArrowForward size={24} /></button>
    </div>
  )
}

export default TrendingNavButtons