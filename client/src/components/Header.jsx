import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    const [mobileMenu,
        setMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    }
    return (
        <header className='bg-slate-100 shadow-md p-2 md:px-16'>
            <div className='flex justify-between items-center mx-auto p-3 '>
                <Link to={"/"}>
                    <h1 className='text-2xl md:text-3xl font-bold'>
                        <span className='text-black'>Page</span>
                        <span className='text-red-600'>Lift</span>
                    </h1>
                </Link>
                {/* Desktop Menu */}
                <ul className='flex gap-4 sm:gap-16'>
                    <Link
                        to={"/Signin"}
                        className='inline hover:underline md:text-lg font-semibold'>
                        <li>Signin</li>
                    </Link>
                    <Link
                        to={"/profile"}
                        className='inline hover:underline md:text-lg font-semibold'>
                        <li>Profile</li>
                    </Link>
                </ul>

                {/* <div className='md:hidden'>
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div> */}

            </div>

            {/* <div className={`md:hidden ${mobileMenu ? '' : 'hidden'}`}>
        <ul className='hidden md:flex gap-4'>
            <Link to={"/"} className='hidden  sm:inline hover:underline md:text-lg font-semibold'><li>Home</li></Link>
            <Link to={"/Signin"} className='hidden  sm:inline hover:underline md:text-lg font-semibold'><li>Signin</li></Link>
            <Link to={"/profile"} className='hidden  sm:inline hover:underline md:text-lg font-semibold'><li>Profile</li></Link>
        </ul>
        </div> */}
        </header>
    )
}
