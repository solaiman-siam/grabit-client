import { Outlet } from "react-router-dom";
import NavbarMain from "../components/Navbar/NavbarMain";
import Controller from "../components/Controller";

import("preline");
function Main() {
  return (
    <div className="font-poppins  relative">
      <NavbarMain></NavbarMain>
      <Outlet></Outlet>
      <Controller></Controller>
    </div>
  );
}

export default Main;
