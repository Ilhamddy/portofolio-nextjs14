import React from "react";
import Slide from "../../utils/Slide";
import TextLeft from "../../utils/TextLeft";
import FramerText from "../../utils/Framer";

const ContactMe = () => {
  return (
    <Slide>
      <div className="mt-24 h-screen md:px-9 flex items-center">
        <div className="p-5 grid md:grid-cols-2 grid-cols-1">
          <FramerText>
            <div className="m-5">
              <div className="md:text-4xl text-2xl text-start">
                HAVE AN IDEA? LET'S DO IT TOGETHER!
              </div>
              <div className="my-5">
                Don't put your creativity on hold and let's build a professional
                web experience which will put you above your competitors.
              </div>
              <div>
                <ul>
                  <li>Ilham Maulana | Indonesia</li>
                </ul>
              </div>
            </div>
          </FramerText>
          <TextLeft>
            <div className="md:m-0 md:mx-10 m-5 ">
              <div className="">How I Can Help</div>
              {/* <div className="my-4">
              {" "}
              <button className="bg-red-600 p-2 text-white rounded-xl">
                A few words about me
              </button>{" "}
              <button className="bg-red-600 p-2 text-white rounded-xl">
                A few words about me
              </button>
            </div> */}
              <div>
                <form className="max-w-md mx-auto">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email address
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="password"
                      name="floating_password"
                      id="floating_password"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_password"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="password"
                      name="repeat_password"
                      id="floating_repeat_password"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_repeat_password"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Confirm password
                    </label>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        type="text"
                        name="floating_first_name"
                        id="floating_first_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_first_name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        First name
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        type="text"
                        name="floating_last_name"
                        id="floating_last_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_last_name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Last name
                      </label>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        name="floating_phone"
                        id="floating_phone"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_phone"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Phone number (123-456-7890)
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        type="text"
                        name="floating_company"
                        id="floating_company"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_company"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Company (Ex. Google)
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-black hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black-600 dark:hover:bg-black-700 dark:focus:ring-black-800"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </TextLeft>
        </div>
      </div>
    </Slide>
  );
};

export default ContactMe;
