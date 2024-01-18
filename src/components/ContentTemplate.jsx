import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa';
const ContentTemplate = ({ColorData, id}) => {
  return (
    <div className={`content mx-6 transition-all duration-1000`}>
      <header className={`flex justify-between items-center py-8 text-xl font-normal`}>
        <div className={`logo text-indigo-600 font-bold`}>Wasim Khan</div>
        <div className="navbarmeu hidden lg:flex  lg:gap-8">
          <Link
            className={` text-indigo-400 hover:text-indigo-400`}
            to=""
          >
            Home
          </Link>
          <Link
            className="hover:text-indigo-400"
            to=""
          >
            Project
          </Link>
          <Link
            className="hover:text-indigo-400"
            to=""
          >
            About
          </Link>
          <Link
            className="hover:text-indigo-400"
            to=""
          >
            Contact
          </Link>
        </div>
        <div className="bookacall">
          <button
            type="button"
            className="bg-indigo-500 py-2 px-5 rounded-md text-white"
          >
            Book a Call
          </button>
        </div>
      </header>
      <section className="hero flex flex-col justify-center items-center gap-5 my-20 lg:flex-row lg:justify-center lg:items-center">
        <div className="img w-full lg:w-1/3 flex justify-center items-center">
          <img
            src="https://www.waseemk.com/wp-content/uploads/2023/03/waseem.jpeg"
            alt="waseem khan"
            className="w-72"
          />
        </div>
        <div className="content flex flex-col justify-between w-full lg:w-2/3">
          <div className="info flex flex-col gap-6 text-center lg:text-left">
            <h2 className="text-1xl lg:text-3xl font-bold leading-normal text-indigo-600">
              You can count on me to work tirelessly until your project is completed to your
              satisfaction.
            </h2>
            <h1 className="text-4xl lg:text-5xl text-black font-extrabold">
              Hi, I'm Waseem Khan 👋
            </h1>
            <p className="text-1xl lg:text-2xl">
              I'm a Passionate Front-end Developer & WordPress Enthusiast
            </p>
          </div>
          <div className="action flex my-5 gap-5 justify-center items-center lg:justify-normal lg:items-start">
            <button
              className={`py-2 px-4 text-sm border-solid border-black border rounded-sm hover:bg-indigo-100 hover:border-none hover:scale-110 transition-all duration-500`}
            >
              Contact me!
            </button>
            <button
              className={`py-2 px-4 text-sm border-solid border-black border rounded-sm hover:bg-indigo-100 hover:border-none hover:scale-110 transition-all duration-500`}
            >
              Download Resume
            </button>
          </div>
          <div className="social flex text-3xl gap-6 justify-center items-center lg:justify-normal lg:items-start">
            <FaLinkedin
              className={`text-indigo-500 hover:text-indigo-600 hover:scale-110 transition-all duration-500`}
            />
            <FaTwitter
              className={`text-indigo-500 hover:text-indigo-600 hover:scale-110 transition-all duration-500`}
            />
            <FaGithub
              className={`text-indigo-500 hover:text-indigo-600 hover:scale-110 transition-all duration-500`}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentTemplate;
