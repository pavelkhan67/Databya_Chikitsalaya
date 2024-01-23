import React from 'react';
import { Link } from 'react-router-dom';

const Donate = () => {
    return (
        <div className='bg-color mt-10 md:grid grid-cols-8 gap-5 px-5 py-5'>
            <div className='bg-donate col-span-4 px-4 py-3 g-3'>
                <p className='playfair text-4xl md:text-5xl text-indigo-800 pb-4 font-semibold'>Help Us Monthly</p>
                <p className='text-white authorone text-justify leading-7'>In this world of suffering, there are many unfortunate situations in which people lose hope. They become helpless through death, Sickness, poverty or war. So let’s join hands to transform and bring hope to those needy child. So come forward and donate for a children’s quality education.</p>
            </div>

            <div className='bg-base-200 col-span-2 flex flex-col justify-between pb-5 mt-5 md:mt-0'>
                <div className='bg-red-500 py-5 px-4 text-white font-semibold'>
                    <p className='text-xl'>DONATE FOR EDUCATION</p>
                    <p className='text-5xl md:text-7xl'>550</p>
                    <p><span className='text-xl md:text-2xl'>M</span>ONTHLY</p>
                </div>
                <p className='text-lg px-2 py-2'>Your Donation could help children get access to quality Education.</p>
                <div><Link to='/donate' className=" btn bg-red-500 rounded-full text-lg border-2 border-white normal-case text-white "> Donate Now </Link></div>
            </div>

            <div className='bg-base-200 col-span-2 flex flex-col justify-between pb-5 mt-5 md:mt-0'>
                <div className='bg-green-500 py-5 px-4 text-white font-semibold'>
                    <p className='text-xl'>DONATE FOR CARE</p>
                    <p className='text-5xl md:text-7xl'>250</p>
                    <p><span className='text-xl md:text-2xl'>M</span>ONTHLY</p>
                </div>
                <p className='text-lg px-2 py-2'>Your support could help a needy child to access quality Food & Shelter.</p>
                <div><Link to='/donate' className=" btn bg-green-500 rounded-full text-lg border-2 border-white normal-case text-white "> Donate Now </Link></div>
            </div>

        </div>
    );
};

export default Donate;