import React from "react";
import { StyledSidebar } from "../../styled-components/styled-sidebar";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <>
      <StyledSidebar>
        <Navigation />
      </StyledSidebar>
    </>
  );
};

export default Sidebar;
