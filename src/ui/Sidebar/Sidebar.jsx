import Logo from "./Logo";
import SidebarMenu from "./SidebarMenu";
import { Route, Routes } from "react-router-dom";
import Dashboard from "/pages/Dashboard";
import Bookings from "/pages/Bookings"
import Cabins from "/pages/Cabins"
import Users from "/pages/Users"
import Settings from "/pages/Users"

const borderBox = "border-[1px] border-gray-100";

function Sidebar() {
  return (
    <div
      className={`${borderBox} w-60 text-center flex flex-col font-semibold items-center pt-6`}
    >
      <Logo />
      <SidebarMenu />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/cabins" element={<Cabins />} />
        <Route path="/users" element={<Users />} />
        <Route path="/setting" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default Sidebar;
