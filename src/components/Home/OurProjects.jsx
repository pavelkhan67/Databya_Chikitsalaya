import React from 'react';
import { Link } from 'react-router-dom';
import imgedu from "../../assets/img/educationde.jpg"

const OurProjects = () => {
    return (
        <div className='mt-10'>
            <p className='playfair text-color text-4xl md:text-5xl mb-3 font-semibold'>Our Projects</p>
            <p className='text-justify px-2 md:px-1 leading-7'>Databya Chikitsalaya is a beacon of positive change, committed to holistic well-being. Our mission is powered by transformative education, offering skill development and scholarships to empower individuals for a prosperous tomorrow. As staunch advocates for gender equality, we provide a dynamic platform for women to break barriers, offering support and resources to fuel their aspirations. We actively engage in awareness campaigns addressing health, social issues, and environmental concerns, fostering an informed and responsible community. Our commitment extends to the elderly, operating an old age home where seniors receive healthcare, companionship, dignity, and respect, honoring their wisdom and experiences. Join us in creating a brighter, more compassionate world.</p>
            <div className='text-right my-4 pe-1 md:pe-0'>
                <Link to='/whatwedo' className="btn bg-color text-lg border-2 border-white normal-case text-white "> View All </Link>
            </div>
            <div className='shadow py-5 mx-2 md:mx-0'>
                    <p className='playfair text-start text-color text-3xl md:text-4xl ps-1 mb-2 md:mb-0 font-semibold'>Education Development</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 px-2 md:px-5'>
                        <div className='flex justify-center md:order-2'><img className='h-72 w-screen' src={imgedu} alt="" /></div>
                        <p className='text-justify col-span-2 flex items-center pr-0 md:pr-5 leading-7 md:order-1'>At [Your Organization Name], we firmly believe in the profound impact of education on individuals and communities. Our educational initiatives extend beyond conventional boundaries, offering holistic programs that not only impart academic knowledge but also foster essential life skills. Through our programs, participants engage in hands-on workshops, industry collaborations, empowering them to excel in today's dynamic landscape.

                            Dedicated to breaking down financial barriers, we provide diverse scholarship opportunities, ensuring that talented and passionate individuals from all backgrounds have access to quality education. </p>

                    </div>
                </div>
        </div>
    );
};

export default OurProjects;