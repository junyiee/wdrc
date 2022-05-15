import React from 'react';
import { FaBars } from 'react-icons/fa';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavReLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const AltNav = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">WDRC</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavReLinks 
                                to='/about'
                            >About</NavReLinks>
                        </NavItem>
                        <NavItem>
                            <NavReLinks 
                                to='/'
                            >Schedule & Tickets</NavReLinks>
                        </NavItem>
                        <NavItem>
                            <NavReLinks 
                                to='/classes'
                            >Classes</NavReLinks>
                        </NavItem>
                        <NavItem>
                            <NavReLinks 
                                to='/results'
                            >Results</NavReLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/forms'>Log In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default AltNav