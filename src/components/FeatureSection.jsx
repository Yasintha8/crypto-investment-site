import { features } from "../constants"
import video2  from "../assets/video2.mp4"
import { motion } from "framer-motion";
const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]" id="features">
        <motion.div 
         initial={{opacity:0, x:200}}
         transition={{duration:1.5}}
         whileInView={{opacity:1, x:0}}
         viewport={{once:true}}
         
        className="text-center">
            <span className="bg-neutral-900 text-[#FFB200] rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                feature
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">Why{" "} 
                <span className="bg-gradient-to-r from-[#FFB200] to-orange-800 text-transparent bg-clip-text">Choose us</span>
            </h2>
        </motion.div>
        <motion.div 
         initial={{opacity:0, y:100}}
         transition={{duration:2.5}}
         whileInView={{opacity:1, y:0}}
         viewport={{once:true}}
        
        className="flex flex-wrap mt-10 lg:mt-20">
            {features.map((feature, index)=>(
                <div key={index} className="w-full sm:1/2 lg:w-1/3">
                    <div className="flex">
                        <div className="flex mx-6 h-10 w-10 p-2 bg-neutal-900 text-orange-700 justify-center items-center rounded-full">
                            {feature.icon}
                        </div>
                        <div>
                            <h5 className="mt-1 mb-6 text-xl">
                                {feature.text}
                            </h5>
                            <p className="text-md p-2 mb-20 text-neutral-500">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
        <video autoPlay loop muted className="rounded-lg w-full border border-[#FFB200] shadow-orange-700 mx-2 my-4">
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
    </div>
  )
}

export default FeatureSection