import Image from "next/image";
import React from "react";
import pic from "../../../../public/pic.png";
import logopic from "../../../../public/logopic.png";
import secondlogo from "../../../../public/secondlogo.png";
import thirdlogo from "../../../../public/thirdlogo.png";
import fourthlogo from "../../../../public/fourthlogo.png";
import fivelogo from "../../../../public/fivelogo.png";
import sixlogo from "../../../../public/sixlogo.png";
import { Button } from "@/components/ui/button"
const Hero = () => {
  return (
    <div>
      <div className="lg:w-fixed-[1280px] h-fixed-[800px] max-w-auto   mx-auto bg-[#FFFFFF] flex flex-col lg:flex-row items-center">
        <div className="w-Fill-[640px] h-Hug-[300px] lg:pr-[60px] lg:pl-[80px] gap-[24px] flex flex-col">
          <div className="lg:w-Fill-[500px] lg:h-Hug-[212px]  gap-[24px] mt-8">
            <h1 className="lg:w-[500px] lg:h-[134px] w-[380px] h-[96px] lg:text-center font-[700] lg:text-[56px] text-[40px] font-[Roboto] lg:p-2 ">
              Learn new skills online with ease
            </h1>
            <p className="lg:w-[500px] lg:h-[54px] w-[380px] h-[54px] font-[400] text-[18px] lg:mt-[56px] mt-8 lg:m-2 lg:p-2 lg:ml-[35px]">
              Discover a wide range of courses covering a variety of subjects,
              taught by expert instructors.
            </p>
          </div>
          <div className="lg:w-Hug-[358px] lg:h-Hug-[64px] w-Hug-[358px] h-Hug-[64px]  lg:pt-[16px]  flex gap-[16px] lg:ml-[35px] lg:m-2 lg:p-2">
        
            <Button className="border border-2 rounded-md bg-[black] text-[16px] font-[Roboto] font-[400] text-[white] w-Hug-[178px] h-[48px] lg:pt-[12px] lg:pr-[24px] lg:pb-[12px] lg:pl-[24px] flex gap-[8px]">Start learning now </Button>

    
            <Button className="lg:w-Hug-[164px]  max-w-full h-[48px]   bg-[#FFFFFF] text-[#000000] border border-2 rounded-md font-[400] font-[Roboto] text-[16px] pt-[12px] pr-[24px] pb-[12px] pl-[24px]">             Explore Courses
            </Button>

          </div>
      </div>
        <div className=" flex-1 mt-8 md:mt-0">
          <Image
            src={pic}
            alt="image"
            width={640}
            height={100}
            className="lg:w-fixed-[640px] lg:h-[700px] object-cover mx-auto shadow-lg px-5 lg:ml-[250px] right lg:flex justify-end "
          />
        
        </div>
      </div>
      <div>
        <div className="bg-[#F7F7F7] lg:w-fixed-[1280px] lg:h-Hug-[228px] top-[1038px] left-[100px] pt-[80px] pr-[64px]  lg:pb-[80px] gap-[64px] flex flex-col lg:flex-row ">
          <h5 className="text-[24px] font-[Roboto] font-[700] text-[#000000] w-[320px] h-[68px] flex leading-[33.6px] mx-auto ">
            Trusted by 2000+ companies worldwide.
          </h5>
          <div className=" lg:w-fixed-[880px] lg:h-Hug-[56px] lg:pt-[8.74px] pb-[8.74px] flex  lg:flex-row justify-between gap-[26px] lg:right  m-2 lg:ml-[194px] flex flex-col mx-auto lg:mx-0">
            <Image
              src={logopic}
              alt="logopic"
              height={38.52}
              width={123.6}
              className="w-[123.8px] h-[38.52px] items-center object-cover font-extrabold"
            />
            <Image
              src={secondlogo}
              alt="secondlogo"
              className="w-[123.8px] h-[38.52px] items-center lg:ml-5 object-cover"
            />
            <Image
              src={thirdlogo}
              alt="thirdlogo"
              className="w-[123.8px] h-[38.52px] items-center object-cover"
            />
            <Image
              src={fourthlogo}
              alt="fourthlogo"
              className="w-[123.8px] h-[38.53px] items-center lg:ml-5 object-cover hidden lg:block"
            />
            <Image
              src={fivelogo}
              alt="fivelogo"
              className="w-[123.8px] h-[38.52px] items-center ml-5 object-cover hidden lg:block"
            />
            <Image
              src={sixlogo}
              alt="sixlogo"
              className="w-[123.8px] h-[38.52px] items-center ml-5  object-cover hidden lg:block"
            />
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Hero;
