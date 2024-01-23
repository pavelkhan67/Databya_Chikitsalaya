import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

const WhoWeAre = () => {
    return (
        <div className='bg-color text-white px-1 py-10'>
            <div className='lg:grid grid-cols-2 pb-7' id='about'>
                <div className='pe-2 flex flex-col justify-center text-justify pr-2 md:pr-5'>
                    <TypeAnimation
                        className='text-3xl md:text-4xl font-semibold mb-3'
                        // Same String at the start will only be typed once, initially
                        sequence={[
                            "Who We Are",
                            4000,
                            "Know About Us",
                            4000
                        ]}
                        speed={10} // Custom Speed from 1-99 - Default Speed: 40
                        wrapper="span" // Animation will be rendered as a <span>
                        repeat={Infinity} // Repeat this Animation Sequence infinitely
                        reset={true}
                    />
                    <div className='ps-1 lg:ps-0'>
                        <p className=''>Databya Chikitsalaya is a compassionate healthcare center committed to holistic well-being and community upliftment. Our mission extends beyond medical care, focusing on education, women's empowerment, awareness campaigns, and providing support for the elderly. Through initiatives such as scholarships, women empowerment programs, and awareness campaigns, we aim to create a positive impact on lives, fostering a community that thrives on compassion and collective well-being.</p>

                        <p className='py-2'><span className='font-semibold'>Mission:</span> Databya Chikitsalaya is a healthcare center dedicated to holistic well-being and community welfare. Our focus areas include education, women's empowerment, awareness campaigns, and support for the elderly.</p>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-1 md:gap-2  mt-5 lg:mt-0'>
                    <div className='group flex flex-col justify-center items-center text-center  border-2 border-slate-300 py-2 lg:py-5 px-1 rounded hover:shadow-md hover:border-orange-400 hover:shadow-slate-500 transition-all duration-500'>
                        <p className='text-2xl md:text-3xl pb-2 group-hover:text-orange-400'>Education</p>
                        <p>Nurturing minds for a brighter future through skill development and scholarships</p>
                    </div>
                    <div className='group flex flex-col justify-center items-center text-center  border-2 border-slate-300 py-2 lg:py-5 px-1 rounded hover:shadow-md hover:border-orange-400 hover:shadow-slate-500 transition-all duration-500'>
                        <p className='text-2xl md:text-3xl pb-2 group-hover:text-orange-400'>Women Empowerment</p>
                        <p>Advocating for gender equality and providing resources for women to achieve their aspirations</p>
                    </div>
                    <div className='group flex flex-col justify-center items-center text-center border-2 border-slate-300 py-2 lg:py-5 px-1 rounded hover:shadow-md hover:border-orange-400 hover:shadow-slate-500 transition-all duration-500'>
                        <p className='text-2xl md:text-3xl pb-2 group-hover:text-orange-400'>Awareness Campaigns</p>
                        <p>Fostering a culture of awareness on health, social issues, and the environment</p>
                    </div>
                    <div className='group flex flex-col justify-center items-center text-center border-2 border-slate-300 py-2 lg:py-5 px-1 rounded hover:shadow-md hover:border-orange-400 hover:shadow-slate-500 transition-all duration-500'>
                        <p className='text-2xl md:text-3xl pb-2 group-hover:text-orange-400'>Old Age Home</p>
                        <p>Offering healthcare, companionship, and respect for the elderly</p>
                    </div>
                </div>
            </div>
            <div>
                <Link to='/about' className=" btn bg-color text-lg border-2 border-white normal-case text-white "> Read More </Link>

            </div>
        </div>

    );
};

export default WhoWeAre;