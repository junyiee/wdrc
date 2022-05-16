import React, { useState } from 'react';
import Footer from '../components/Footer';
import AltNav from '../components/Navbar/AltNav';
import AboutInfo from '../components/PageInfo/AboutInfo';
import ScrollToTop from '../components/ScrollToTop';
import AltSidebar from '../components/Sidebar/AltSidebar';


const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <ScrollToTop />
            <AltSidebar isOpen={isOpen} toggle={toggle} />
            <AltNav toggle={toggle} />
            <AboutInfo />
            <Footer />
        </>
    );
};

export default About