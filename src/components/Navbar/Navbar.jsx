import { Link } from "react-router-dom";
import logo from "../../../public/logo.png";
import { BiSolidOffer } from "react-icons/bi";
import { RiUser3Line } from "react-icons/ri";
import { GoHeart } from "react-icons/go";
import { BsHandbag } from "react-icons/bs";

function Navbar() {
  return (
    <div className="container px-20 py-6 mx-auto border-b border-gray-100">
      <div className="flex gap-8">
        <img className="w-28 h-fit" src={logo} alt="" />
        <ul className="flex gap-8">
          <li>
            <div className="hs-dropdown relative inline-flex">
              <button
                id="hs-dropdown-default"
                type="button"
                className="hs-dropdown-toggle font-medium text-gray-600 text-[15px] transition-all hover:text-[#5CAF90] py-1  inline-flex items-center gap-x-2 text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
              >
                Home
                <svg
                  className="hs-dropdown-open:rotate-180  size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className="hs-dropdown-menu z-40 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden w-[230px] bg-white shadow-md  p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4  before:absolute before:-top-4 before:start-0 before:w-full"
                aria-labelledby="hs-dropdown-default"
              >
                <Link className="flex  transition-all hover:text-[#5CAF90] items-center gap-x-3.5 py-2 px-3  text-[13px] text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                  English
                </Link>
                <Link className="flex   hover:text-[#5CAF90]  items-center gap-x-3.5 py-2 px-3 text-[13px] text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                  Itialiano
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="hs-dropdown relative inline-flex">
              <button
                id="hs-dropdown-default"
                type="button"
                className="hs-dropdown-toggle font-medium text-gray-600 text-[15px] transition-all hover:text-[#5CAF90] py-1  inline-flex items-center gap-x-2 text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
              >
                Categories
                <svg
                  className="hs-dropdown-open:rotate-180  size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className="hs-dropdown-menu z-40 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden w-[230px] bg-white shadow-md  p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4  before:absolute before:-top-4 before:start-0 before:w-full"
                aria-labelledby="hs-dropdown-default"
              >
                <Link className="flex  transition-all hover:text-[#5CAF90] items-center gap-x-3.5 py-2 px-3  text-[13px] text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                  English
                </Link>
                <Link className="flex   hover:text-[#5CAF90]  items-center gap-x-3.5 py-2 px-3 text-[13px] text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                  Itialiano
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="hs-dropdown relative inline-flex">
              <button
                id="hs-dropdown-default"
                type="button"
                className="hs-dropdown-toggle font-medium text-gray-600 text-[15px] transition-all hover:text-[#5CAF90] py-1  inline-flex items-center gap-x-2 text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
              >
                Products
                <svg
                  className="hs-dropdown-open:rotate-180  size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className="hs-dropdown-menu z-40 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden w-[230px] bg-white shadow-md  p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4  before:absolute before:-top-4 before:start-0 before:w-full"
                aria-labelledby="hs-dropdown-default"
              >
                <Link className="flex  transition-all hover:text-[#5CAF90] items-center gap-x-3.5 py-2 px-3  text-[13px] text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                  English
                </Link>
                <Link className="flex   hover:text-[#5CAF90]  items-center gap-x-3.5 py-2 px-3 text-[13px] text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                  Itialiano
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="hs-dropdown relative inline-flex">
              <button
                id="hs-dropdown-default"
                type="button"
                className="hs-dropdown-toggle font-medium text-gray-600 text-[15px] transition-all hover:text-[#5CAF90] py-1  inline-flex items-center gap-x-2 text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
              >
                Blog
                <svg
                  className="hs-dropdown-open:rotate-180  size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className="hs-dropdown-menu z-40 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden w-[230px] bg-white shadow-md  p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4  before:absolute before:-top-4 before:start-0 before:w-full"
                aria-labelledby="hs-dropdown-default"
              >
                <Link className="flex  transition-all hover:text-[#5CAF90] items-center gap-x-3.5 py-2 px-3  text-[13px] text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                  English
                </Link>
                <Link className="flex   hover:text-[#5CAF90]  items-center gap-x-3.5 py-2 px-3 text-[13px] text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                  Itialiano
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="hs-dropdown relative inline-flex">
              <button
                id="hs-dropdown-default"
                type="button"
                className="hs-dropdown-toggle font-medium text-gray-600 text-[15px] transition-all hover:text-[#5CAF90] py-1  inline-flex items-center gap-x-2 text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
              >
                Others
                <svg
                  className="hs-dropdown-open:rotate-180  size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className="hs-dropdown-menu z-40 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden w-[230px] bg-white shadow-md  p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4  before:absolute before:-top-4 before:start-0 before:w-full"
                aria-labelledby="hs-dropdown-default"
              >
                <Link className="flex  transition-all hover:text-[#5CAF90] items-center gap-x-3.5 py-2 px-3  text-[13px] text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                  English
                </Link>
                <Link className="flex   hover:text-[#5CAF90]  items-center gap-x-3.5 py-2 px-3 text-[13px] text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                  Itialiano
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link className="hs-dropdown-toggle font-medium text-gray-600 text-[15px] transition-all hover:text-[#5CAF90] py-1  inline-flex items-center gap-x-2 text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white group:hover:text-blue-400 dark:hover:bg-neutral-800">
              {" "}
              <BiSolidOffer size={22} /> <span> Offers</span>
            </Link>
          </li>
        </ul>
        <div className="w-full flex justify-between">
          <div className="hs-dropdown relative inline-flex">
            <button
              id="hs-dropdown-default"
              type="button"
              className="hs-dropdown-toggle font-medium text-gray-500 text-[15px] transition-all hover:text-[#5CAF90] py-1  inline-flex items-center gap-x-2 text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              <span>
                <RiUser3Line className="" size={26} />
              </span>
              <div className="flex flex-col  text-left">
                <span className="text-xs  ">Account</span>
                <span className="font-medium text-[14px] uppercase text-gray-600">
                  Login
                </span>
              </div>
            </button>

            <div
              className="hs-dropdown-menu z-40 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden w-[230px] bg-white shadow-md  p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4  before:absolute before:-top-4 before:start-0 before:w-full"
              aria-labelledby="hs-dropdown-default"
            >
              <Link className="flex  transition-all hover:text-[#5CAF90] items-center gap-x-3.5 py-2 px-3  text-[13px] text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                English
              </Link>
              <Link className="flex   hover:text-[#5CAF90]  items-center gap-x-3.5 py-2 px-3 text-[13px] text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                Itialiano
              </Link>
            </div>
          </div>
          <div className="hs-dropdown relative inline-flex">
            <button
              id="hs-dropdown-default"
              type="button"
              className="hs-dropdown-toggle font-medium text-gray-500 text-[15px] transition-all hover:text-[#5CAF90] py-1  inline-flex items-center gap-x-2 text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              <span>
                <GoHeart className="" size={26} />
              </span>
              <div className="flex flex-col text-left">
                <span className="text-xs  ">Wishlist</span>
                <span className="font-medium flex text-gray-600  text-[14px] uppercase">
                  <p className="font-semibold">3</p>-Items
                </span>
              </div>
            </button>

            <div
              className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden w-[230px] bg-white shadow-md  p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4  before:absolute before:-top-4 before:start-0 before:w-full"
              aria-labelledby="hs-dropdown-default"
            >
              <Link className="flex  transition-all hover:text-[#5CAF90] items-center gap-x-3.5 py-2 px-3  text-[13px] text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                English
              </Link>
              <Link className="flex   hover:text-[#5CAF90]  items-center gap-x-3.5 py-2 px-3 text-[13px] text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                Itialiano
              </Link>
            </div>
          </div>
          <div className="hs-dropdown relative inline-flex">
            <button
              id="hs-dropdown-default"
              type="button"
              className="hs-dropdown-toggle font-medium text-gray-500 text-[15px] transition-all hover:text-[#5CAF90] py-1  inline-flex items-center gap-x-2 text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              <span>
                <BsHandbag className="" size={26} />
              </span>
              <div className="flex flex-col text-left">
                <span className="text-xs  ">Cart</span>
                <span className="font-medium flex text-gray-600  text-[14px] uppercase">
                  <p className="font-semibold">3</p>-Items
                </span>
              </div>
            </button>

            <div
              className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden w-[230px] bg-white shadow-md  p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4  before:absolute before:-top-4 before:start-0 before:w-full"
              aria-labelledby="hs-dropdown-default"
            >
              <Link className="flex  transition-all hover:text-[#5CAF90] items-center gap-x-3.5 py-2 px-3  text-[13px] text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                English
              </Link>
              <Link className="flex   hover:text-[#5CAF90]  items-center gap-x-3.5 py-2 px-3 text-[13px] text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                Itialiano
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
