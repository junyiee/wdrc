import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/InfoSection/AboutSect';
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data';
import Discover from '../components/InfoSection/Discover'
import Footer from '../components/Footer';
import SignUpSection from '../components/InfoSection/SignUpSect';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <AboutSection {...homeObjOne} />
            <Discover />
            <SignUpSection {...homeObjTwo} />
            <Footer />
        </>
    );
};

export default Home