"use client"
import React, { useState } from "react";
import { FaBars, FaFacebookF, FaTimes } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button"



const Header = () => {
  const [isMenuOpen , setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="w-fixed-[1280px] h-Hug-[54px] pl-[62px] pr-[64px] top-[100px] left-[100px] bg-[#F7F7F7] hidden lg:block">
        <div className="w-[1154px] h-[54px] gap-[32px] pt-[12px] pb-[12px] flex">
          <div className="flex w-fixed-[386px] h-Hug-[24px] gap-[16px]">
            <p className="h-[21px] w-[220px] font-[Roboto] font-normal text-sm leading-[21px] p-1 text-[#000000]  border-r-2 border-[black]">
              Phone Number: 956 742 455 678
            </p>
            <p className="h-[21px] font-[Roboto] font-normal text-sm leading-[21px] p-1 text-[#000000]">
              Email:info@ddsgnr.com
            </p>
          </div>
          <div className="gap-[16px] flex justify-end  w-[736px] h-[24px] ml-[686px] right header-right">
            <div className="flex  justify-between w-[24px] h-[24px] gap-[12px] items-center">
              <div className="flex justify-between right ml-[280px] gap-3 font-medium  text-[16px] mr-2">
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="lg:w-fixed-[1280px] bg-[#F7F7F7] h-[72px]  max-w-full h-auto lg:pl-[64px] pr-[64px] mt-2 border-b-[1px] border-[#676767] ">
        <div className="lg:w-fill-[1152px] h-hug-[44px] max-w-full flex space-between ">
          <div className="flex w-Hug-[130.6px] h-Hug-[30.38px] gap-[8.20px]  items-center mt-2 p-2">
            <Image src={logo} alt="logo" className="lg:w-[32.58px] lg:h-[30.30px] w-[32px] h-[30px]" />
            <span className="font-bold text-[25.07px] leading-[30.34px] font-[Inter]">
              Ddsgnr
            </span>
          </div>
      
          <div className="w-Hug-[687px] h-Hug-[44px] bg-[#FFFFFF]  hidden lg:flex justify-betwwen  gap-[76px] items-center ml-[86px] mt-3">
          <a href="#" className="w-Hug-[64px] h-Hug-[44px] gap-[16px] p-[10px] text-[16px] font-[Roboto] font-[400] leading-normal  hover:bg-[#D7D7D7] border-b-2 border-[black]">Home</a>
          <a href="#" className="w-Hug-[79px] h-Hug-[44px] gap-[10px] p-[10px] text-[16px] font-[Roboto] hover:bg-[#D7D7D7] font-[400] leading-normal">Courses</a>
          <a href="#"className="w-Hug-[81px] h-Hug-[44px] gap-[10px] p-[10px] text-[16px] font-[Roboto] hover:bg-[#D7D7D7]  font-[400] leading-normal"
          >Services</a>
          <a href="#"className="w-[113px] h-Hug-[44px] gap-[10px] p-[10px] text-[16px] font-[Roboto] font-[400] leading-normal hover:bg-[#D7D7D7]"
          >Achievement</a>
          <a href="#"className="w-Hug-[84px] h-Hug-[44px] gap-[10px] p-[10px] text-[16px] font-[Roboto] font-[400] leading-normal hover:bg-[#D7D7D7]"
          >Abouts Us</a>
          <a href="#"className="w-Hug-[84px] h-Hug-[44px] gap-[10px] p-[10px] text-[16px] font-[Roboto] font-[400] leading-normal hover:bg-[#D7D7D7]"
          >Testimonial</a>
          
          <div className="w-Hug-[191px] h-Hug-[40px]  flex gap-[20px]">
          <button className="border border-1 rounded-md h-[44px] w-[84px] text-sm font-[Roboto]">Login</button>
          <button className="border border-1 rounded-md h-[44px] w-[84px] text-sm text-[white] bg-[black]">Sign Up</button>
          </div>
          </div>
          <div className="lg:hidden pl-[75px]">
            <button className="w-full h-full ml-[200px]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes size={24} /> :<FaBars size={24}/>}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="lg:hidden bg-[#F7F7F7] flex flex-col items-center gap-4 py-4">
                    <a href="#" className="text-sm ">Home</a>
                    <a href="#" className="text-sm">Courses</a>
                    <a href="#" className="text-sm">Services</a>
                    <a href="#" className="text-sm">Achievement</a>
                    <a href="#" className="text-sm">About Us</a>
                    <a href="#" className="text-sm">Testimonial</a>
                    <div className="flex gap-4">
                    <Button className="border rounded-md px-4 py-2 text-sm">Login</Button>
                    <Button className="bg-black text-white rounded-md px-4 py-2 text-sm">Sign Up</Button>
</div>
</div>
      )}
    </div>
  );
};

export default Header;
