import { CiDeliveryTruck, CiHeart, CiMoneyCheck1 } from "react-icons/ci";
import { PiHandArrowDownThin } from "react-icons/pi";


function CustomerCare() {
  return (
    <div className="container mx-auto px-20 pb-16">
      <div className="grid grid-cols-4 gap-6">
        <div className="p-4 border text-center flex flex-col justify-center items-center">
          <CiDeliveryTruck size={50} color="#5CAF90" />
          <h3 className="text-lg font-medium pt-3 text-gray-600 pb-2">Free Shipping</h3>
          <p className="text-gray-500 pb-2 text-sm">Free shipping on all US order or order above $200</p>
        </div>
        <div className="p-4 border text-center flex flex-col justify-center items-center">
        <PiHandArrowDownThin size={50} color="#5CAF90" />
          <h3 className="text-lg font-medium pt-3 text-gray-600 pb-2">24X7 Support</h3>
          <p className="text-gray-500 pb-2 text-sm">Contact us 24 hours a day, 7 days a week</p>
        </div>
        <div className="p-4 border text-center flex flex-col justify-center items-center">
        <CiHeart size={50} color="#5CAF90" />
          <h3 className="text-lg font-medium pt-3 text-gray-600 pb-2">30 Days Return</h3>
          <p className="text-gray-500 pb-2 text-sm">Simply return it within 30 days for an exchange</p>
        </div>
        <div className="p-4 border text-center flex flex-col justify-center items-center">
        <CiMoneyCheck1 size={50} color="#5CAF90" />
          <h3 className="text-lg font-medium pt-3 text-gray-600 pb-2">Payment Secure</h3>
          <p className="text-gray-500 pb-2 text-sm">Contact us 24 hours a day, 7 days a week</p>
        </div>
        
      </div>
    </div>
  );
}

export default CustomerCare;
