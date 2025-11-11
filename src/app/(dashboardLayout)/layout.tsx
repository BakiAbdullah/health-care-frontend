// "use client";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import DashboardNavbar from "@/components/modules/Dashboard/DashboardNavbar";
import DashboardSidebar from "@/components/modules/Dashboard/DashboardSidebar";


// const queryClient = new QueryClient();

// const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <>
//       <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//     </>
//   );
// };

// export default DashboardLayout;

const CommonDashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex h-screen overflow-hidden">
      
      <DashboardSidebar />
      <div className="flex bg-blue-200 flex-1 flex-col overflow-hidden">
        <DashboardNavbar />
        <main className="flex-1 overflow-y-auto bg-muted/10 p-4 md:p-6">
          <div className="max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default CommonDashboardLayout;
