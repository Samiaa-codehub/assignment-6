import Image from "next/image";
import React from "react";
import dicsecond from "../../../../public/dicsecond.png";
import dicfirstrow from "../../../../public/dicfirstrow.png";
import dicfirst from "../../../../public/dicfirst.png";
import dicsecondrow from "../../../../public/dicsecondrow.png";
import dicthirdrow from "../../../../public/dicthirdrow.png";
import dicthirdrows from "../../../../public/dicthirdrows.png";
import dicfirstrows from "../../../../public/dicfirstrows.png"
import dicsecondrows from "../../../../public/dicsecondrows.png";
import dicthirdrowes from "../../../../public/dicthirdrowes.png";
const Courses = () => {
  return(
    <div>
    
      <div className="lg:w-Fixed-[1280px] lg:h-Hug-[1049px] w-fixed-[428px] h-Hug-[862px] lg:top-[1266px] lg:left-[100px] lg:pt-[112px] lg:pr-[64px] lg:pb-[112px] lg:pl-[64px] lg:gap-[80px]  pt-[48px] pb-[48px] pl-[24px] pr-[24px] gap-[48px] bg-[#FFFFFF]">
        <div className="lg:w-Hug-[768px] lg:h-Hug-[109px] lg:gap-[357px] items-center w-Hug-[385px] h-Hug-[162px] gap-[24px]">
          <h2 className="text-[#000000] font-[Roboto] font-[700] lg:text-[48px] lg:leading-[57.6px] lg:text-center lg:h-[58px] p-2 lg:w-[786px]  lg:ml-[189px] text-center h-[84px] w-[385px] text-[32px] leading-[41.6px]">
            Explore Courses By Category
          </h2>
          <p className="font-[Roboto] font-[400] text-[18px] mx-auto py-6 items-start leading-[27px] text-[#000000] mt-2  h-[54px] w-[385px] lg:h-[27px] lg:ml-[245px] lg:p-2 lg:w-[786px] text-center">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
        </div>
      </div>
      <div className="lg:w-fill-[1280px] h-Hug-[636px]  max-w-full gap-64px flex lg:flex-row flex-col  gap-[50px] justify-between  px-4 py-5 mx-2 ">
        <div className="bg-[#F7F7F7] lg:w-fill-[410.67px] w-fixed-[380px] h-Hug-[132px] lg:h-Hug-[132px] lg:p-[16px] gap-[32px] border rounded-md flex shadow-lg">
          <div className="w-[100px] h-[100px] p-[34px] border rounded-md gap-[10px] bg-[#FFFFFF]">
            <Image
            src={dicfirst}
            alt="pic"
            className="w-Hug-[32px] h-Hug-[32px] text-[#000000]"
            />
          </div>
          <div className="w-[246.67px] h-[57px]  lg:gap-[24px] w-[216px] h-[57px] gap-[16px]">
            <h2 className=" w-[246.67px] h-[30px] font-[Roboto] font-[600] text-[20px] leading-[30px] text-[#000000] p-4 lg:m-1">
              Design & Development
            </h2>
            <p className=" w-[246.67px] h-[27px] font-[Roboto] font-[400] text-[18px] leading-[27px] mt-2 text-[#000000] p-1 ml-5">
              50+ Courses Available
            </p>
          </div>
        </div>

        <div className="bg-[#F7F7F7] w-fill-[410.67px] h-Hug-[132px] lg:p-[16px] gap-[32px] border rounded-md flex shadow-lg">
          <div className="w-[100px] h-[100px] p-[34px] border rounded-md gap-[10px] bg-[#FFFFFF]">
            <Image
            src={dicfirstrow}
            alt="pic"
            className="w-Hug-[32px] h-Hug-[32px] text-[#000000]"
            />
          </div>
          <div className="w-[246.67px] h-[57px] gap-[24px]">
            <h2 className="w-[246.67px] h-[30px] font-[Roboto] font-[600] text-[20px] leading-[30px] text-[#000000] p-4 m-1">
              Marketing
            </h2>
            <p className="w-[246.67px] h-[27px] font-[Roboto] font-[400] text-[18px] leading-[27px] text-[#000000] p-1 ml-5">
              50+ Courses Available
            </p>
          </div>
        </div>
        <div className="bg-[#F7F7F7] w-fill-[410.67px] h-Hug-[132px] lg:p-[16px] gap-[32px] border rounded-md flex shadow-lg">
          <div className="w-[100px] h-[100px] p-[34px] border rounded-md gap-[10px] bg-[#FFFFFF]">
            <Image
            src={dicfirstrows}
            alt=""
            className="w-Hug-[32px] h-Hug-[32px] text-[#000000]"/>
          </div>
          <div className="w-[246.67px] h-[57px] gap-[24px]">
            <h2 className="w-[246.67px] h-[30px] font-[Roboto] font-[600] text-[20px] leading-[30px] text-[#000000] p-4 m-1">
              Development
            </h2>
            <p className="w-[246.67px] 
            h-[27px] font-[Roboto] font-[400] text-[18px] leading-[27px] text-[#000000] p-1 ml-5">
              50+ Courses Available
            </p>
          </div>
        </div>
      </div>

      <div className="w-fill-[1280px] h-Hug-[636px] gap-64px lg:flex flex-row gap-[50px] justify-between mt-[46px] hidden lg:block">
        <div className="bg-[#F7F7F7] w-fill-[410.67px] h-Hug-[132px] p-[16px] gap-[32px] border rounded-md flex shadow-lg">
          <div className="w-[100px] h-[100px] p-[34px] border rounded-md gap-[10px] bg-[#FFFFFF]">
            <Image 
            src={dicsecond} 
            alt="pic" 
            className="w-Hug-[32px] h-Hug-[32px] text-[#000000]"/>
          </div>
          <div className="w-[246.67px] h-[57px] gap-[24px]">
            <h2 className="w-[246.67px] h-[30px] font-[Roboto] font-[600] text-[20px] leading-[30px] text-[#000000] p-4 m-1">
              Communication
            </h2>
            <p className="w-[246.67px] h-[27px] font-[Roboto] font-[400] text-[18px] leading-[27px] text-[#000000] p-1 ml-5">
              50+ Courses Available
            </p>
          </div>
        </div>
        <div className="bg-[#F7F7F7] w-fill-[410.67px] h-Hug-[132px] p-[16px] gap-[32px] border rounded-md flex shadow-lg">
          <div className="w-[100px] h-[100px] p-[34px] border rounded-md gap-[10px] bg-[#FFFFFF]">
            <Image
            src={dicsecondrow}
            alt="pic"          
              className="w-Hug-[32px] h-Hug-[32px] text-[#000000]"/>


            
          </div>
          <div className="w-[246.67px] h-[57px] gap-[24px]">
            <h2 className="w-[246.67px] h-[30px] font-[Roboto] font-[600] text-[20px] leading-[30px] text-[#000000] p-4 m-1">
              Digital Marketing
            </h2>
            <p className="w-[246.67px] h-[27px] font-[Roboto] font-[400] text-[18px] leading-[27px] text-[#000000] p-1 ml-5">
              {" "}
              50+ Courses Available
            </p>
          </div>
        </div>
        <div className="bg-[#F7F7F7] w-fill-[410.67px] h-Hug-[132px] p-[16px] gap-[32px] border rounded-md flex shadow-lg">
          <div className="w-[100px] h-[100px] p-[34px] border rounded-md gap-[10px] bg-[#FFFFFF]">
            <Image
            src={dicsecondrows}
            alt="pic"
            className="w-Hug-[32px] h-Hug-[32px] text-[#000000]"/>

          </div>
          <div className="w-[246.67px] h-[57px] gap-[24px]">
            <h2 className="w-[246.67px] h-[30px] font-[Roboto] font-[600] text-[20px] leading-[30px] text-[#000000] p-4 m-1">
              Self Development
            </h2>
            <p className="w-[246.67px] h-[27px] font-[Roboto] font-[400] text-[18px] leading-[27px] text-[#000000] p-1 ml-5">
              50+ Courses Available
            </p>
          </div>
        </div>
      </div>
      <div className="w-fill-[1280px] h-Hug-[636px] gap-64px lg:flex flex-row gap-[50px] justify-between mt-[46px] hidden lg:block">
        <div className="bg-[#F7F7F7] w-fill-[410.67px] h-Hug-[132px] p-[16px] gap-[32px] border rounded-md flex shadow-lg">
          <div className="w-[100px] h-[100px] p-[34px] border rounded-md gap-[10px] bg-[#FFFFFF]">
            <Image
            src={dicthirdrow}
            alt="pic"
            className="w-Hug-[32px] h-Hug-[32px] text-[#000000]"/>

          </div>
          <div className="w-[246.67px] h-[57px] gap-[24px]">
            <h2 className="w-[246.67px] h-[30px] font-[Roboto] font-[600] text-[20px] leading-[30px] text-[#000000] p-4 m-1">
              Business
            </h2>
            <p className="w-[246.67px] h-[27px] font-[Roboto] font-[400] text-[18px] leading-[27px] text-[#000000] p-1 ml-5">
              50+ Courses Available
            </p>
          </div>
        </div>
        <div className="bg-[#F7F7F7] w-fill-[410.67px] h-Hug-[132px] p-[16px] gap-[32px] border rounded-md flex shadow-lg">
          <div className="w-[100px] h-[100px] p-[34px] border rounded-md gap-[10px] bg-[#FFFFFF]">
            <Image
            src={dicthirdrows}
            alt="pic"
            className="w-Hug-[32px] h-Hug-[32px] text-[#000000]"/>

          </div>
          <div className="w-[246.67px] h-[57px] gap-[24px]">
            <h2 className="w-[246.67px] h-[30px] font-[Roboto] font-[600] text-[20px] leading-[30px] text-[#000000] p-4 m-1">
              Finance
            </h2>
            <p className="w-[246.67px] h-[27px] font-[Roboto] font-[400] text-[18px] leading-[27px] text-[#000000] p-1 ml-5">
              50+ Courses Available
            </p>
          </div>
        </div>
        <div className="bg-[#F7F7F7] lg:w-fill-[410.67px] lg:h-Hug-[132px] p-[16px] gap-[32px] border rounded-md flex shadow-lg">
          <div className="w-[100px] h-[100px] p-[34px] border rounded-md gap-[10px] bg-[#FFFFFF]">
            <Image
            src={dicthirdrowes}
            alt=""
            className="w-Hug-[32px] h-Hug-[32px] text-[#000000]"/>
             

          </div>
          <div className="w-[246.67px] h-[57px] gap-[24px]">
            <h2 className="w-[246.67px] h-[30px] font-[Roboto] font-[600] text-[20px] leading-[30px] text-[#000000] p-4 m-1">
              Consulting
            </h2>
            <p className="w-[246.67px] h-[27px] font-[Roboto] font-[400] text-[18px] leading-[27px] text-[#000000] p-1 ml-5">
              50+ Courses Available
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-[152px] lg:h-[40px] lg:pb-[8px] lg:pt-[8px] lg:pl-[16px] lg:pr-[16px] w-[155px] h-[48px] pt-[12px] pb-[12px] pr-[24px] pl-[24px] gap-[8px] border border-1 rounded-md border-[#000000]  lg:mt-[80px] mt-[35px] lg:ml-[690px] items-center ml-[130px] px-4 py-2">
        <button className="w-[120px] h-[24px] font-[Roboto] font-[400] lg:text-[16px] text-[14px]  text-center leading-[24px] text-[#000000] items-center ">
          View All Courses
        </button>
    </div>
    </div>
    
    
  );
};

export default Courses