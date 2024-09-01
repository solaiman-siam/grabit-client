import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import logo from "../../public/logo.png";
import android from "../../public/android.png";
import apple from "../../public/apple.png";

function Footer() {
  return (
    <div className="pt-20 border border-t ">
      <div className="flex gap-10 container mx-auto px-20 pb-20">
        {/* row 1 */}
        <div>
          <div className=" w-32 pb-8">
            <img className="w-full h-full " src={logo} alt="" />
          </div>
          <p className="text-gray-500 text-sm w-11/12  pb-6 leading-6">
            Grabit is the biggest market of grocery products. Get your daily
            needs from our store.
          </p>
          <div className="flex  items-center gap-5">
            <div className="w-32 cursor-pointer">
              <img className="" src={android} alt="" />
            </div>
            <div className="w-32 cursor-pointer">
              <img className="" src={apple} alt="" />
            </div>
          </div>
        </div>
        {/* row 2 */}
        <div className="flex flex-col ">
          <h3 className="font-medium text-gray-600 pb-4  border-b ">
            Category
          </h3>
          <div className="pt-5 flex flex-col gap-4">
            <a
              className="text-gray-500 text-sm text-nowrap hover:text-[#5CAF90] transition-colors "
              href="#"
            >
              {" "}
              Dairy & Milk
            </a>
            <a
              className="text-gray-500 text-sm text-nowrap hover:text-[#5CAF90] transition-colors "
              href="#"
            >
              Snack & Spice
            </a>

            <a
              className="text-gray-500 text-sm text-nowrap hover:text-[#5CAF90] transition-colors "
              href="#"
            >
              Fast Food
            </a>

            <a
              className="text-gray-500 text-sm text-nowrap hover:text-[#5CAF90] transition-colors "
              href="#"
            >
              Juice & Drinks
            </a>

            <a
              className="text-gray-500 text-sm text-nowrap hover:text-[#5CAF90] transition-colors "
              href="#"
            >
              Bakery
            </a>

            <a
              className="text-gray-500 text-sm text-nowrap hover:text-[#5CAF90] transition-colors "
              href="#"
            >
              Seafood
            </a>
          </div>
        </div>
        {/* row 3 */}
        <div className="flex flex-col ">
          <h3 className=" font-medium text-gray-600 pb-4  border-b ">
            Company
          </h3>

          <div className="pt-5 flex flex-col gap-4">
            <a
              className="text-gray-500 text-sm text-nowrap hover:text-[#5CAF90] transition-colors "
              href="#"
            >
              {" "}
              About us
            </a>
            <a
              className="text-gray-500 text-sm text-nowrap hover:text-[#5CAF90] transition-colors "
              href="#"
            >
              Delivery
            </a>

            <a
              className="text-gray-500 text-sm text-nowrap hover:text-[#5CAF90] transition-colors "
              href="#"
            >
              Legal Notice
            </a>

            <a
              className="text-gray-500 text-sm text-nowrap hover:text-[#5CAF90] transition-colors "
              href="#"
            >
              Terms & conditions
            </a>

            <a
              className="text-gray-500 text-sm text-nowrap hover:text-[#5CAF90] transition-colors "
              href="#"
            >
              Secure payment
            </a>

            <a
              className="text-gray-500 text-sm text-nowrap hover:text-[#5CAF90] transition-colors "
              href="#"
            >
              Contact us
            </a>
          </div>
        </div>
        {/* row 4 */}
        <div className="flex flex-col ">
          <h3 className=" font-medium text-gray-600 pb-4  border-b ">
            Account
          </h3>
          <div className="pt-5 flex flex-col gap-3">
            <a
              className="text-gray-500 text-sm text-nowrap hover:text-[#5CAF90] transition-colors "
              href="#"
            >
              {" "}
              Sign In
            </a>
            <a
              className="text-gray-500 text-sm text-nowrap hover:text-[#5CAF90] transition-colors "
              href="#"
            >
              View Cart
            </a>
            <a
              className="text-gray-500 text-sm text-nowrap hover:text-[#5CAF90] transition-colors "
              href="#"
            >Return Policy</a>
            <a
              className="text-gray-500 text-sm text-nowrap hover:text-[#5CAF90] transition-colors "
              href="#"
            >
              Become a Vendor
            </a>
            <a
              className="text-gray-500 text-sm text-nowrap hover:text-[#5CAF90] transition-colors "
              href="#"
            >
              Affiliat Programm
            </a>
            <a
              className="text-gray-500 text-sm text-nowrap hover:text-[#5CAF90] transition-colors "
              href="#"
            >
              Payment
            </a>
          </div>
        </div>
        {/* row 4 */}
        <div className="flex flex-col ">
          <h3 className=" font-medium text-gray-600 pb-3 border-b ">Contact</h3>
          <div className="pt-5 flex flex-col items-start justify-start gap-4">
            <div className="flex gap-2 items-start justify-start">
              <IoLocationOutline color="#5CAF90" size={38} />
              <p className="text-gray-500 text-sm ">2548 Broaddus Maple Court, Madisonville KY 4783, USA.</p>
            </div>
            <div className="flex gap-2">
              <FaWhatsapp color="#5CAF90" size={20} />
              <p className="text-gray-500 text-sm ">+00 9876543210</p>
            </div>
            <div className="flex gap-2">
              <IoMailOutline color="#5CAF90" size={20} />
              <p className="text-gray-500 text-sm ">+00 9876543210</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
