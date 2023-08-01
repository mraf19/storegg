import Profile from "./Profile";
import SidebarFooter from "./SidebarFooter";
import data from "../../../data/SidebarMember.json";
import SidebarMenu from "./SidebarMenu";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();

  return (
    <>
      <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
          <Profile />
          <div className="menus">
            {data.map((item, index) => (
              <SidebarMenu
                key={`sidebar-menu-${index}`}
                imgUrl={item.imgUrl}
                title={item.title}
                path={item.path}
                isActive={router.pathname === item.path}
              />
            ))}
          </div>
          <SidebarFooter />
        </div>
      </section>
    </>
  );
}
