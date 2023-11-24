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
                        <Image src="/Fotodiri-removebg-preview.png" width={380} height={400} quality={100} className='lg:h-[386px]'></Image>
                    </div>
                    {/* Banner content */}
                    <div className="md:w-3/5 ">
                        <h2 className='md:text-5xl text-4xl font-bold text-white mb-6'>Fullstack Developer</h2>
                        <p className='pb-12 text-justify'>Ilhamddy is a dedicated student who is currently enrolled in a full-stack web development course at Purwhadhika. With a strong foundation in computer science, ilhamddy has developed an aptitude for learning new technologies and incorporating them into innovative solutions.
                            <br />
                            <br />
                            To further enhance his skills, ilhamddy has actively participated in coding competitions, hackathons, and collaborative projects. This hands-on experience has allowed him to develop critical thinking, problem-solving, and teamwork skills, which are crucial for a successful career in full-stack web development.




                        </p>
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