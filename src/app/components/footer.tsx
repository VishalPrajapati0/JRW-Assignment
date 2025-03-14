import Image from 'next/image';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
    return (
        <div>

            <footer className="bg-[#002B5B] lg:w-full w-[500px] text-white pt-10 text-center md:text-start">
                <div className='w-full lg:flex '>
                    <div className="container lg:flex grid grid-cols-2 sm:grid-cols-2 gap-20 mx-auto px-5 md:px-20  lg:grid-cols-5 ">

                        {/* Company Info - Centered on Small Screens */}
                        <div className="w-full flex flex-col items-center sm:items-start">
                            <Image width={100} height={50} src="/imge20.svg" alt="Company Logo" />
                            <p className="mt-4 text-gray-300 text-sm text-center sm:text-left">
                                We are a trusted logistics company providing reliable, fast, and cost-effective solutions.
                            </p>
                            <div className="flex space-x-4 mt-4 text-white">
                                <WhatsAppIcon fontSize="large" />
                                <InstagramIcon fontSize="large" />
                                <PhoneIcon fontSize="large" />
                            </div>
                        </div>




                        {/* Quick Links */}
                        <div>
                            <h3 className="text-[#88AA00] font-bold mb-3">Quick Links</h3>
                            <ul className="space-y-2 text-gray-300 flex flex-col text-sm text-center items-start">
                                {["Home", "Contact Us", "Request", "Calculations", "Services"].map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <KeyboardArrowRightIcon sx={{ color: "#88AA00" }} className="mr-1 text-center" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services 1 */}
                        <div>
                            <h3 className="text-[#88AA00] font-bold mb-3">Services</h3>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                {["Freight", "Brokerage", "Technology", "Logistics", "Supply"].map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <KeyboardArrowRightIcon sx={{ color: "#88AA00" }} className="mr-1" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services 2 */}
                        <div>
                            <h3 className="text-[#88AA00] font-bold mb-3">More Services</h3>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                {[" Transportation", "Warehousing", "Project-Logist", "Find on Maps"].map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <KeyboardArrowRightIcon sx={{ color: "#88AA00" }} className="mr-1" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div>
                            <h3 className="text-[#88AA00] font-bold mb-3">Contact Us</h3>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li className="flex items-center"><LocationOnIcon className="mr-2 text-[#88AA00]" /> Vasna Ahmedabad</li>
                                <li className="flex items-center"><PhoneIcon className="mr-2 text-[#88AA00]" /> +91 70438 86609</li>
                                <li className="flex items-center"><EmailIcon className="mr-2 text-[#88AA00]" /> jsklogisticsamd@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-10 text-center bg-[#88AA00] py-3 text-[#002B5B] font-semibold text-sm">
                    JSK Logistics © 2025 | All Rights Reserved | Developed by <span className="font-bold">Jay Rai Web</span>
                </div>
            </footer>
        </div>
    )
}