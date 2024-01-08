import React from "react";
import Slide from "../../utils/Slide";

const AboutContact = () => {
  return (
    <Slide>
      <div className="py-24 min-h-full md:px-9">
        <div className="p-5 grid md:grid-cols-2 grid-cols-1">
          <div className="mb-5">
            <button className="bg-black p-2 text-white rounded-xl">
              Get in touch
            </button>
          </div>
          <div>
            <div className="md:text-4xl text-xl text-start">
              HAVE AN IDEA? LET'S DO IT TOGETHER!
            </div>
            <div className="my-5">
              Don't put your creativity on hold and let's build a professional
              web experience which will put you above your competitors.
            </div>
            <div>
              <button className="bg-black text-white my-1 p-1 rounded-2xl w-[100px]">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default AboutContact;
