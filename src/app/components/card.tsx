import Image from "next/image";

export default function Card(){

    const services = [
        {
            title: "Ocean Freight",
            description: "Secure and economical sea freight solutions for bulk shipments.",
            backgroundImage: "/img6.svg",
            icon: "/img7.svg"
        },
        {
            title: "Air Freight",
            description: "Fast and reliable air freight services for urgent shipments.",
            backgroundImage: "/2.svg",
            icon: "/img7.svg"
        },
        {
            title: "Land Transport",
            description: "Efficient road transport solutions for domestic deliveries.",
            backgroundImage: "/3.svg",
            icon: "/img7.svg"
        },
        {
            title: "Ocean Freight",
            description: "Secure and economical sea freight solutions for bulk shipments.",
            backgroundImage: "/4.svg",
            icon: "/img7.svg"
        },
        {
            title: "Air Freight",
            description: "Fast and reliable air freight services for urgent shipments.",
            backgroundImage: "/5.svg",
            icon: "/img7.svg"
        },
        {
            title: "Air Freight",
            description: "Efficient road transport solutions for domestic deliveries.",
            backgroundImage: "/6.svg",
            icon: "/img7.svg"
        }
    ];

    return(
     <div className="w-full block">
                  {/* Title Section */}
                  <div className="w-full text-center">
                      <p className="text-[#7BA003] font-semibold">Services we offer</p>
                      <h2 className="text-[#093254] font-semibold text-4xl">
                          Specialist Logistics & <br /> Transportation Services
                      </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 pl-10 sm:pl-5 md:pl-10 lg:pl-20 w-full pt-20 gap-4">
                      {services.map((service, index) => (
                          <div key={index} className="relative w-[380px] group">
                              {/* Background Image */}
                              <Image
                                  src={service.backgroundImage}
                                  alt={service.title}
                                  width={330}
                                  height={250}
                                  className="shadow-lg"
                              />
                              <div className='pt-28'>
                                  {/* Overlay Card */}
                                  <div className="absolute bottom-0 cursor-pointer left-40 transform -translate-x-1/2 bg-white p-5 shadow-lg w-[290px] transition-all duration-300 group-hover:bg-[#7BA003] group-hover:text-white">
                                      <div className="flex items-center gap-12">
                                          <h3 className="text-[#093254] font-semibold text-[18px] ml-3 group-hover:text-white">{service.title}</h3>
                                          <div className="bg-[#7BA003] p-3 rounded-full flex items-center justify-center group-hover:bg-white">
                                              <Image src={service.icon} alt="Service Icon" width={30} height={30} className="group-hover:invert" />
                                          </div>
                                      </div>
                                      <p className="text-gray-600 mt-2 w-[200px] group-hover:text-white">
                                          {service.description}
                                      </p>
                                      <div className='pt-2'>
                                          <hr className='text-gray-300 group-hover:border-white' />
                                      </div>
                                      <a href="#" className="text-[#093254] font-semibold mt-3 inline-block border-b-2 border-[#7BA003] group-hover:text-white group-hover:border-white">
                                          Read More
                                      </a>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
  
  
              </div>
    )
}