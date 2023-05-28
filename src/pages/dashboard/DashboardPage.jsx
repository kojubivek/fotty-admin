import React from "react";
import { CustomNavbar } from "../../components/navbar/CustomNavbar";
import { CustomSidebar } from "../../components/sidebar/CustomSidebar";
import { Footer } from "../../components/footer/Footer";

export const DashboardPage = () => {
  return (
    <div>
      <CustomNavbar />
      <CustomSidebar />

      <Footer />
    </div>
  );
};
