import React from 'react';

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <div>
    //   <DashboardPage />
    // </div>
    <div>{children}</div>
  );
};

export default AdminDashboardLayout;