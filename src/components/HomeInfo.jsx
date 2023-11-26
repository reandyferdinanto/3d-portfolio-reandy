import React from 'react'
import { Link } from "react-router-dom";

// import { ReactComponent as ArrowIcon } from "../../icons/arrow.svg";


    const HomeInfo = ({ currentStage }) => {
        if (currentStage === 1)
          return (
            <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
              Hello, I'm
              <span className='font-semibold mx-2 text-white'>Reandy Ferdinanto</span>
              👋
              <br />
              a Web Developer based in Bekasi, Indonesia.
            </h1>
          );
      
        if (currentStage === 2) {
          return (
            <div className='info-box'>
              <p className='font-medium sm:text-xl text-center'>
                Junior Web Developer <br /> with a proficiency in various technologies and a passion for delivering seamless user experiences.
              </p>
      
              <Link to='/about' className='neo-brutalism-white neo-btn'>
                Learn more
                {/* <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' /> */}
              </Link>
            </div>
          );
        }
      
        if (currentStage === 3) {
          return (
            <div className='info-box'>
              <p className='font-medium text-center sm:text-xl'>
                Some of portfolio that I've made  <br /> Curious about them?
              </p>
      
              <Link to='/projects' className='neo-brutalism-white neo-btn'>
                Visit my portfolio 
                {/* <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' /> */}
              </Link>
            </div>
          );
        }
      
        if (currentStage === 4) {
          return (
            <div className='info-box'>
            <p className='font-medium sm:text-xl text-center'>
              Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
            </p>
      
            <Link to='/contact' className='neo-brutalism-white neo-btn'>
              Let's talk
              {/* <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' /> */}
            </Link>
          </div>
          );
        }
      
        return null;
}

export default HomeInfo