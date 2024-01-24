import React from 'react';
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data); // This will log all the form data when the form is submitted
        Swal.fire({
            icon: 'success',
            title: 'Order successful.',
            showConfirmButton: false,
            timer: 1000
        });
    };

    return (
        <div className='pt-24'>
            <div className='bg-gray pt-8 px-2'>
                <div className='font-semibold text-start pb-5'>
                    <p className=' playfair text-4xl md:text-5xl text-color'>Contact Us</p>
                    <p className='text-3xl pt-1'> Friends For Humanity Databya Chikitsalaya</p>
                </div>

                <div className='md:grid grid-cols-3 pb-5'>
                    <div className='col-span-2'>
                        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto p-2 md:p-4 border-2 border-gray-300 rounded-md">
                            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">

                                <div className="mb-1">
                                    <label className="block">
                                        <input type="text" {...register('userName', { required: true })} className="w-full border border-gray-300 rounded-md p-2 mt-1" placeholder='Your Name' />
                                    </label>
                                    {errors.userName && <p className="text-red-500">UserName is required</p>}
                                </div>

                                <div className="mb-1">
                                    <label className="block">
                                        <input type="email" {...register('email', { required: true })} className="w-full border border-gray-300 rounded-md p-2 mt-1" placeholder='Your Name' />
                                    </label>
                                    {errors.email && <p className="text-red-500">Email is required</p>}
                                </div>

                                <div className="mb-1">
                                    <label className="block">
                                        <input type="tel" {...register('phoneNumber', { required: true })} className="w-full border border-gray-300 rounded-md p-2 mt-1" placeholder='Phone Number' />
                                    </label>
                                    {errors.phoneNumber && <p className="text-red-500">PhoneNumber is required</p>}
                                </div>

                                <div className="mb-1">
                                    <label className="block">
                                        <input type="tel" {...register('zipcode', { required: true })} className="w-full border border-gray-300 rounded-md p-2 mt-1" placeholder='ZIP Code' />
                                    </label>
                                    {errors.zipcode && <p className="text-red-500">Zip Code is require</p>}
                                </div>

                                <div className="mb-1 col-span-2">
                                    <label className="block">
                                        <textarea
                                            {...register('message', { required: true })}
                                            className="w-full h-32 border border-gray-300 rounded-md p-2 mt-1"
                                            placeholder='Your Message'
                                        ></textarea>
                                    </label>
                                    {errors.message && <p className="text-red-500">Message is required</p>}
                                </div>
                            </div>

                            <button type="submit" className="authorone btn btn-outline w-1/2 md:w-1/3 mt-2 text-white bg-orange-400 hover:bg-green-500">
                                Submit
                            </button>
                        </form>
                    </div>

                    <div className='font-semibold text-start pt-5 md:pt-0 ps-1 md:ps-5 md:pe-8 authorone'>
                        <p className='text-2xl underline pb-2'>Address:</p>
                        <p className=''>Vill-Hitaljore, P.O-Balpai, P.S-Sabang, Dist-Dhaka, Pin-454, Bangladesh.</p>
                        <p className='text-2xl underline pt-4 pb-2'>Contact Us:</p>
                        <p className=''>+880 2424215</p>
                        <p className=''>ffff@gmail.com</p>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default ContactUs;