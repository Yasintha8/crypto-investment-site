import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
     <motion.section 
     initial={{opacity:0, y:200}}
     transition={{duration:1.5}}
     whileInView={{opacity:1, y:0}}
     viewport={{once:true}}
     
     
     className="bg-gradient-to-b from-gray-900 to-black py-16 px-8 text-center mt-20 rounded-2xl  text-white" id="about">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4 text-orange-400">About Investmint Crypto</h2>
        <p className="text-lg text-gray-300">
          Investmint Crypto is designed to revolutionize digital asset investments. Our platform provides 
          secure, transparent, and innovative solutions to help investors make informed decisions in the 
          evolving cryptocurrency space.
        </p>
        <p className="mt-4 text-lg text-gray-400">
          Whether you are a beginner or an expert trader, we offer real-time insights, analytics, and tools 
          to maximize your investments efficiently.
        </p>
      </div>
    </motion.section>
    </div>
  )
}

export default About