import video1 from "../assets/video1.mp4";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-6 lg:mt-10 px-6 lg:px-20" id="Header">
      {/* Left Column - Text Content */}
      <motion.div 
      initial={{opacity:0, y:100}}
      transition={{duration:2.0}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      
      
      className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-tight tracking-wide">
          Your Future
          <span className="bg-gradient-to-r from-[#FFB200] to-orange-700 font-bold text-transparent bg-clip-text">
            {" "}Investment
          </span>
        </h1>
        <p className="mt-6 text-lg text-neutral-500 max-w-4xl">
          Maximize Your Crypto Returns with Secure Investments. Join us today and unlock the potential of crypto with
          expertly crafted investment opportunities designed for growth and security.
        </p>
        <div className="flex justify-center lg:justify-start my-10">
          <a
            href="#InvestmentPlans"
            className="bg-gradient-to-r from-[#FFB200] to-orange-700 py-3 px-4 mx-3 rounded-md hover:bg-none hover:bg-orange-700 transition-all duration-400"
          >
            Investment Plans
          </a>
          <a href="#" className="py-3 px-4 rounded-md border hover:border-orange-900">
            Explore more
          </a>
        </div>
      </motion.div>

      {/* Right Column - Video */}
      <div className="w-full ml-10 flex justify-center lg:justify-end">
        <video autoPlay loop muted className="rounded-lg w-full lg:w-full border border-[#FFB200] shadow-orange-700">
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
