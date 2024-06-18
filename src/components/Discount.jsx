function Discount() {
  return (
    <div className="container mx-auto px-20 pt-16">
      <div className="bg-[url('https://i.postimg.cc/gJ74dMRc/11.jpg')] bg-cover bg-center w-full h-[600px]">
        <div className="w-full h-full  flex flex-col items-end justify-center pr-20">
          <h3 className="font-semibold text-white text-3xl">30% off sale</h3>
          <h2 className="text-right leading-[60px] pt-4 pb-5 font-semibold text-4xl text-white">
            Latest Exclusive
            <br></br>
            Summer Collection
          </h2>
          <button className="px-3 py-1.5 transition-colors text-sm font-medium  text-white bg-[#5CAF90] hover:bg-[#4B5966]">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Discount;
