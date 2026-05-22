import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/myProfile.png'
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
    const timer = setTimeout(() => setShow(true), 500); // typingDelay = 500ms
    return () => clearTimeout(timer);
  }, []);
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px[20vw] font-sans mt-12 md:mt-16 lg:mt-20"
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Side */}
        {/* Left Side */}
<div className="md:w-1/2 flex justify-center md:justify-end mt-4 mb-10 ml-3 relative">
  <Tilt
    className="w-48 h-48 sm:w-64 sm:h-64 md:h-[30rem] md:w-[30rem] rounded-full relative flex items-center justify-center"
    tiltMaxAngleX={15}
    tiltMaxAngleY={15}
    perspective={1000}
    scale={1.05}
    transitionSpeed={1500}
  >
    {/* 1. GLOW LAYERS (Background) */}
    <div className="absolute inset-0 rounded-full pointer-events-none"
      style={{
        boxShadow: `-18px 0px 60px 12px rgba(34, 211, 238, 0.5),
                    18px 0px 60px 12px rgba(236, 72, 153, 0.5)`
      }}
    />

    {/* 2. THE ACTUAL GRADIENT RING */}
    {/* We use padding to define the ring thickness. The background of this div is the ring. */}
    <div className="absolute inset-0 rounded-full p-[4px] bg-gradient-to-tr from-cyan-400 via-pink-500 to-purple-600">
      
      {/* 3. THE IMAGE CONTAINER */}
      {/* This div is nested INSIDE the ring div. 
          Its background creates the "black gap" look or seamless look depending on padding. */}
      <div className="h-full w-full rounded-full overflow-hidden bg-[#020c1b] flex items-center justify-center">
        <img
          src={isDark ? darkProfileImage : profileImage}
          alt="Vivek's Image"
          className="h-full w-full object-cover scale-110" 
        />
      </div>
    </div>
  </Tilt>
</div>
        {/* Right Side */}
        <div className="md:w-1/2 text-center md:text-left ml-15 mr-10 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold dark:text-dark-text text-light-text mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold dark:text-dark-text text-light-text mb-4 leading-tight">
            Vivek Kumar
          </h2>
          {/* Skills heading with typing effect */}
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
          {/* About me paragraph */}
          <p className="text-base sm:text-lg md:text-lg dark:text-dark-para text-light-para mb-10 mt-8 leading-relaxed text-justify tracking-tight">
            I am an MCA student and aspiring software engineer with experience in cloud computing,
            full-stack development, and AI projects. I focus on building practical solutions,
            improving my skills, and creating meaningful real-world applications.
          </p>

          {/* Resume Button */}
          <a href="https://drive.usercontent.google.com/u/0/uc?id=1-qDlI1BizF6CgjeKGAuxfnG3ywHrYLTj&export=download" rel="noopener noreferrer"
            target="_blanck"
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


{/* I am going to take backup of my portfolio*/ }