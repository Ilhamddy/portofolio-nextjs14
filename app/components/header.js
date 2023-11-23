import Image from 'next/image'
import React from 'react'



const Header = () => {
    return (
        <div className="md:px-8 p-4 max-w-screen-2xl mx-auto mt-24 ">
            <div className="gradientBg around-xl rounded-br-[80px] md:p-9 px-4">
                <div className='flex flex-col md:flex-row justify-between items-center py-20 gap-10'>
                    {/* banner image */}
                    <div>
                        {/* <img src={banner} alt="" className='lg:h-[386px]' /> */}
                        <Image src="/Fotodiri-removebg-preview.png" width={400} height={400} className='lg:h-[386px]'></Image>
                    </div>
                    {/* Banner content */}
                    <div className="md:w-3/5 ">
                        <h2 className='md:text-5xl text-4xl font-bold text-white mb-6'>Fullstack Developer</h2>
                        <p className='pb-12 text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam doloribus cumque debitis ducimus non. Minima blanditiis, fugit, nobis iure delectus quibusdam pariatur, saepe unde quisquam cumque sapiente soluta tempore in! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, omnis exercitationem? Pariatur incidunt autem, sit doloremque voluptate, vitae amet exercitationem placeat saepe, repellendus quisquam unde aspernatur. Non sequi provident cupiditate!</p>
                        <div>
                            <button className='py-2 px-8 bg-white font-semibold text-black  my-5 rounded hover:bg-black hover:text-white transition-all duration-300'>Get Started</button>
                            <button className='py-2 px-8 font-semibold text-white mx-5 my-5 rounded hover:bg-black hover:text-white transition-all duration-300'>Contact</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header