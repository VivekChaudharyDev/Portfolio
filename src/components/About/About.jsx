import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/myProfile.png'
import profileImage1 from '../../assets/myProfile1.png'
import darkProfileImage from '../../assets/myProfileDark.png'

const About = () => {
  const [show, setShow] = useState(false);
  const [isDark, setIsDark] = useState(
    () => (document.documentElement.getAttribute("data-theme") ?? "dark") === "dark"
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
    });
    observer.observe(document.documentElement, { attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-12 md:mt-16 lg:mt-20"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">

        {/* Left Side - Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-4 mb-6 md:mb-0 relative shrink-0">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:h-[26rem] md:w-[26rem] lg:h-[30rem] lg:w-[30rem] rounded-full relative flex items-center justify-center"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1500}
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                boxShadow: `-18px 0px 60px 12px rgba(34, 211, 238, 0.5),
                    18px 0px 60px 12px rgba(236, 72, 153, 0.5)`
              }}
            />
            {/* Gradient Ring */}
            <div className="absolute inset-0 rounded-full p-[4px] bg-gradient-to-tr from-cyan-400 via-pink-500 to-purple-600">
              {/* Image */}
              <div className="h-full w-full rounded-full overflow-hidden bg-[#020c1b] flex items-center justify-center">
                <img
                  src={isDark ? darkProfileImage : profileImage1}
                  alt="Vivek's Image"
                  className="h-full w-full object-cover scale-110"
                />
              </div>
            </div>
          </Tilt>
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2 text-center md:text-left md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold dark:text-dark-text text-light-text mb-1 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold dark:text-dark-text text-light-text mb-4 leading-tight whitespace-nowrap">
            Vivek Kumar
          </h2>
          {/* Typewriter */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-global-clr leading-tight">
            <span className="dark:text-dark-text text-light-text">I am a </span>
            {show && <Typewriter
              words={[
                "Fullstack Developer",
                "App Developer",
                "Problem Solver",
                "Knowledge Seeker",
              ]}
              loop={0}
              cursor
              cursorStyle={<span className="text-accent-light">|</span>}
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />}
          </h3>
          {/* Paragraph */}
          <p className="text-base sm:text-lg md:text-lg dark:text-dark-para text-light-para mb-10 mt-6 leading-relaxed tracking-tight text-justify">
            I am an MCA student and aspiring software engineer with experience in cloud computing,
            full-stack development, and AI projects. I focus on building practical solutions,
            improving my skills, and creating meaningful real-world applications.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.usercontent.google.com/u/0/uc?id=1DLDLtIzLgbypMDicLsJp_Wt5zaxyU_tA&export=download"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-block dark:text-dark-text text-light-text py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #ff499e, #f25ea3)',
              boxShadow: '0 0 2px #ff499e, 0 0 2px #ff499e, 0 0 40px #ff499e',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;