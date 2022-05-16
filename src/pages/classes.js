import React, { useState } from 'react';
import Footer from '../components/Footer';
import AltNav from '../components/Navbar/AltNav';
import ClassesInfo from '../components/PageInfo/ClassesInfo';
import ScrollToTop from '../components/ScrollToTop';
import AltSidebar from '../components/Sidebar/AltSidebar';


const Classes = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <ScrollToTop />
            <AltSidebar isOpen={isOpen} toggle={toggle} />
            <AltNav toggle={toggle} />
            <ClassesInfo />
            <Footer />
        </>
    );
};

export default Classes