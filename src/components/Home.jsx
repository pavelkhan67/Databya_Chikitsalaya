import React from 'react';
import Banner from './Home/Banner';
import WhoWeAre from './Home/WhoWeAre';
import Contact from './Home/Contact';
import Welcome from './Home/Welcome';
import OurProjects from './Home/OurProjects';
import Donate from './Home/Donate';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Welcome></Welcome>
            <WhoWeAre></WhoWeAre>
            <OurProjects></OurProjects>
            <Contact></Contact>
            <Donate></Donate>
        </div>
    );
};

export default Home;