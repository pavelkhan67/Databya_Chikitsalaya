import React from 'react';
import img1 from "../assets/img/mission.png"
import img2 from "../assets/img/vision.png"
import img3 from "../assets/img/goal.png"

const AboutUs = () => {
    return (
        <div className=' pt-32 px-1 md:px-0'>
            <div class="">
                <p className='text-color playfair text-4xl md:text-5xl font-semibold'>About Us</p>
            </div>

            <p className='text-justify mt-3 px-1'>Friends For Humanity Databya Chikitsalaya is a compassionate healthcare center committed to holistic well-being and community upliftment. Our mission extends beyond medical care, focusing on education, women's empowerment, awareness campaigns, and providing support for the elderly. Through initiatives such as scholarships, women empowerment programs, and awareness campaigns, we aim to create a positive impact on lives, fostering a community that thrives on compassion and collective well-being.</p>

            <div className='grid grid-cols-2 gap-3 mt-5 px-1'>
                <div className='shadow3 px-2 pb-4 flex flex-col justify-center items-center'>
                    <img className='w-32' src={img1} alt="" />
                    <p className='authorone pt-2 pb-3 text-2xl font-semibold'>Our Mission</p>
                    <p>To contribute towards building a rights based, peaceful and prosperous society where every individual leads a dignified and sustainable life.</p>
                </div>

                <div className='shadow3 px-2 pb-4 flex flex-col justify-center items-center'>
                    <img className='w-[138px]' src={img2} alt="" />
                    <p className='authorone pt-2 pb-3 text-2xl font-semibold'>Our Vision</p>
                    <p>To create an environment of equal development opportunities and access to health, education, livelihood and other welfare services for underprivileged communities, especially the poor and socially backward communities.</p>
                </div>
            </div>

            <div className='bg-gray mt-5 py-5'>
                <p className='authorone text-3xl md:text-4xl text-color pb-3 font-semibold'>Our Objective</p>
                <div className='md:grid grid-cols-3 px-1 md:px-0 items-center'>
                    <div className='md:order-2'>
                        <img className='w-full' src={img3} alt="" />
                    </div>
                    <div className=' obj col-span-2 md:order-1  text-justify px-1'>
                        <ul>
                            <li>To enquire, establish, start, aid, run, maintain Or manage Schools, night School, adults education centre, Colleges, girls Schools, libraries, hospital for the benefit of the public.</li>
                            <li>To arrange, organise, seminars & excursions for the diffusion of knowledge.</li>
                            <li>To promote and encourage the advancement of literary, cultural, political, religious, scientific, and technical education.</li>
                            <li>To help the needy students of all communities for the prosecution of studies.</li>
                            <li>To collect and preserve manuscripts, paintings, sculptures, works of art, antiquities, natural history specimens, mechanical and scientific instruments and designs.</li>
                            <li>To arrange Mela, Exhibition, training, camp, hat, bajar, etc., for the interest of the committee.</li>
                            <li>To collect donations and subscriptions for the purpose of society.</li>
                            <li>To help the aged, sick, helpless, and indigent persons.</li>
                        </ul>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default AboutUs;