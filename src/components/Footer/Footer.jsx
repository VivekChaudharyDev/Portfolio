import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Footer = () => {
    const handleScroll = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
  return (
    <footer className='text-light-text dark:text-dark-text py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      <div className='container mx-auto text-center'>
        <h2 className='text-xl font-semibold text-global-clr'>Vivek Kumar</h2>
        {/* Navigation Links */}
        <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className='text-light-text dark:text-dark-text hover:text-global-clr transition-colors duration-300 cursor-pointer'
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className='flex justify-center space-x-6 mt-6 text-2xl'>
          <a href='https://github.com/VivekChaudharyCS' target='_blank' rel='noopener noreferrer' className='hover:text-global-clr transition-colors duration-300'>
            <FaGithub />
          </a>
          <a href='https://www.linkedin.com/in/vivek-kumar-software-developer' target='_blank' rel='noopener noreferrer' className='hover:text-global-clr transition-colors duration-300'>
            <FaLinkedin />
          </a>
          <a href='https://x.com/Vivek_Kumar_CS' target='_blank' rel='noopener noreferrer' className='hover:text-global-clr transition-colors duration-300'>
            <FaTwitter />
          </a>
          <a href='https://instagram.com/vivek_kumar_cs' target='_blank' rel='noopener noreferrer' className='hover:text-global-clr transition-colors duration-300'>
            <FaInstagram />
          </a>
          <a href='https://www.facebook.com/VivekChaudharyCS/' target='_blank' rel='noopener noreferrer' className='hover:text-global-clr transition-colors duration-300'>
            <FaFacebook />
          </a>
          <a href='https://youtube.com/@vivekchaudharydev' target='_blank' rel='noopener noreferrer' className='hover:text-global-clr transition-colors duration-300'>
            <FaYoutube />
          </a>
        </div>

        {/* Copyright Notice */}
        <p className='mt-6 text-sm text-light-para dark:text-dark-para'>
          &copy; {new Date().getFullYear()} Vivek Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
