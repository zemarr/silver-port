import React, { useEffect, useState } from "react";
import { StyledSidebar } from "../../styled-components/styled-sidebar";
import Navigation from "./Navigation";

const Sidebar = () => {
  const [deviceWidth, setdeviceWidth] = useState();

  const viewportWidth = () => {
    return setdeviceWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", viewportWidth);

    return () => {
      window.removeEventListener("resize", viewportWidth);
    };
  }, []);
  return (
    <>
      <StyledSidebar innerWidth>
        <Navigation />
      </StyledSidebar>
    </>
  );
};

export default Sidebar;
