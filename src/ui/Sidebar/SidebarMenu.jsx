import { Link } from "react-router-dom";

function SidebarMenu() {
  return (
    <nav>
      {/* Replace with your link names and paths */}
      <Link to="/dashboard">🏠 Home</Link>
      <Link to="/bookings">📆 Booking</Link>
      <Link to="/cabins">🏕️ Cabins</Link>
      <Link to="/users">👥 Users</Link>
      <Link to="/users">⚙️ Settings</Link>
    </nav>
  );
}

export default SidebarMenu;
