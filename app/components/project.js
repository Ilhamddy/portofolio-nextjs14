import React from 'react'
import Image from 'next/image'


const Project = () => {
    return (
        <div className="my-2  md:px-14 p-4 max-w-screen-2xl mx-auto ">
            {/* <h1 className="text-center text-6xl mt-24 mb-12 italic ">Project</h1>  */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <div className="lg:w-1/4">
                    <h3 className="text-3xl text-primary font-bold mb-1 mt-48"> My Project</h3>
                    <p className="text-base text-tartiary text-justify">This is my project, I have created this website using React.js and Next.js framework.</p>
                </div>
                {/* featured cards */}

                <div className="lg:w-3/4 flex flex-wrap justify-center">
                    <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
                        <div className="p-1 max-w-sm ">
                            <div class="flex rounded-lg h-full dark:bg-gray-800 bg-primary p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div
                                        class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <h2 class="text-white dark:text-white text-lg font-medium">Kalkulator</h2>
                                </div>
                                <div class="flex flex-col justify-between flex-grow items-center">
                                    {/* <img src={kalkulator} className="text-white w-32" alt="" /> */}
                                    <Image src="/kalkulator.png" width={350} height={350}   ></Image>

                                    <p class="leading-relaxed text-sm text-white dark:text-gray-350 text-justify">
                                        calculations such as addition, subtraction, multiplication and division to scientific calculators that can calculate specific mathematical formulas.
                                    </p>
                                    <a href="https://calculator-eta-ashen.vercel.app/" class="mt-3 text-white dark:text-white hover:text-blue-600 inline-flex items-center">Github
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="p-1 max-w-sm ">
                            <div class="flex rounded-lg h-full dark:bg-gray-800 bg-primary p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div
                                        class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <h2 class="text-white dark:text-white text-lg font-medium">To Do List</h2>
                                </div>
                                <div class="flex flex-col justify-between flex-grow items-center">
                                    {/* <img src={todolist} className="text-white w-64" alt="" /> */}
                                    <Image src="/todolist.png" width={350} height={350}   ></Image>

                                    <p class="leading-relaxed text-sm text-white dark:text-gray-350 text-justify">
                                        Schedule planner & Reminders is a free and easy-to-use online schedule organiser that can help you to manage your time.
                                    </p>
                                    <a href="https://todolist-chi-ten.vercel.app/" class="mt-3 text-white dark:text-white hover:text-blue-600 inline-flex items-center">Github
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="p-1 max-w-sm ">
                            <div class="flex rounded-lg h-full dark:bg-gray-800 bg-primary p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div
                                        class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <h2 class="text-white dark:text-white text-lg font-medium">Weather Vanila</h2>
                                </div>
                                <div class="flex flex-col justify-between flex-grow items-center">
                                    {/* <img src={weather} className="text-white w-32" alt="" /> */}
                                    <Image src="/3.png" width={350} height={350}   ></Image>

                                    <p class="leading-relaxed text-sm text-white dark:text-gray-350 text-justify">
                                        one of the weather forecast apps. This app has accurate weather forecast models like the best weather forecast models
                                    </p>
                                    <a href="https://weather-omega-topaz.vercel.app/" class="mt-3 text-white dark:text-white hover:text-blue-600 inline-flex items-center">Github
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="p-1 max-w-sm ">
                            <div class="flex rounded-lg h-full dark:bg-gray-800 bg-primary p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div
                                        class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <h2 class="text-white dark:text-white text-lg font-medium">Todolist React</h2>
                                </div>
                                <div class="flex flex-col justify-between flex-grow items-center">
                                    {/* <img src={todolistReact} className="text-white w-32" alt="" /> */}
                                    <Image src="/5.png" width={350} height={350}   ></Image>

                                    <p class="leading-relaxed text-sm text-white dark:text-gray-350 text-justify">
                                        Schedule planner & Reminders is a free and easy-to-use online schedule organiser that can help you to manage your time with React JS.
                                    </p>
                                    <a href="https://react-todolist-khaki.vercel.app/" class="mt-3 text-white dark:text-white hover:text-blue-600 inline-flex items-center">Github
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Project