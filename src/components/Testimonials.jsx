import { testimonials } from "../constants"
import star_icon2 from "../assets/star_icon2.svg";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide" id="testimonials">
        <h2 className="text-xl cm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
            What people are saying</h2> 
        <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial, index)=>(
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                    <div className="bg-neutral rounded-md p-6 text-md border 
                    border-neutral-800 font-thin">
                        <p>{testimonial.text}</p>
                    <div className='flex gap-1 mt-4 text-yellow-500 mb-4'>
                    {Array.from({length:testimonial.rating},(item, index)=>(
                      <img key={index} src={star_icon2} className=" w-4 sm:w-5 md:w-6 lg:w-4" alt="" />
                    ))}
                  </div>
                        <div className="flex mt-8 items-start">
                            <img className="w-12 h-12 mr-6 rounded-full border-neutral-300"
                            src={testimonial.image} alt={testimonial.user}/>
                        <div>
                            <h6>{testimonial.user}</h6>
                            <span className="text-sm font-normal italic text-neutral-600">
                                {testimonial.company}</span>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Testimonials