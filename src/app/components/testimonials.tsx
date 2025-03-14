
export default function Card(){

    const testimonials = [
        {
            name: "Michael Hoffmann",
            role: "Export Manager",
            feedback: "Exceptional handling of oversized industrial equipment shipments. Simplified our most complex process."
        },
        {
            name: "Sunita Reddy",
            role: "Retail Supervisor",
            feedback: "Eliminated stockouts across 32 retail locations. Significantly reduced warehouse costs."
        }
    ];



    const inputFields2 = [
        { id: "companyName", type: "text", placeholder: "Country" },
        { id: "country", type: "text", placeholder: "Country" },
        { id: "name", type: "text", placeholder: "State" },
        { id: "state", type: "text", placeholder: "State" },
        { id: "zipCode", type: "number", placeholder: "Zip-code" },
        { id: "department", type: "number", placeholder: "Zip-code" },
        { id: "city", type: "text", placeholder: "City" },
        { id: "phone", type: "number", placeholder: "Phone" },
    ];


    const inputFields = [
        { id: "companyName", type: "text", placeholder: "Company Name" },
        { id: "country", type: "text", placeholder: "Country" },
        { id: "name", type: "text", placeholder: "Name" },
        { id: "state", type: "text", placeholder: "State" },
        { id: "zipCode", type: "number", placeholder: "Zip-code" },
        { id: "department", type: "text", placeholder: "Department" },
        { id: "city", type: "text", placeholder: "City" },
        { id: "phone", type: "number", placeholder: "Phone" },
        { id: "email", type: "text", placeholder: "Email" },
        { id: "commodity", type: "text", placeholder: "Commodity" },
    ];


    return(
<div>


        <div
        className="relative text-white mt-14 py-12 h-full w-[500px] lg:w-full flex items-center px-20 bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: "linear-gradient(89.73deg, #093254 .23%, #093254 34.08%, rgba(9, 50, 84, 0.55) 99.77%), url('https://res.cloudinary.com/dfzbpqzev/image/upload/v1740938266/home/gvaalvqtr8daloknub9m.svg')"
        }}
        >

        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Left Section */}
            <div className="w-full lg:w-1/2">
                <h5 className="text-[#7BA003] text-lg font-semibold">Client s testimonials</h5>
                <h2 className="text-4xl font-semibold mt-3">
                    Look!! What Our Happy Clients Say
                </h2>
                <p className="mt-5 text-lg text-gray-200">
                    Customer satisfaction is our top priority. Hear from our valued clients who trust us for our reliability, efficiency, and top-notch logistics services. Their positive experiences reflect our commitment.
                </p>
            </div>

            {/* Right Section - Testimonials */}
            <div className="w-full lg:w-1/2 grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="border border-gray-300 bg-transparent p-6 rounded-lg text-center">
                        <h3 className="text-xl font-bold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-300">{testimonial.role}</p>
                        <p className="mt-3 text-gray-200">{testimonial.feedback}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>

    
    <div className='w-full pt-20 lg:px-12 px-[1px] md:px-[25px] '>
                <div className='px-12 lg:w-full w-[500px]'>
                    <p className='text-[#7BA003] font-semibold'>Request A Quote</p>
                    <div className="largeMonitor:w-[60%] leading-2.5 sm:w-[70%] lg:w-[85%]">
                        <h2 className="undefined text-4xl text-[#002B5B] font-sans leading-[1.2]  text-themeBlue">Booking your Logistic product transportation good <br /> Solution in the world</h2>
                    </div>

                </div>
                <div className="w-full pt-10 lg:px-12 px-2 lg:flex sm:grid-cols-2 grid    gap-5">
                    {/* First Section */}
                    <div className="w-[463px] lg:w-[500px]">
                        <input
                            type="text"
                            id="service"
                            placeholder="What would you like a quote for?"
                            className="border text-black outline-none border-gray-400 p-4 placeholder:text-gray-400 capitalize w-full"
                            name="service"
                        />
                        <div className="w-full grid grid-cols-2 gap-4 mt-4">
                            {inputFields.map((field) => (
                                <input
                                    key={field.id}
                                    id={field.id}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    className="border text-black outline-none border-gray-400 p-4 placeholder:text-gray-400 capitalize"
                                    name={field.id}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Second Section (Optional) */}
                    <div className="w-[463px] lg:w-[500px]">
                        <div className="w-full grid grid-cols-2 gap-4">
                            <h2 className="text-2xl bg-[#002B5B] text-white font-semibold capitalize p-3 text-center">origin</h2>
                            <h2 className="text-2xl bg-[#002B5B] text-white font-semibold capitalize p-3 text-center">Destination</h2>
                            {inputFields2.map((field) => (
                                <input
                                    key={field.id}
                                    id={field.id}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    className="border text-black outline-none border-gray-400 p-4 placeholder:text-gray-400 capitalize"
                                    name={field.id}
                                />
                            ))}

                            <div className='flex gap-0 pt-2'>

                                <button className="bg-[#7BA003] cursor-pointer text-white px-7 py-2.5 rounded-full text-base font-medium transition hover:bg-[#7A9900]">
                                    Request a Quote
                                </button>

                                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#002B5B] text-white transition-transform hover:bg-[#001F3F] hover:rotate-45">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                                    </svg>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}