import { Outlet } from "react-router";
import Navbar from "./navbar";

function NavbarLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default NavbarLayout;
