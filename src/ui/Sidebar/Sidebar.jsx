import Logo from "./Logo";
import SidebarMenu from "./SidebarMenu";

const borderBox = "border-[1px] border-gray-100";

function Sidebar() {
  return (
    <div
      className={`${borderBox} w-60 text-center flex flex-col font-semibold items-center pt-6`}
    >
      <Logo />
      <SidebarMenu />
    </div>
  );
}

export default Sidebar;
