import React, { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/img/education.jpg'
import img2 from '../../assets/img/womanEmpower.jpg'
import img3 from '../../assets/img/healthCamp.webp'
import './OurProjects'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Banner = () => {
      

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
        >
            {/* h-[72vh] md:h-[50vh] lg:h-[90vh] */}
            <div id='main'>
                <Carousel autoPlay={true} showArrows={false} infiniteLoop={true} interval={6000} showThumbs={false} transitionTime={1500} className='text-center ' >
                    <div className="relative w-full h-[60vh] md:h-[50vh] lg:h-[100vh]">
                        <img src={img1} className="w-full h-full" />
                        <div className=" absolute h-full w-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#111111ec] to-[#4140408c]">
                            <div className='text-white text-center w-full px-4 md:px-8 pt-20'>
                                <h2 className='text-xl underline'>EDUCATION DEVELOPMENT</h2>
                                <p className="text-4xl md:text-5xl pt-3 playfair">Education is the most powerful weapon to change the world</p>
                                <div className='pt-8'>
                                    <Link to="/donate"><button className='btn btn-outline text-lg text-white bg-green-600 border-1 border-green-600 rounded-full normal-case'>Donate Us</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-[60vh] md:h-[50vh] lg:h-[100vh]">
                        <img src={img2} className="w-full h-full" />
                        <div className=" absolute h-full w-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#111111ec] to-[#4140408c]">
                            <div className='text-white text-center w-full px-4 md:px-8 pt-20'>
                                <h2 className='text-xl underline'>WOMAN EMPOWERMENT</h2>
                                <p className='text-4xl md:text-5xl pt-3 playfair'>Rising Together, Empowering Forever: Women's Strength, Society's Progress</p>
                                <div className='pt-8'>
                                    <Link to="/donate"><button className='btn btn-outline text-lg text-white bg-orange-600 border-1 border-orange-600 rounded-full normal-case'>Donate Us</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-[60vh] md:h-[50vh] lg:h-[100vh]">
                        <img src={img3} className="w-full h-full" />
                        <div className=" absolute h-full w-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#111111ec] to-[#4140408c]">
                            <div className='text-white text-center w-full px-4 md:px-8 pt-20'>
                                <h2 className='text-xl underline'>OUTDOOR CLINIC</h2>
                                <p className='text-4xl md:text-5xl pt-3 playfair'>Sunshine and Serenity: Discover a New Standard of Care at Our Outdoor Clinic</p>
                                <div className='pt-8'>
                                    <Link to="/donate"><button className='btn btn-outline text-lg text-white bg-green-600 border-1 border-green-600 rounded-full normal-case'>Donate Us</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>

        </motion.div>
    );
};

export default Banner;