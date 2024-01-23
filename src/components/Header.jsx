import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarPadding = scrollPosition > 100 ? 'py-2' : 'py-4';


    return (
        <div className='fixed w-screen md:w-11/12 mx-auto z-50'>
            <div className='bg-orange-500 flex justify-between ps-2 pe-6 md:ps-10 md:pe-10 py-2 text-white font-semibold'>
                <div className='flex gap-2 md:gap-4 text-sm md:text-base'>
                    <div className='flex gap-0 md:gap-1'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 md:w-6 h-5 md:h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                        </div>
                        <p>+07374982461</p>
                    </div>
                    <div className='flex gap-1'>
                        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 md:w-6 h-5 md:h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg></div>
                        <p> ffffhfhg@gmail.com</p>
                    </div>
                </div>

                <div className='flex gap-1 md:gap-2'>
                    <a href=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    <a href=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                </div>
            </div>

            <div className={`flex justify-between transition bg-color px-2  ${navbarPadding}`} >
                <div className="navbar-start flex items-center">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-sm btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul className="menu menu-sm dropdown-content mt-4 z-[1] p-2 space-y-2 shadow bg-base-100 rounded-box w-48 font-semibold">
                        <li><NavLink to='/about' className={` btn bg-color normal-case text-white ({ isActive }) => (isActive ? 'active' : 'default')`}> AboutUs </NavLink></li>
                        <li><NavLink to='/whatwedo' className={` btn bg-color normal-case text-white ({ isActive }) => (isActive ? 'active' : 'default')`}> What We Do </NavLink></li>
                        <li><NavLink to='/contact' className={` btn bg-color normal-case text-white ({ isActive }) => (isActive ? 'active' : 'default')`}> ContactUs </NavLink></li>
                        <li><NavLink to='/donate' className={` btn bg-color normal-case text-white ({ isActive }) => (isActive ? 'active' : 'default')`}> Donate </NavLink></li>
                        </ul>
                    </div>

                    <a href='/' className="font-semibold playfair text-base md:text-xl lg:text-2xl md:ps-1 text-white">Databya Chikitsalaya </a>
                </div>
                <div className="navbar-end flex flex-2 items-center">
                    <ul className="men hidden lg:flex font-semibold gap-3 text-white" >
                        <li><NavLink to='/' className={` btn bg-color btn-sm normal-case text-white ({ isActive }) => (isActive ? 'active' : 'default')`}> Home </NavLink></li>
                        <li><NavLink to='/about' className={` btn bg-color btn-sm normal-case text-white ({ isActive }) => (isActive ? 'active' : 'default')`}> AboutUs </NavLink></li>
                        <li><NavLink to='/whatwedo' className={` btn bg-color btn-sm normal-case text-white ({ isActive }) => (isActive ? 'active' : 'default')`}> What We Do </NavLink></li>
                        <li><NavLink to='/donate' className={` btn bg-orange-300 btn-sm normal-case text-white ({ isActive }) => (isActive ? 'active' : 'default')`}> Donate </NavLink></li>
                        <li><NavLink to='/contact' className={` btn bg-color btn-sm normal-case text-white ({ isActive }) => (isActive ? 'active' : 'default')`}> ContactUs </NavLink></li>
                    </ul>
                    {/* <a className="btn btn-outline btn-sm text-orange-500 bg-slate-100 border-0 border-b-4 border-r-4 border-orange-600 me-3 md:me-2 ms-1">Login</a> */}
                </div>
            </div>
        </div>

    );
};

export default Header;
