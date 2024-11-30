import React from "react";
import firstdiv from "../../../../public/firstdiv.png";
import Image from "next/image";
import imaage from "../../../../public/imaage.png";
import placeholderimage from "../../../../public/placeholderimage.png"
import trading from "../../../../public/trading.png";
import paint from "../../../../public/paint.png";
import libaray from "../../../../public/libaray.png";
import website from "../../../../public/website.png";
import { Button } from "@/components/ui/button"

const Card = () => {
  return (
    <div>
      <div className=" lg:w-fixed-[1280px] lg:h-Hug-[1742px]  lg:left-[100px] lg:pt-[112px] lg:pr-[64px] lg:pb-[112px] lg:pl-[64px]  bg-[#FFFFFF]">
        <div className="lg:w-fixed-[786px] lg:h-Hug-[118px] gap-[16px]">
          <h1 className="font-[Roboto] font-[700] text-[56px] text-center leading-[67.2px] w-fixed-[786px] h-fill-[67px]">
            Courses
          </h1>
          <p className="text-center font-[Roboto] font-[400] text-[18px] leading-[27px] w-fixed-[786px] h-[27px]">
            Your Ultimate Guide to learning
          </p>
        </div>
        <div className=" lg:w-Hug-[336px] lg:h-Hug-[40px] flex   justify-center text-center mx-auto gap-[8px] mt-[38px] text-center">
          <Button variant={"link"} className="w-Hug-[87px] h-Hug-[40px]  gap-[8px]  hover:bg-[#D7D7D7] underline pt-[8px] pl-[16px] pr-[16px] pb-[8px] text-[16px] font-[400] font-[Roboto] ml-2 p-2">
            Popular
          </Button>
          <Button  variant={"link"} className="w-Hug-[87px] h-Hug-[40px] gap-[8px]  hover:bg-[#D7D7D7] pt-[8px] pl-[16px] pr-[16px] pb-[8px] text-[16px] font-[400] font-[Roboto] ml-2 p-2">
            Recommended
          </Button>
          <Button  variant={"link"} className="w-Hug-[87px] h-Hug-[40px] gap-[8px]  hover:bg-[#D7D7D7] pt-[8px] pl-[16px] pr-[16px] pb-[8px] text-[16px] font-[400] font-[Roboto] ml-2 p-2">
            Best Price
          </Button>
        </div>
        {/* div 1*/}
        <div className="lg:w-fill-[1152px] h-fill-[1324px] max-w-full gap-[64px] flex lg:flex-row flex-col  items-center justify-between ">
          <div className="flex ">
            <div className="w-[416px] h-Hug-[534px] bg-[#F7F7F7] mt-[45px]  border rounded-lg px-8  shadow-lg ">
              <Image 
                src={firstdiv}
                alt="pic"
                width={416}
                height={300}
                className=" w-fixed-[416px] h-[300] py-2"
              />
              <div className="lg:w-fill-[416px] lg:h-Hug-[210px] lg:pb-[24px] lg:pr-[16px]  py-2 lg:pl-[16px] gap-[24px]">
                <div className="w-fill-[382px] h-Hug-[24px] gap-[8px] flex">
                  <p className="w-[326px] h-[21px] font-[Roboto] font-[600] text-[14px] mt-3">
                    Design
                  </p>
                  <div className="lg:w-fixed-[48px] lg:h-Hug-[24px] flex gap-2 mt-2">
                    <Image
                      src={imaage}
                      alt="image"
                      className="w-[24px] h-[20px]  text-[#D9D9D9] flex gap-5 mt-[1px]"
                    />
                    <span className="font-[600] text-[16px] text-right w-[20px] h-[28px] flex gap-5  mb-5">
                      5.0
                    </span>
                  </div>
                </div>
                <div className="">
                  <h5 className=" w-[384px] h-[34px] font-[700] text-[24px] font-[Roboto] text-[#000000] mb-5 items-center">
                    Introduction to Python
                  </h5>
                  <p className="text-[16px] font-[400] font-[Roboto] lg:w-[382px] lg:h-[48px] items-center text-[#000000] leading-[24px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="lg:w-fixed-[382px] lg:h-Hug-[40px] flex gap-[10px] items-center mt-[30px]">
                    <button className="border border-1 rounded-md  border-[black] pt-[8px] pr-[20px] pb-[8px] pl-[20px] text-[#000000] flex gap-[5px]">
                    Enroll Now
                  </button>

                  <span className="font-[500] font-[Roboto] text-[16px] leading-[24px] w-[37px] h-[24px] text-[#000000] ml-2">
                    $400
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* div 2 */}

          <div className="flex ">
            <div className="lg:w-[416px] lg:h-Hug-[534px] bg-[#F7F7F7] mt-[45px] px-8  rounded-lg shadow-lg ">
              <Image
                src={placeholderimage}
                alt="pic"
                width={416}
                height={300}
                
                className=" w-fixed-[416px] h-[300] py-2"
              />
              <div className="lg:w-fill-[416px] lg:h-Hug-[210px] lg:pb-[24px] lg:pr-[16px] lg:pl-[16px] py-2 gap-[24px]">
                <div className="w-fill-[382px] h-Hug-[24px] gap-[8px] flex">
                  <p className="w-[326px] h-[21px] font-[Roboto] font-[600] text-[14px] mt-3">
                  Programmimg
                  </p>
                  <div className="w-fixed-[48px] h-Hug-[24px] flex gap-2 mt-2">
                    <Image
                      src={imaage}
                      alt="image"
                      className="w-[24px] h-[20px]  text-[#D9D9D9] flex gap-5 mt-[1px]"
                    />
                    <span className="font-[600] text-[16px] text-right w-[20px] h-[28px] flex gap-5  mb-5">
                      5.0
                    </span>
                  </div>
                </div>
                <div>
                  <h5 className="w-[384px] h-[34px] font-[700] text-[24px] font-[Roboto] text-[#000000] mb-5 items-center">
                  Introduction to Python
                  </h5>
                  <p className="text-[16px] font-[400] font-[Roboto] w-[382px] h-[48px] items-center text-[#000000] leading-[24px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="w-fixed-[382px] h-Hug-[40px] flex gap-[10px] items-center mt-[30px]">
                  <button className="border border-1 rounded-md  border-[#000000] pt-[8px] pr-[20px] pb-[8px] pl-[20px] text-[#000000] flex gap-[5px]">
                    Enroll Now
                  </button>
                  <span className="font-[500] font-[Roboto] text-[16px] leading-[24px] w-[37px] h-[24px] text-[#000000] ml-2">
                    $400
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* div3 */}

          <div className="flex ">
            <div className="w-[416px] h-Hug-[534px] bg-[#F7F7F7] mt-[45px]   px-8   rounded-lg shadow-lg">
              <Image
                src={trading}
                alt="pic"
                width={416}
                height={300}
                className=" w-fixed-[416px] h-[300] py-2"
              />
              <div className="lg:w-fill-[416px] lg:h-Hug-[210px]  py-2 lg:pb-[24px] lg:pr-[16px] lg:pl-[16px] gap-[24px]">
                <div className="w-fill-[382px] h-Hug-[24px] gap-[8px] flex">
                  <p className="w-[326px] h-[21px] font-[Roboto] font-[600] text-[14px] mt-3">
                  Business
                  </p>
                  <div className="w-fixed-[48px] h-Hug-[24px] flex gap-2 mt-2">
                    <Image
                      src={imaage}
                      alt="pic"
                      className="w-[24px] h-[20px]  text-[#D9D9D9] flex gap-5 mt-[1px]"
                    />
                    <span className="font-[600] text-[16px] text-right w-[20px] h-[28px] flex gap-5  mb-5">
                      5.0
                    </span>
                  </div>
                </div>
                <div>
                  <h5 className="w-[384px] h-[34px] font-[700] text-[24px] font-[Roboto] text-[#000000] mb-5 items-center">
                  Data Analysis for Beginners
                  </h5>
                  <p className="text-[16px] font-[400] font-[Roboto] w-[382px] h-[48px] items-center text-[#000000] leading-[24px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="w-fixed-[382px] h-Hug-[40px] flex gap-[10px] items-center mt-[30px]">
                  <button className="border border-1 rounded-md  border-[#000000] pt-[8px] pr-[20px] pb-[8px] pl-[20px] text-[#000000] flex gap-[5px]">
                    Enroll Now
                  </button>
                  <span className="font-[500] font-[Roboto] text-[16px] leading-[24px] w-[37px] h-[24px] text-[#000000] ml-2">
                    $400
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* row-2 */}
        <div className="w-fill-[1152px] h-fill-[1324px] gap-[64px] items-center justify-between mt-[20px] hidden lg:flex ">
          <div className="flex">
            <div className="w-[416px] h-Hug-[534px] bg-[#F7F7F7] mt-[45px] rounded-lg px-8 shadow-lg">
              <Image
                src={paint}
                alt="pic"
                width={416}
                height={300}
                className=" w-fixed-[416px] h-[300] py-2"
              />
              <div className="w-fill-[416px] h-Hug-[210px] pb-[24px] pr-[16px] pl-[16px] gap-[24px]">
                <div className="w-fill-[382px] h-Hug-[24px] gap-[8px] flex">
                  <p className="w-[326px] h-[21px] font-[Roboto] font-[600] text-[14px] mt-3">
                  Art
                  </p>
                  <div className="w-fixed-[48px] h-Hug-[24px] flex gap-2 mt-2">
                    <Image
                      src={imaage}
                      alt="pic"
                      className="w-[24px] h-[20px]  text-[#D9D9D9] flex gap-5 mt-[1px]"
                    />
                    <span className="font-[600] text-[16px] text-right w-[20px] h-[28px] flex gap-5  mb-5">
                      5.0
                    </span>
                  </div>
                </div>
                <div>
                  <h5 className="w-[384px] h-[34px] font-[700] text-[24px] font-[Roboto] text-[#000000] mb-5 items-center">
                  Art Specialization
                  </h5>
                  <p className="text-[16px] font-[400] font-[Roboto] w-[382px] h-[48px] items-center text-[#000000] leading-[24px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="w-fixed-[382px] h-Hug-[40px] flex gap-[10px] items-center mt-[30px]">
                  <button className="border border-1 rounded-md  border-[#000000] pt-[8px] pr-[20px] pb-[8px] pl-[20px] text-[#000000] flex gap-[5px]">
                    Enroll Now
                  </button>

                  <span className="font-[500] font-[Roboto] text-[16px] leading-[24px] w-[37px] h-[24px] text-[#000000] ml-2">
                    $400
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* row-2-div-2 */}
          <div className="flex">
            <div className="w-[416px] h-Hug-[534px] bg-[#F7F7F7] mt-[45px] rounded-lg  px-8 shadow-lg ">
              <Image
                src={libaray}
                alt="pic"
                width={416}
                height={300}
                className=" w-fixed-[416px] h-[300] py-2"
              />
              <div className="w-fill-[416px] h-Hug-[210px] pb-[24px] pr-[16px] pl-[16px] gap-[24px]">
                <div className="w-fill-[382px] h-Hug-[24px] gap-[8px] flex">
                  <p className="w-[326px] h-[21px] font-[Roboto] font-[600] text-[14px] mt-3">
                  Law
                  </p>
                  <div className="w-fixed-[48px] h-Hug-[24px] flex gap-2 mt-2">
                    <Image
                      src={imaage}
                      alt="pic"
                      className="w-[24px] h-[20px]  text-[#D9D9D9] flex gap-5 mt-[1px]"
                    />
                    <span className="font-[600] text-[16px] text-right w-[20px] h-[28px] flex gap-5  mb-5">
                      5.0
                    </span>
                  </div>
                </div>
                <div>
                  <h5 className="w-[384px] h-[34px] font-[700] text-[24px] font-[Roboto] text-[#000000] mb-5 items-center">
                  Rule of Law
                  </h5>
                  <p className="text-[16px] font-[400] font-[Roboto] w-[382px] h-[48px] items-center text-[#000000] leading-[24px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="w-fixed-[382px] h-Hug-[40px] flex gap-[10px] items-center mt-[30px]">
                  <button className="border border-1 rounded-md  border-[#000000] pt-[8px] pr-[20px] pb-[8px] pl-[20px] text-[#000000] flex gap-[5px]">
                    Enroll Now
                  </button>
                  <span className="font-[500] font-[Roboto] text-[16px] leading-[24px] w-[37px] h-[24px] text-[#000000] ml-2">
                    $400
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* div-3 */}
          <div className="flex">
            <div className="w-[416px] h-Hug-[534px] bg-[#F7F7F7] mt-[45px] rounded-lg lg:px-4 py-6 px-8 shadow-lg">
              <Image
                src={website}
                alt="pic"
                width={416}
                height={300}
                className=" w-fixed-[416px] h-[300] py-2"
              />
              <div className="w-fill-[416px] h-Hug-[210px] lg:pb-[24px] lg:pr-[16px] lg:pl-[16px] gap-[24px]">
                <div className="w-fill-[382px] h-Hug-[24px] gap-[8px] flex">
                  <p className="w-[326px] h-[21px] font-[Roboto] font-[600] text-[14px] mt-3">
                  Tech
                  </p>
                  <div className="w-fixed-[48px] h-Hug-[24px] flex gap-2 mt-2">
                    <Image
                      src={imaage}
                      alt="pic"
                      className="w-[24px] h-[20px]  text-[#D9D9D9] flex gap-5 mt-[1px]"
                    />
                    <span className="font-[600] text-[16px] text-right w-[20px] h-[28px] flex gap-5  mb-5">
                      5.0
                    </span>
                  </div>
                </div>
                <div>
                  <h5 className="w-[384px] h-[34px] font-[700] text-[24px] font-[Roboto] text-[#000000] mb-5 items-center">
                  Introduction to webflow
                  </h5>
                  <p className="text-[16px] font-[400] font-[Roboto] w-[382px] h-[48px] items-center text-[#000000] leading-[24px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="w-fixed-[382px] h-Hug-[40px] flex gap-[10px] items-center mt-[30px]">
                  <button className="border border-1 rounded-md  border-[#000000] pt-[8px] pr-[20px] pb-[8px] pl-[20px] text-[#000000] flex gap-[5px]">
                    Enroll Now
                  </button>
                  <span className="font-[500] font-[Roboto] text-[16px] leading-[24px] w-[37px] h-[24px] text-[#000000] ml-2">
                    $400
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[152px] h-Hug-[40px] pt-[8px] pb-[8px] pl-[16px] pr-[16px] border border-2 border-[#000000]  rounded-md text-center lg:ml-[590px] mt-[55px] ml-[125px] ">
          <Button className="font-[Roboto] text-[16px] leading-[24px] text-[#000000] w-[120px] h-[24px] text-center">View All Courses</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
