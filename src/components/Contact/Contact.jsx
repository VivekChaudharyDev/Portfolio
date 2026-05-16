import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    const toastStyle = isDark
      ? { background: '#081d2c', border: '1px solid #0fbbff', color: '#c9d9e8' }
      : { background: '#f1f5f9', border: '1px solid #0fbbff', color: '#112e42' };

    const successProgressStyle = { background: '#0fbbff' };
    const errorProgressStyle = { background: '#ff499e' };

    const toastConfig = {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: isDark ? "dark" : "light",
    };

    emailjs.sendForm("service_nj3ljlr", "template_ut1edpo", form.current, "eCm3i-VJIVMLFpHKs")
      .then((result) => {
        console.log(result.text);
        setIsSent(true);
        form.current.reset();
        toast.success('Message sent successfully!', {
          ...toastConfig,
          style: toastStyle,
          progressStyle: successProgressStyle,
        });
      }, (error) => {
        console.log(error.text);
        toast.error('Failed to send message.', {
          ...toastConfig,
          style: { ...toastStyle, border: '1px solid #ff499e' },
          progressStyle: errorProgressStyle,
        });
      });
  };

  return (
    <section id="contact"
      className="flex flex-col items-center justify-center py-20 px-[7vw] md:px-[7vw] lg:px-[20vw]">

      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold dark:text-dark-text text-light-text uppercase tracking-wider">
          CONTACT
        </h2>
        <div className="w-24 h-1 bg-global-clr mx-auto mt-2"></div>
        <p className="dark:text-dark-para text-light-para mt-4 text-lg font-semibold max-w-3xl mx-auto">
          Feel free to reach out to me for any inquiries or opportunities!
        </p>
      </div>

      {/* Contact Form */}
      <div className='mt-4 w-full max-w-md bg-light-bg dark:bg-dark-bg p-6 rounded-lg border border-global-clr/30 shadow-[0_0_8px_rgba(15,187,255,0.25),0_0_20px_rgba(15,187,255,0.1)]'>
        <h3 className='text-xl font-semibold text-light-text dark:text-dark-text text-center'>Connect With Me</h3>

        <form ref={form} onSubmit={sendEmail} className='mt-4 flex flex-col space-y-4'>
          <input type="email" name='user_email' placeholder='Your Email' required
            className='w-full p-3 rounded-md bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text border border-global-clr/30 focus:outline-none focus:border-global-clr' />
          <input type="text" name='name' placeholder='Your Name' required
            className='w-full p-3 rounded-md bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text border border-global-clr/30 focus:outline-none focus:border-global-clr' />
          <input type="text" name='subject' placeholder='Subject' required
            className='w-full p-3 rounded-md bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text border border-global-clr/30 focus:outline-none focus:border-global-clr' />
          <textarea name='message' placeholder='Your Message' rows="4" required
            className='w-full p-3 rounded-md bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text border border-global-clr/30 focus:outline-none focus:border-global-clr resize-none' />
          <button type='submit'
            className='cursor-pointer w-full py-3 text-light-text dark:text-dark-text bg-gradient-to-r from-global-clr to-[#ff499e] font-semibold rounded-md hover:shadow-[0_0_10px_rgba(15,187,255,0.4)] transition-all'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact