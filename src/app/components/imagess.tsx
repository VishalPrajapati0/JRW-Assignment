import React from 'react';
import Image from 'next/image';


export default function ImageSec(){
    return(
        <div>

            {/* section-3 */}
            <section className="w-full flex flex-col md:flex-row items-center pt-10 px-5 md:px-20">
                {/* Left Side - Image */}
                <div className="md:w-1/2 w-full flex justify-center">
                    <Image src="/img-3.svg" width={580} height={600} alt="Logistics Image" />
                </div>

                {/* Right Side - Text Content */}
                <div className="md:w-1/2 w-full mt-1 lg:mt-[-50px] md:mt-0 text-gray-800">
                    <h2 className="text-[#7BA003] font-bold text-lg">
                        Affordable Price, Certified Forwarders
                    </h2>
                    <h1 className="text-3xl font-bold mt-2">
                        Reliable Logistic And Transport <br /> Solutions That Saves Your Time!
                    </h1>

                    <p className="text-gray-600 mt-4">
                        We understand that time is one of your most valuable assets in the logistics industry. That s why we specialize in providing reliable logistics and transport core business objectives.
                    </p>


                    <p className='text-gray-600 mt-4'>
                        the distance. With a focus on efficiency, cost-effectiveness, and seamless service, we work to simplify your supply.
                    </p>
                    <ul className="mt-4 space-y-3">
                        <li className="flex items-start">
                            <Image src={'/img4.svg'} alt='' height={20} width={20} />
                            <span className="ml-2 font-semibold">Ensuring quick and safe transportation for every</span>
                        </li>
                        <hr className='text-gray-300' />
                        <li className="flex items-start">
                            <Image src={'/img4.svg'} alt='' height={20} width={20} />
                            <span className="ml-2 font-semibold">Highly Professional Staff, Accurate Testing Process</span>
                        </li>
                        <hr className='text-gray-300' />
                        <li className="flex items-start">
                            <Image src={'/img4.svg'} alt='' height={20} width={20} />
                            <span className="ml-2 font-semibold">Unrivalled workmanship, Professional and Qualified</span>
                        </li>
                        <hr className='text-gray-300' />
                        <div className='flex gap-1 pt-10'>

                            <button className="bg-[#88AA00] cursor-pointer text-white px-4 py-2.5 rounded-full text-base font-medium transition">
                                More About Us
                            </button>

                            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#002B5B] text-white transition-transform hover:bg-[#001F3F] hover:rotate-45">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                                </svg>
                            </button>
                        </div>
                    </ul>
                </div>
            </section>
        </div>
    )
}