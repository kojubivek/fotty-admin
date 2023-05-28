import React from "react";
import { Navbar } from "react-bootstrap";
import { CustomSidebar } from "../../components/sidebar/CustomSidebar";
import { Footer } from "../../components/footer/Footer";
import { CustomNavbar } from "../../components/navbar/CustomNavbar";

export const PageLayout = ({ children }) => {
  return (
    <div>
      <CustomNavbar />
      <body className="d-flex">
        <div>
          <CustomSidebar />
        </div>

        <div>{children}</div>
      </body>

      <Footer />
    </div>
  );
};
