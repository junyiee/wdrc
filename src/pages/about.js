import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import AltNav from '../components/Navbar/AltNav';
import AboutInfo from '../components/PageInfo/AboutInfo';


const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <AltNav toggle={toggle} />
            <AboutInfo />
            <Footer />
        </>
    );
};

export default About