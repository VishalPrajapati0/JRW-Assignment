import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import Card from '../../../components/card';
import Testimonials1 from '../../../components/testimonials';
import React from 'react';
import Imagess from '../../../components/imagess';
import Service from '../../../components/service';
import Image from 'next/image';

export default function Dashboard() {
    const btns = [
        { id: 1, percentage: "98%", label: "Consistency", icon: "/img15.svg" },
        { id: 2, percentage: "95%", label: "Accuracy", icon: "/img15.svg" },
        { id: 3, percentage: "97%", label: "Efficiency", icon: "/img15.svg" },
        { id: 4, percentage: "96%", label: "Reliability", icon: "/img15.svg" }
    ];

    return (
        <div className="w-full h-screen flex flex-col bg-white font-serif">
            <Navbar />

            <div className="relative text-white py-0 lg:py-28 h-full w-full bg-cover lg:bg-cover sm:bg-contain bg-center flex items-center lg:px-10 px-0"
                style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img2.svg')" }}>
                <div className="wrapper w-[68%] ml-[43px] mt-[60px] md:w-[75%] flex flex-col gap-y-6">
                    <h1 className="text-[26px] lg:text-[60px] sm:text-[26px] font-semibold leading-[1.1] w-[92%]">
                        Driving Your Success Forward, One Mile at a Time
                    </h1>
                    <p className="w-[87%] largeMonitor:w-[65%] averageLaptop:w-[80%] smallLaptop:w-[90%]">
                        At JSK, we are committed to driving your business forward, one mile at a time. With our reliable and efficient logistics services, we ensure your goods are delivered on time, every time.
                    </p>
                    <div className="flex items-center w-full gap-2 lg:gap-1 mt-6">
                        <div className='flex gap-2 w-[100%] lg:w-[300px] items-center'>
                            <button className="bg-[#88AA00] cursor-pointer text-white px-7 py-2.5 rounded-full text-base font-medium transition hover:bg-[#7A9900]">
                                More About
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#002B5B] text-white transition-transform hover:bg-[#001F3F] hover:rotate-45">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <section className='w-full'><Service /></section>
            <section className='w-full'><Imagess /></section>
            <section className="w-full flex flex-col md:flex-row items-center pt-10 px-5 md:px-20">
                {/* Content Section */}
                <div className="w-full md:w-1/2">
                    <p className="text-[#7BA003] font-bold text-lg">Why Choose Us</p>
                    <h1 className="text-3xl  font-semibold text-[#093254]">Modern, Safe & Trusted Logistic Company</h1>
                    <p className="text-gray-700">
                        We provide cutting-edge logistics solutions designed for speed, security, and reliability. With advanced technology, real-time tracking, and a dedicated team, we ensure your shipments reach their destination safely and on time. Choose us for seamless, cost-effective logistics solutions.
                    </p>

                    <ul className="mt-4 space-y-4">
                        <li className="flex items-center">
                            <Image src="/img5.svg" alt="Fast Delivery Icon" height={20} width={20} />
                            <span className="text-xl capitalize font-semibold ml-2 text-[#093254]">Super Fast Delivery</span>
                        </li>
                        <p className="text-gray-700">
                            We prioritize speed without compromising safety. Our efficient logistics network ensures your shipments are delivered on time.
                        </p>

                        <li className="flex items-center">
                            <Image src="/img5.svg" alt="Money-Back Guarantee Icon" height={20} width={20} />
                            <span className="text-xl capitalize font-semibold ml-2 text-[#093254]">Money-Back Guarantee</span>
                        </li>
                        <p className="text-gray-700">
                            Your satisfaction is our top priority. If we fail to meet our promised delivery standards, we offer a hassle-free money-back guarantee.
                        </p>
                    </ul>
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
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 w-full flex justify-center">
                    <Image src="/img5.webp" width={580} height={600} alt="Logistics Services" />
                </div>
            </section>

            <section><Card /></section>
            <div className='bg-[#F5F5F5] w-full font-serif pt-32 '>
                <div className='w-full text-center flex flex-col gap-3'>
                    <p className='text-[#7BA003]'>what we do</p>
                    <h2 className='font-semibold text-4xl text-[#002B5B]'>Delivering Solutions with <br />Precision and Reliability</h2>
                    <p className='text-gray-500'>We provide comprehensive logistics and transportation solutions, ensuring safe, fast,and  <br /> efficient cargo movement worldwide. From freight forwarding and warehousing to supply <br /> chain management, we handle every aspect of logistics with precision and reliability.</p>
                </div>

                <div className="w-full overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 px-20">
                    {btns.map((btn) => (
                        <div key={btn.id} className="flex items-center bg-[#7BA003] text-white px-5 py-3 w-[250px]">
                            <div className="bg-white p-3">
                                <Image width={40} height={40} src={btn.icon} alt={btn.label} />
                            </div>
                            <div className="ml-4">
                                <h1 className="text-2xl font-bold">{btn.percentage}</h1>
                                <p className="text-lg">{btn.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <section><Testimonials1 /></section>
            <section className="flex flex-col lg:flex-row items-center justify-between gap-2 pt-10 px-8 lg:px-20 py-12">
                <div className="max-w-2xl">
                    <p className="text-[#7BA003] font-medium text-lg">Affordable Price, Certified Forwarders</p>
                    <h2 className="text-4xl lg:text-4xl font-semibold text-[#002B5B] leading-tight mt-2">
                        Managing Logistics For World’s Best Companies
                    </h2>
                </div>
            </section>

            <section className="w-full px-5 md:px-20 flex flex-wrap justify-center gap-2">
                <Image width={300} height={1000} src="/calp.webp" alt="Calp" className="object-cover" />
                <Image width={450} height={1000} src="/motars.webp" alt="Motars" className="object-cover" />
                <Image width={300} height={1000} src="/Arth.svg" alt="Arth" className="object-cover" />
            </section>
            <br />
            <Footer />
        </div>
    );
}