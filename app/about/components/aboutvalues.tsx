import React from "react";
import Slide from "../../utils/Slide";
import FramerText from "../../utils/Framer";
import TextLeft from "../../utils/TextLeft";

const data = [
  {
    number: "01",
    title: "Coding Craftsman",
    desc: "I adhere to best coding practices, maintainability, and scalability, ensuring that the digital solutions I create are not just functional but also future-proof. I'm committed to continuous learning, staying updated with the latest industry trends, and implementing them to deliver cutting-edge solutions.",
  },
  {
    number: "02",
    title: "Collaborative Team Player",
    desc: "Effective collaboration is at the heart of my approach. I seamlessly integrate with cross-functional teams, communicate complex technical concepts in a way that fosters a shared understanding among team members, facilitating a smooth development process. ",
  },
  {
    number: "03",
    title: "Portfolio Highlights",
    desc: "Feel free to explore my portfolio, showcasing a diverse range of projects that highlight my technical prowess and commitment to excellence. Each project is a testament to my dedication to creating digital experiences that not only meet but exceed expectations.",
  },
];
const data2 = [
  {
    number: "04",
    title: "Web Architecture ",
    desc: "As Fullstack Developer, I architect and build the backbone of digital solutions. My proficiency spans both frontend and backend technologies, enabling me to create cohesive, high-performance applications.",
  },
  {
    number: "05",
    title: "Innovative Problem Solver",
    desc: "I bring creativity and innovation to every project. My problem-solving skills extend to optimizing code, enhancing performance, and implementing best practices for secure and scalable applications.",
  },
  {
    number: "06",
    title: "Tech Stack ",
    desc: "I am well-versed in a diverse range of technologies, including but not limited",
  },
];

const AboutValues = () => {
  return (
    <Slide>
      <div className=" min-h-full md:px-9">
        <div className="p-5 grid md:grid-cols-2 grid-cols-1">
          <FramerText>
            <div className="bg-black text-white my-1 p-1 rounded-2xl w-[100px] text-center mb-5">
              VALUES
            </div>
          </FramerText>
          <FramerText>
            <div>
              <div className="md:text-4xl text-2xl  text-start uppercase">
                committed to creating solutions aiming for a meaningful impact.
              </div>
              <p className="text-justify mt-5">
                Every project on the frontend, I design immersive and
                user-centric interfaces that captivate and engage.
                Simultaneously, my backend ensures the functionality is robust,
                scalable, and tailored to your specific requirements. Your
                online presence deserves more than the ordinary – let's elevate
                it with something truly remarkable.
              </p>
            </div>
          </FramerText>
        </div>
        <Slide>
          <div className="mt-20 p-5 ">
            <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
              {data.map((slide, idx) => {
                return (
                  <TextLeft>
                    <div
                      key={idx}
                      className="p-5 border-collapse  border border-slate-200 rounded h-[450px]"
                    >
                      <div>
                        {slide.number}
                        <div className="mb-20">{slide.title}</div>
                        <div className="text-justify">{slide.desc}</div>
                      </div>
                    </div>
                  </TextLeft>
                );
              })}
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1">
              <div></div>
              <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-5 col-span-3">
                {data2.map((slide, idx) => {
                  return (
                    <TextLeft>
                      <div
                        key={idx}
                        className="p-5 border-collapse  border border-slate-200 rounded h-[450px]"
                      >
                        <div>
                          {slide.number}
                          <div className="mb-20">{slide.title}</div>
                          <div className="text-justify">{slide.desc}</div>
                        </div>
                      </div>
                    </TextLeft>
                  );
                })}
              </div>
            </div>
            {/* <div className="grid md:grid-cols-4 grid-cols-1 gap-5 mt-5">
              <div></div>
              <div className="p-5 border-collapse  border border-slate-200 rounded">
                <div>
                  01
                  <div className="mb-20">Creativity</div>
                  Creativity holds profound significance in my approach, serving
                  as a powerful tool to elevate your brand amidst a competitive
                  landscape.
                </div>
              </div>{" "}
              <div className="p-5 border-collapse  border border-slate-200 rounded">
                <div>
                  01
                  <div className="mb-20">Creativity</div>
                  Creativity holds profound significance in my approach, serving
                  as a powerful tool to elevate your brand amidst a competitive
                  landscape.
                </div>
              </div>{" "}
              <div className="p-5 border-collapse  border border-slate-200 rounded">
                <div>
                  01
                  <div className="mb-20">Creativity</div>
                  Creativity holds profound significance in my approach, serving
                  as a powerful tool to elevate your brand amidst a competitive
                  landscape.
                </div>
              </div>
            </div> */}
          </div>
        </Slide>
      </div>
    </Slide>
  );
};

export default AboutValues;
