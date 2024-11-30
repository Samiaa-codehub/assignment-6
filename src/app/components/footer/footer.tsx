import React from "react";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className=" lg:w-fixed-[1280px] lg:h-Hug-[684px] top-[6824px] p-[80px] gap-[80px] bg-[#FFFFFF] ">
        <div className="lg:w-fill-[1120px] lg:h-Hug-[82px] w-Hug-[380px] h-Hug-[261px] gap-[24px] flex flex-col max-auto lg:mx-0  lg:justify-between">
          <div className="lg:w-fixed-[500px] lg:h-Hug-[51px] w-Hug-[287px] h-Hug-[91px] gap-[16px]">
            <p className="lg:w-[500px] lg:h-[27px] w-[287px] h-[27px]  lg:ml-[890px] font-[Roboto] font-[600] text-[20px] leading-[27px] text-[#000000] text-center">
              Subscribe to our newsletter
            </p>
            <p className="lg:w-[500px] lg:h-[24px] w-[287px] h-[27px]  mt-5  lg:ml-[890px] text-center font-[Roboto] text-[16px] leading-[24px] text-[#000000]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="lg:w-fixed-[400px] lg:h-Hug-[82px]  w-Hug-[380px] h-Hug-[146px]  gap-[16px]  items-center">
            <div className="flex  max-w-auto h-auto lg:ml-[950px] lg:mx-auto lg:flex-row flex-col lg:gap-5">
              <input
                className="lg:w-fill-[265px] lg:h-Hug-[48px] border border-1  rounded-[5px]  shadow-lg border-[#000000] items-center  p-[25px] gap-[8px]"
                placeholder="Enter your email"
              
              ></input>
              <div className="lg:w-Hug-[119px] lg:h-Hug-[48px] mt-5 w-fixed-[380px] h-Hug-[48px] border border-1 rounded-[5px]  border-[#000000] pt-[12px] pb-[12px] pr-[24px] pl-[24px] shadow-lg gap-[8px] text-[#00000] m-2 flex flex-col lg:flex-row">
                <button className="lg:w-[71px] lg:h-[24px] w-[71px] h-[24px] text-center font-[Roboto] font-[400] text-[16px] border-[#000000] leading-[24px] text-[#000000] mx-auto ">
                  Subscribe
                </button>
              </div>
            </div>
            <span>
              <p className="w-[400px] h-[18px] font-[Roboto] font-[400]  lg:ml-[950px] text-[12px] leading-[18px] mt-2">
                By subscribing you agree to with our Privacy Policy
              </p>
            </span>
          </div>
        </div>
        <div className="lg:w-fill-[1120px] lg:h-Hug-[225px] w-Hug-[172px] h-Hug-[811px]  gap-[32px] lg:gap-[40px]  mt-8 items-center  flex  lg:flex-row justify-between mx-auto">
          <div className=" lg:w-fill-[250px] lg:h-Hug-[40px] flex  flex-row flex-col justify-between ">
            <div className="lg:w-Hug-[130.6px] lg:h-fixed-[40px] w-fill-[172px] h-Hug-[40px] pt-[29px]  gap-[10.5px] text-center flex mt-5 ml-5">
              <Image
                src={logo}
                alt="logo"
                className="w-[32.58px] h-[30.38px]"
              />
              <p className="w-[90px] h-[30px] font-[Inter] font-[700] text-center text-[25.07px] leading-[30.34px] text-[#000000]">
                Ddsgnr
              </p>
            </div>
          
          <div className="w-fill-[250px] h-Hug-[225px]  flex lg:flex-row flex-col   justify-center lg:justify-between ml-[45px] lg:ml-[289px] gap-[16px] items-center ">
            <div className="max-auto ml-5">
              <p className="w-[250px] h-[24px] font-[600] font-[Roboto] text-[16px] leading-[24px]">
                Courses
              </p>
              <ul className="w-fill-[250px] h-Hug-[185px]">
                <li className="w-fill-[250px] h-Hug-[37px] pt-[8px] pb-[8px]">
                  <p className="w-[250px] h-[21px] font-[Roboto] font-[400] text-[14px] leading-[21px] text-[#000000]">
                    Business
                  </p>
                </li>

                <li className="w-fill-[250px] h-Hug-[37px] pt-[8px] pb-[8px]">
                  <p className="w-[250px] h-[21px] font-[Roboto] font-[400] text-[14px] leading-[21px] text-[#000000]">
                    Development
                  </p>
                </li>

                <li className="w-fill-[250px] h-Hug-[37px] pt-[8px] pb-[8px]">
                  <p className="w-[250px] h-[21px] font-[Roboto] font-[400] text-[14px] leading-[21px] text-[#000000]">
                    Technology
                  </p>
                </li>

                <li className="w-fill-[250px] h-Hug-[37px] pt-[8px] pb-[8px]">
                  <p className="w-[250px] h-[21px] font-[Roboto] font-[400] text-[14px] leading-[21px] text-[#000000]">
                    Design
                  </p>
                </li>
                <li className="w-fill-[250px] h-Hug-[37px] pt-[8px] pb-[8px]">
                  <p className="w-[250px] h-[21px] font-[Roboto] font-[400] text-[14px] leading-[21px] text-[#000000]">
                    Programming
                  </p>
                </li>
              </ul>
            </div>
            <div className="lg:ml-[56px] ml-5 mx-auto">
              <p className="w-[250px] h-[24px] font-[600] font-[Roboto] text-[16px] leading-[24px]">
                Resources
              </p>
              <ul className="w-fill-[250px] h-Hug-[185px]">
                <li className="w-fill-[250px] h-Hug-[37px] pt-[8px] pb-[8px]">
                  <p className="w-[250px] h-[21px] font-[Roboto] font-[400] text-[14px] leading-[21px] text-[#000000]">
                    Programming
                  </p>
                </li>
                <li className="w-fill-[250px] h-Hug-[37px] pt-[8px] pb-[8px]">
                  <p className="w-[250px] h-[21px] font-[Roboto] font-[400] text-[14px] leading-[21px] text-[#000000]">
                  Resume
                  </p>
                </li>
                <li className="w-fill-[250px] h-Hug-[37px] pt-[8px] pb-[8px]">
                  <p className="w-[250px] h-[21px] font-[Roboto] font-[400] text-[14px] leading-[21px] text-[#000000]">
                  Learning
                  </p>
                </li>
                <li className="w-fill-[250px] h-Hug-[37px] pt-[8px] pb-[8px]">
                  <p className="w-[250px] h-[21px] font-[Roboto] font-[400] text-[14px] leading-[21px] text-[#000000]">
                  Interview Preparation
                  </p>
                </li>
                <li className="w-fill-[250px] h-Hug-[37px] pt-[8px] pb-[8px]">
                  <p className="w-[250px] h-[21px] font-[Roboto] font-[400] text-[14px] leading-[21px] text-[#000000]">
                  Jobs
                  </p>
                </li>
              </ul>
            </div>
            <div className="lg:ml-[56px] mx-auto ml-5">
            <p className="w-[250px] h-[24px] font-[600] font-[Roboto] text-[16px] leading-[24px]">
            About Us
            </p>
            <ul className="w-fill-[250px] h-Hug-[185px]">
            <li className="w-fill-[250px] h-Hug-[37px] pt-[8px] pb-[8px]">
            <p className="w-[250px] h-[21px] font-[Roboto] font-[400] text-[14px] leading-[21px] text-[#000000]">
            Contact
            </p>
            </li>
            <li className="w-fill-[250px] h-Hug-[37px] pt-[8px] pb-[8px]">
            <p className="w-[250px] h-[21px] font-[Roboto] font-[400] text-[14px] leading-[21px] text-[#000000]">

            Help/Support
            </p>
            </li>
            <li className="w-fill-[250px] h-Hug-[37px] pt-[8px] pb-[8px]">
            <p className="w-[250px] h-[21px] font-[Roboto] font-[400] text-[14px] leading-[21px] text-[#000000]">
            FAQ
            </p>
            </li>
            <li className="w-fill-[250px] h-Hug-[37px] pt-[8px] pb-[8px]">
            <p className="w-[250px] h-[21px] font-[Roboto] font-[400] text-[14px] leading-[21px] text-[#000000]">
            Terms and Conditions
            </p>
            </li>
            <li className="w-fill-[250px] h-Hug-[37px] pt-[8px] pb-[8px]">
            <p className="w-[250px] h-[21px] font-[Roboto] font-[400] text-[14px] leading-[21px] text-[#000000]">
            Partners
            </p>
            </li>
            </ul>
            

            </div>
          </div>
        </div>
        
        </div>
        
      </div>
  <div className=" border border-u-1 border-[#D7D7D7]"></div>
  <div className="flex flex-col justify-center lg:flex-row  w-fill-[380px] h-Hug-[147px]  text-[14px] font-[Roboto]  gap-[32px] lg:gap-5 mt-5 items-center">
    <p className="">2023 Ddsgnr. All right reserved.</p>
    <span className="flex flex-row gap-5">
    <p className=" flex lg:w-fixed-[86px] lg:h-[21px] font-[Roboto] text-[14px] font-[400]  underline">Privacy Policy</p>
    <p className=" flex lg:w-fixed-[86px] lg:h-[21px] font-[Roboto] text-[14px] font-[400] underline">Terms of Service</p>
    <p className=" flex lg:w-fixed-[86px] lg:h-[21px] font-[Roboto] text-[14px] font-[400] underline ">Cookies Settings</p>
    </span>
      <div className="flex justify-end lg:ml-[880px]  mt-5 gap-2 items-center">
          <FaFacebookF/>
          <FaInstagram/>
          <FaTwitter/>
          <FaLinkedin/>
          
          </div>
      
  </div>

    </div>
  );
};

export default Footer;
