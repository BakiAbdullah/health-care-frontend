// import { AppSidebar } from "@/components/app-sidebar";
// import { ChartAreaInteractive } from "@/components/chart-area-interactive";
// import { DataTable } from "@/components/data-table";
// import { SectionCards } from "@/components/section-cards";
// import { SiteHeader } from "@/components/site-header";
// import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

// const data = [
//   {
//     id: 1,
//     header: "Cover page",
//     type: "Cover page",
//     status: "In Process",
//     target: "18",
//     limit: "5",
//     reviewer: "Eddie Lake",
//   },
//   {
//     id: 2,
//     header: "Table of contents",
//     type: "Table of contents",
//     status: "Done",
//     target: "29",
//     limit: "24",
//     reviewer: "Eddie Lake",
//   },
//   {
//     id: 3,
//     header: "Executive summary",
//     type: "Narrative",
//     status: "Done",
//     target: "10",
//     limit: "13",
//     reviewer: "Eddie Lake",
//   },
// ];

// export default async function DashboardComponent() {
//   return (
//     <SidebarProvider
//       style={
//         {
//           "--sidebar-width": "calc(var(--spacing) * 72)",
//           "--header-height": "calc(var(--spacing) * 12)",
//         } as React.CSSProperties
//       }
//     >
//       <AppSidebar variant="inset" />
//       <SidebarInset>
//         <SiteHeader />
//         <div className="flex flex-1 flex-col">
//           <div className="@container/main flex flex-1 flex-col gap-2">
//             <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
//               <SectionCards />
//               <div className="px-4 lg:px-6">
//                 <ChartAreaInteractive />
//               </div>
//               <DataTable data={data} />
//             </div>
//           </div>
//         </div>
//       </SidebarInset>
//     </SidebarProvider>
//   );
// }
