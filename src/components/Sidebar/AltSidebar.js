import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper,
    SidebarMenu,
    SidebarReLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';

const AltSidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarReLink to="/about" onClick={toggle}>About</SidebarReLink>
                <SidebarReLink to="/schedule" onClick={toggle}>Schedule & Tickets</SidebarReLink>
                <SidebarReLink to="/classes" onClick={toggle}>Classes</SidebarReLink>
                <SidebarReLink to="/results" onClick={toggle}>Results</SidebarReLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/login">Log In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default AltSidebar