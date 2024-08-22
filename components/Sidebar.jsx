import MemberProfile from "./MemberProfile";
import NavLinks from "./NavLinks";
import SidebarHeader from "./SidebarHeader";

function Sidebar() {
  return (
    <div className="px-4 bg-base-300 min-h-screen w-80 py-12 grid grid-rows-[auto,1fr,auto]">
      <SidebarHeader />
      <NavLinks />
      <MemberProfile />
    </div>
  );
}

export default Sidebar;
