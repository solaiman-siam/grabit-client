function Collection() {
  return (
    <div className="container pt-20 pb-20 mx-auto px-20">
      <div className="grid grid-cols-3 gap-6">
        <div className="w-full relative h-52 bg-center bg-cover p-10 flex-col flex items-end justify-center  bg-[url('https://i.postimg.cc/L5PyCjRw/12.jpg')]">
          <h3 className="text-3xl text-right  font-semibold text-white pb-2">
            Women's Collection
          </h3>
          <button className="px-3 py-1.5 transition-colors text-sm font-medium  text-white bg-[#5CAF90] hover:bg-[#4B5966]">
            Shop now
          </button>
          <div className="px-1 text-gray-500 font-light py-0.5 text-xs  bg-white absolute top-0 left-0">
          50% off
          </div>
        </div>

        <div className="relative w-full h-52 bg-center p-10 flex-col flex items-end justify-center  bg-cover bg-[url('https://i.postimg.cc/q7YXPgmT/13.jpg')]">
          <h3 className="text-3xl w-1/2 text-right  font-semibold text-white pb-2">Kid's Collection</h3>
          <button className="px-3 py-1.5 transition-colors text-sm font-medium  text-white bg-[#5CAF90] hover:bg-[#4B5966]">
            Shop now
          </button>
          <div className="px-1 py-0.5 text-gray-500 font-light text-xs  bg-white absolute top-0 left-0">
          20% off
          </div>
        </div>
        <div className="relative w-full h-52  p-10 flex-col flex items-end justify-center  bg-cover bg-center bg-[url('https://i.postimg.cc/65YRsy3m/14.jpg')]">
          <h3 className="text-3xl w-1/2 text-right  font-semibold text-white pb-2">Men's Collection</h3>
          <button className="px-3 py-1.5 transition-colors text-sm font-medium  text-white bg-[#5CAF90] hover:bg-[#4B5966]">
            Shop now
          </button>
          <div className="px-1 py-0.5 text-gray-500 font-light text-xs  bg-white absolute top-0 left-0">
          30% off
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
