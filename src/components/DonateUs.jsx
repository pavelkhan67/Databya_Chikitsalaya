import React from 'react';
import img from "../assets/img/giveLove.jpg"

const DonateUs = () => {
    return (
        <div className='pt-24'>

            <div className='bg-gray pt-8 pb-5'>
                <div className='border-4 border-color mx-2 md:mx-10 p-5 md:grid grid-cols-2 gap-2 items-center'>
                    <div className='md:order-2'><img src={img} alt="" /></div>
                    <div className='font-semibold text-left md:order-1 pt-2 md:pt-0'>
                        <p className='playfair text-4xl md:text-6xl' style={{ color: '#0e7162' }}>Donate Us</p>
                        <p className='text-2xl pt-4 pb-2'>Please support us in our mission.</p>
                        <p className='underline text-xl'>Contact to Donate us</p>
                        <p className='pt-2 pb-1'>Call: +880 5646565675 / +880 6677555</p>
                        <p>Email: ffff@gmail.com</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default DonateUs;