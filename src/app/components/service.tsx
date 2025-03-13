// import Navbar from '../../../components/navbar';
import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ImageSec(){
    return(
        <div>

      <section className="boxes hidden lg:flex relative sm:w-[92%] md:w-[92%] w-[85%] justify-end mx-auto  -mt-20">
                <Box className="left-box flex  flex-col gap-y-8 bg-themeBlue px-20 bg-[#093254] pt-10">
                    <Box className="icon flex items-center justify-center w-12 h-12  rounded-full">
                        <Image width={100} height={100} src="https://res.cloudinary.com/dfzbpqzev/image/upload/v1740848289/home/zed34zriufklfkrcmzwi.svg" alt="" />
                    </Box>
                    <Typography variant="h6" className="text-2xl font-semibold capitalize text-center">
                        Warehousing <span className='block text-start'> Services</span>
                    </Typography>

                    <Box className="flex justify-start mt-4">
                        <button className="bg-white p-2 text-2xl text-[#093254] hover:bg-gray-200 transition">
                            <ArrowForwardIcon />
                        </button>
                    </Box>
                </Box>

                <Box className="left-box flex  flex-col gap-y-8 bg-themeBlue px-20 bg-[#7BA003] pt-10">
                    <Box className="icon flex items-center justify-center w-12 h-12  rounded-full">
                        <Image width={100} height={100} src="https://res.cloudinary.com/dfzbpqzev/image/upload/v1740848289/home/nvvq9zncdfobrpkseqau.svg" alt="" />
                    </Box>
                    <Typography variant="h6" className="text-2xl font-semibold capitalize text-center">
                        fast air freight <span className='block text-start'>Services </span>
                    </Typography>

                    <Box className="flex justify-start mt-4">
                        <button className="bg-white p-2 text-2xl text-[#093254] hover:bg-gray-200 transition">
                            <ArrowForwardIcon />
                        </button>
                    </Box>
                </Box>
            </section>

    
        </div>
    )
}