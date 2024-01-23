import React from 'react';
import imgwoman from "../assets/img/woman.jpg"
import imgedu from "../assets/img/educationde.jpg"
import imgmed from "../assets/img/medical.avif"
import imgold from "../assets/img/oldage.png"

const WhatWeDo = () => {
    return (
        <div className='pt-32'>
            <div className=''>
                <p className='playfair text-4xl md:text-5xl text-color pb-5 font-semibold'>Our Activities</p>

                <div className='shadow py-5 mx-2 md:mx-0 mb-6'>
                    <p className='playfair text-start text-color text-3xl md:text-4xl ps-2 mb-2 md:mb-0 font-semibold'>Education Development</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 px-2 md:px-5'>
                        <div className='flex justify-center md:order-2'><img className='h-72 w-screen' src={imgedu} alt="" /></div>
                        <p className='text-justify col-span-2 flex items-center pr-0 md:pr-5 leading-7 md:order-1'>At [Your Organization Name], we firmly believe in the profound impact of education on individuals and communities. Our educational initiatives extend beyond conventional boundaries, offering holistic programs that not only impart academic knowledge but also foster essential life skills. Through our programs, participants engage in hands-on workshops, industry collaborations, empowering them to excel in today's dynamic landscape.

                            Dedicated to breaking down financial barriers, we provide diverse scholarship opportunities, ensuring that talented and passionate individuals from all backgrounds have access to quality education. </p>

                    </div>
                </div>

                <div className='shadow2 py-5 mx-2 md:mx-0'>
                    <p className='playfair text-color text-3xl md:text-4xl text-start md:text-end ps-2 md:ps-0 pe-2 mb-2 md:mb-0 font-semibold'>Women's Empowerment</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 px-2 md:px-5'>
                        <div className='flex justify-center mt-1 md:mt-0'><img className='h-72 w-screen' src={imgwoman} alt="" /></div>
                        <p className='text-justify col-span-2 flex items-center pl-0 md:pl-5 leading-7 mt-3 md:mt-0'>At Databya Chikitsalaya, we are fervent champions of gender equality, steadfast in our commitment to creating a more inclusive society. We have established a vibrant platform that empowers women to unlock their full potential through comprehensive support, specialized training, and access to valuable resources. Our unwavering mission is to assist women in breaking through societal barriers, enabling them to reach their loftiest aspirations. Through these efforts, we aspire to play a pivotal role in fostering a society that is not only empowered but also embraces the principles of inclusivity and equality.</p>
                    </div>
                </div>

                <div className='shadow py-5 mx-2 md:mx-0 mt-6'>
                    <p className='playfair text-start text-color text-3xl md:text-4xl ps-2 mb-2 md:mb-0 font-semibold'>Outdoor Clinic</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 px-2 md:px-5'>
                        <div className='flex justify-center md:order-2'><img className='h-72 w-screen' src={imgmed} alt="" /></div>
                        <p className='text-justify col-span-2 flex items-center pr-0 md:pr-5 leading-7 md:order-1 mt-3 md:mt-0'>
                            At our outdoor clinic, we redefine healthcare by bringing it closer to nature. Embracing the outdoors, our clinic offers a unique and refreshing approach to well-being. Surrounded by open skies and fresh air, our patients experience a tranquil environment that complements the healing process. With a commitment to providing compassionate care, our outdoor clinic is a sanctuary where health and nature converge for a revitalizing and holistic healthcare experience. </p>

                    </div>
                </div>

                <div className='shadow2 py-5 mx-2 md:mx-0 mt-6'>
                    <p className='playfair text-color text-3xl md:text-4xl text-start md:text-end ps-2 md:ps-0 pe-2 mb-2 md:mb-0 font-semibold'>A Caring Haven for Seniors</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 px-2 md:px-5'>
                        <div className='flex justify-center mt-1 md:mt-0'><img className='h-72 w-screen' src={imgold} alt="" /></div>
                        <p className='text-justify col-span-2 flex items-center pl-0 md:pl-5 leading-7 mt-3 md:mt-0'>
                            Our old age home is more than just a residence; it's a nurturing haven for our elderly community. With a focus on compassionate care, dignity, and respect, we provide a supportive environment where seniors receive not only healthcare but also companionship. Our commitment extends beyond medical attention to honor the wisdom and experiences of our residents. At our old age home, we foster a sense of belonging and purpose, ensuring that each resident's golden years are filled with comfort, care, and a strong sense of community.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhatWeDo;