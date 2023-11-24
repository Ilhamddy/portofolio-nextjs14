"use client"

import React, { useEffect, useState } from 'react'
// icon import
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaXmark } from "react-icons/fa6"
import { CgBoy } from "react-icons/cg";
import Image from "next/image";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    console.log(isMenuOpen);
    const toogleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const navItems = [
        { link: "Profile", path: "home" },
        { link: "Project", path: "project" },
        { link: "About", path: "about" },
        { link: "Skill", path: "skill" },
        { link: "Contact", path: "contact" },

    ]
    return (
        <>
            <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed  top-0 right-0 left-0">
                <div className="text-lg container mx-auto flex justify-between items-center font-medium">

                    {/* navbar */}
                    <div className="flex space-x-14 items-center">
                        <a href="./about.js" className="text-2xl font-semibold flex items-center space-x-3 text-primary">
                            <Image src="/react.svg" width={50} height={50} ></Image> <span>Ilhamddy</span>
                        </a>
                        {/* showing nav items */}
                        <ul className="md:flex max-sm:hidden space-x-12 lg:flex ">
                            {
                                navItems.map(({ link, path }) => <a key={link} href={path} className="block hover:text-gray-300">{link}</a>)
                            }
                        </ul>
                    </div>

                    {/* Languange and Sign up */}

                    <div className="space-x-12 lg:flex md:flex items-center">
                        <a className="max-sm:hidden lg:flex items-center hover:text-secondary" >  <GrLanguage className="mr-2" /> <span>Languange</span></a>
                        <button className="max-sm:hidden bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-black">
                            <span className='w-12'><Image src="/mode.png" width={50} height={50}></Image></span>
                        </button>
                    </div>



                    {/* menu btn , only display mobile */}
                    <div className="md:hidden ">
                        <button onClick={toogleMenu} className="text-white focus:outline-none  focus:text-gray-300">
                            {
                                isMenuOpen ? (<FaXmark className="w-6 h-6 text-primary" />) : (<FaBars className="w-6 h-6 text-primary" />)

                            }

                        </button>
                    </div>
                </div>
            </nav>

            <div className={`lg:hidden space-y-4 px-4 pt-24 pb-5 bg-secondary ${isMenuOpen ? "block top-0 right-0 left-0" : "hidden"}`} >
                {
                    navItems.map(({ link, path }) => <a key={link} href={path} className="block hover:text-gray-300">{link}</a>)
                }
            </div>


        </>
    )
}

export default Navbar