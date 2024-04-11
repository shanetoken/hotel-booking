import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Dashboard from "/home/shanetoken/hotel-booking/src/pages/Dashboard";
// import Bookings from "Bookings";
// import Cabins from "Cabins";
// import Users from "Users";
// import Settings from "Users";

function SidebarMenu() {
  return (
    <>
      <nav>
        <NavLink to="/dashboard">Dashboard</NavLink>
        {/* <NavLink to="/bookings">Bookings</NavLink>
        <NavLink to="/cabins">Cabins</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/settings">Settings</NavLink> */}
      </nav>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/bookings" element={<Bookings />} />
        <Route path="/cabins" element={<Cabins />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} /> */}
      </Routes>
    </>
  );
}

export default SidebarMenu;
