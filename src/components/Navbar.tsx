import React from 'react'
import {BsHouse, BsTelephoneInbound, BsPatchQuestion, BsLightbulb } from "react-icons/bs"
import {MdOutlineDesignServices, MdDarkMode} from "react-icons/md"
import {useTheme} from '../context/Themes/ThemeContext';

    
const Navbar= () => {
    const { darkMode, setDarkMode } = useTheme();


return (
    <nav className="nav_container flex">
        <div className="nav_wrapper flex flex-col md:flex-row justify-center items-center my-6 md:my-9 w-full">
            <h1 className="text-3xl text-indigo-700 md:mr-24">Design your dream.</h1>
        <div className="nav_ul mt-3">
                <ul className="flex list-none gap-8 items-center justify-between mx-auto">
                    <li><a href="#Home" className="flex items-center justify-center text-indigo-700"><BsHouse className="mr-2" /> Home</a></li>
                    <li><a href="#About Us" className="flex items-center justify-center hover:text-indigo-700"><BsPatchQuestion className="mr-2" /> About Us</a></li>
                    <li><a href="#Services" className="flex items-center justify-center hover:text-indigo-700"><MdOutlineDesignServices className="mr-2" /> Services</a></li>
                    <li><a href="#Contact Us" className="flex items-center justify-center hover:text-indigo-700"><BsTelephoneInbound className="mr-2" /> Contact Us</a></li>
                    <button onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <BsLightbulb/> : <MdDarkMode/>}
                    </button>
                </ul>
            </div>
        </div>
    </nav>
)
}

export default Navbar