import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const About = () => {
  return (
    <div>
      <motion.section 
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-b from-[#1F2A36] to-[#2D3C50] py-16 px-8 text-center mt-20 rounded-2xl text-white" 
        id="about">
            
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-6 text-[#FFB200] flex items-center justify-center space-x-2">
            <span>About Investmint Crypto</span>
            <img className="w-12 h-12" src={logo} alt="Logo" />
          </h2>
          <p className="text-lg text-gray-300 mt-6">
            Investmint Crypto is designed to revolutionize digital asset investments. Our platform provides 
            secure, transparent, and innovative solutions to help investors make informed decisions in the 
            evolving cryptocurrency space.
          </p>
          <p className="mt-6 text-lg text-gray-400">
            Whether you are a beginner or an expert trader, we offer real-time insights, analytics, and tools 
            to maximize your investments efficiently. With cutting-edge features and user-friendly design, 
            Investmint is here to guide you in your investment journey.
          </p>
          <div className="mt-8">
            <a href="#workflow" className="bg-gradient-to-r from-[#FFB200] to-[#F59E0B] py-2 px-6 rounded-full text-white font-semibold hover:from-[#D97706] hover:to-[#F59E0B] transition duration-300">
              Join Us Now
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
