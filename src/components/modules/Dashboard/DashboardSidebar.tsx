import { getUserInfo } from "@/services/auth/getUserInfo";
import { IUser } from "@/types/user.interface";
import DashboardSidebarContent from "./DashboardSidebarContent";
import { getDefaultDashboardRoute } from "@/lib/auth-utils";
import { NavSection } from "@/types/dashboard.interface";

const DashboardSidebar = async () => {
  const userInfo = (await getUserInfo()) as IUser;

  const navItems: NavSection[] = [];
  const dashboardHome = getDefaultDashboardRoute(userInfo.role);

  return (
    <DashboardSidebarContent
      userInfo={userInfo}
      navItems={navItems}
      dashboardHome={dashboardHome}
    />
  );
};

export default DashboardSidebar;
