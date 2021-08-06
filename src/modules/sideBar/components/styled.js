import styled from "styled-components";
import { ProSidebar, Menu } from "react-pro-sidebar";

export const ProSidebarCustom = styled(ProSidebar)`
  > .pro-sidebar-inner {
    background-color: #9932CC;
  }

  && {
    color: white;
    height: 100vh;
  }
`;

export const MenuCustom = styled(Menu)`
  margin-top: 20px;
`;
