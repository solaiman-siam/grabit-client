import { RiSettings4Line } from "react-icons/ri";

function Controller() {
  return (
    <div className=" z-50 fixed right-0 top-52">
      <button className="px-1.5 bg-[#4B5966] py-1.5">
        <RiSettings4Line
          size={34}
          className="  animate-spin-slow  duration-300"
          color="white"
        />
      </button>
    </div>
  );
}

export default Controller;
