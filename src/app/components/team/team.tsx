import React from "react";
import team1 from "../../../../public/team1.png";
import team2 from "../../../../public/team2.png";
import team3 from "../../../../public/team3.png";
import teamrow from "../../../../public/teamrow.png";
import teamrows from "../../../../public/teamrows.png";
import teamrow2nd from "../../../../public/teamrow2nd.png";
import stars from "../../../../public/stars.png";
import Image from "next/image";
import { FaDribbble } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


const Team = () => {
  return (
    <div>
      <div className="w-fixed-[1280px] h-Hug-[895px] top-[4991px]  mt-[75px] py-8 pt-[112px] pr-[64px] pb-[112px] pl-[64px] bg-[#F7F7F7]">
        <div className="w-fill-[786px] h-Hug-[109px] gap-[24px]">
          <h5 className="font-[Roboto] font-[700] text-[48px] leading-[57.6px] text-center items-center w-fill-[786px] h-Hug-[58px] ">
            Our team
          </h5>
          <p className="w-fill-[786px] h-Hug-[27px] font-[Roboto] font-[400] text-[18px] leading-[27px] text-center items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className="w-fill-[1280px] h-Hug-[482px] gap-[96px] flex lg:flex-row flex-col  justify-center lg:justify-between mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="w-fill-[1280px] h-Hug-[209px] gap-[48px] flex justify-center lg:justify-betweeen max-auto ">
            <div className="w-fill-[394.67px] h-Hug-[209px] gap-[24px] max-auto  ">
              <Image
                src={team1}
                alt="team pic"
                width={80}
                height={50}
                className="w-fixed-[80px] h-[80px] ml-[155px]  mb-5 mt-8"
              />
              <p className="font-[Roboto] font-[600] text-[20px] text-center items-center leading-[30px] w-[394.67px] h-[30px]">
                James Nduku
              </p>
              <p className="w-[394.67px] h-[27px] font-[Roboto] font-[400] text-[18px] leading-[27px] text-center items-center mt-[5px]">
                Marketing Coordinator
              </p>
              <div className="w-Hug-[100px] h-Hug-[24px] gap-[14px] text-center flex ml-[155px] gap-5 mt-5">
                <FaLinkedin />
                <FaTwitter />

                <FaDribbble />
              </div>
            </div>
          </div>

          <div className="w-fill-[1280px] h-Hug-[209px] gap-[48px]  flex justify-center lg:justify-between">
            <div className="w-fill-[394.67px] h-Hug-[209px] gap-[24px] mx-auto">
              <Image
                src={team2}
                alt="pic"
                width={80}
                height={50}
                className="w-fixed-[80px] h-[80px] ml-[155px] mb-5 mt-8"
              />
              <p className="font-[Roboto] font-[600] text-[20px] text-center items-center leading-[30px] w-[394.67px] h-[30px]">
                Joseph Munyambu
              </p>
              <p className="w-[394.67px] h-[27px] font-[Roboto] font-[400] text-[18px] leading-[27px] text-center items-center mt-[5px]">
                Nursing Assistant
              </p>
              <div className="w-Hug-[100px] h-Hug-[24px] gap-[14px] text-center flex ml-[155px] gap-5 mt-5">
                <FaLinkedin />
                <FaTwitter />
                <FaDribbble />
              </div>
            </div>
          </div>
          <div className="w-fill-[1280px] h-Hug-[209px] gap-[48px]  flex justify-center lg:justify-between">
            <div className="w-fill-[394.67px] h-Hug-[209px] gap-[24px] mx-auto">
              <Image
                src={team3}
                alt="pic"
                width={80}
                height={50}
                className="w-fixed-[80px] h-[80px] ml-[155px] mb-5 mt-8"
              />
              <p className="font-[Roboto] font-[600] text-[20px] text-center items-center leading-[30px] w-[394.67px] h-[30px]">
                Joseph Ngumbau
              </p>
              <p className="w-[394.67px] h-[27px] font-[Roboto] font-[400] text-[18px] leading-[27px] text-center items-center mt-[5px]">
                Medical Assistant
              </p>
              <div className="w-Hug-[100px] h-Hug-[24px] gap-[14px] text-center flex ml-[155px] gap-5 mt-5">
                <FaLinkedin />
                <FaTwitter />
                <FaDribbble />
              </div>
            </div>
          </div>
        </div>
        <div className="w-fill-[1280px] h-Hug-[482px] gap-[96px] hidden lg:flex justify-between mt-8">
          <div className="w-fill-[1280px] h-Hug-[209px] gap-[48px]">
            <div className="w-fill-[394.67px] h-Hug-[209px] gap-[24px]">
              <Image
                src={teamrow2nd}
                alt="pic"
                width={80}
                height={50}
                className="w-fixed-[80px] h-[80px] ml-[155px] mb-5 mt-8"
              />
              <p className="font-[Roboto] font-[600] text-[20px] text-center items-center leading-[30px] w-[394.67px] h-[30px]">
                Erick Kipkemboi
              </p>
              <p className="w-[394.67px] h-[27px] font-[Roboto] font-[400] text-[18px] leading-[27px] text-center items-center mt-[5px]">
                Web Designer
              </p>
              <div className="w-Hug-[100px] h-Hug-[24px] gap-[14px] text-center flex ml-[155px] gap-5 mt-5">
                <FaLinkedin />
                <FaTwitter />
                <FaDribbble />
              </div>
            </div>
          </div>
          <div className="w-fill-[1280px] h-Hug-[209px] gap-[48px]">
            <div className="w-fill-[394.67px] h-Hug-[209px] gap-[24px]">
              <Image
                src={teamrow}
                alt="pic"
                className="w-fixed-[80px] h-[80px] ml-[155px] mb-5 mt-8"
              />
              <p className="font-[Roboto] font-[600] text-[20px] text-center items-center leading-[30px] w-[394.67px] h-[30px]">
                Stephen Kerubo
              </p>
              <p className="w-[394.67px] h-[27px] font-[Roboto] font-[400] text-[18px] leading-[27px] text-center items-center mt-[5px]">
                President of Sales
              </p>
              <div className="w-Hug-[100px] h-Hug-[24px] gap-[14px] text-center flex ml-[155px] gap-5 mt-5">
                <FaLinkedin />
                <FaTwitter />
                <FaDribbble />
              </div>
            </div>
          </div>
          <div className="w-fill-[1280px] h-Hug-[209px] gap-[48px]">
            <div className="w-fill-[394.67px] h-Hug-[209px] gap-[24px]">
              <Image
                src={teamrows}
                alt="pic"
                width={80}
                height={50}
                className="w-fixed-[80px] h-[80px] ml-[155px] mb-5 mt-8"
              />
              <p className="font-[Roboto] font-[600] text-[20px] text-center items-center leading-[30px] w-[394.67px] h-[30px]">
                John Leboo
              </p>
              <p className="w-[394.67px] h-[27px] font-[Roboto] font-[400] text-[18px] leading-[27px] text-center items-center mt-[5px]">
                Dog Trainer
              </p>
              <div className="w-Hug-[100px] h-Hug-[24px] gap-[14px] text-center flex ml-[155px] gap-5 mt-5">
                <FaLinkedin />
                <FaTwitter />
                <FaDribbble />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:w-fixed-[1280px] lg:h-Hug-[830.89px] top-[5886px] pt-[112px] pb-[112px] lg:pr-[64px] lg:pl-[64px] gap-[80px] bg-[#F7F7F7] ">
        <div className=" lg:w-Hug-[560px] lg:h-Hug-[109px] gap-[24px] ">
          <h2 className="lg:w-[560px] lg:h-[58px] w-[360px]  h-[48px] font-[Roboto] font-[700] lg:text-[48px] text-[35px] leading-[57.6px] items-center">
            Customer testimonials
          </h2>
          <p className="lg:w-[560px] lg:h-[27px] mt-5 lg:mt-0 font-[Roboto] font-[400] text-[18px] leading-[27px] items-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className=" lg:w-fill-[1152px] lg:h-Hug-[321.89px] flex lg:flex-row  flex-col lg:justify-between gap-[32px] items-center mt-[65px] ">
          <div className="w-fill-[362.67px] lg:h-Hug-[321.89px]  border border-1  border-[#000000] p-[32px] gap-[24px] shadow-lg">
            <span className="w-Hug-[116px] h-Hug-[18.89px] gap-[4px]">
              <Image
                src={stars}
                alt="stars pic"
                width={116}
                height={18.89}
                className="text-[#000000] w-Hug-[116px] h-Hug-[18.89px]"
              />
            </span>
            <p className="w-[298.67px] h-[135px] font-[Roboto] font-[400] text-[18px] leading-[27px] text-[#000000] items-center mt-8">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.&quot;
            </p>
            <div className="w-Hug-[215px] h-Hug-[56px] flex gap-[20px]">
              <Image
                src={team3}
                alt="image"
                width={56}
                height={56}
                className="w-[56px] h-[56px]  border rounded-full mt-5"
              />
              <span
                className="w-Hug-[139px] h-Hug-[48px] flex 
        flex-col gap-[20px]"
              >
                <p className="w-[99px] h-[24px] font-[600] font-[Roboto] text-[16px] leading-[26px] text-[#000000]  items-center">
                  James Nduku
                </p>

                <p className="w-[139px] h-[24px] font-[Roboto] font-[400] text-[16px] leading-[24px] text-[#000000] items-center">
                  Software Developer
                </p>
              </span>
            </div>
          </div>
          <div className="w-fill-[362.67px] h-Hug-[321.89px]  border border-1  border-[#000000] p-[32px] gap-[24px] hidden lg:block shadow-lg">
            <span className="w-Hug-[116px] h-Hug-[18.89px] gap-[4px]">
              <Image
                src={stars}
                alt="stars"
                width={116}
                height={18.89}
                className="text-[#000000] w-Hug-[116px] h-Hug-[18.89px]"
              />
            </span>
            <p className="w-[298.67px] h-[135px] font-[Roboto] font-[400] text-[18px] leading-[27px] text-[#000000] items-center mt-8">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.&quot;
            </p>
            <div className="w-Hug-[215px] h-Hug-[56px] flex gap-[20px]">
              <Image
                src={team1}
                alt=""
                className="w-[56px] h-[56px]  border rounded-full mt-5"
              />
              <span
                className="w-Hug-[139px] h-Hug-[48px] flex 
        flex-col gap-[20px]"
              >
                <p className="w-fixed-[99px] h-[24px] font-[600] font-[Roboto] text-[16px] leading-[26px] text-[#000000]  items-center">
                Erick Kipkemboi
                </p>
                <p className="w-[139px] h-[24px] font-[Roboto] font-[400] text-[16px] leading-[24px] text-[#000000] items-center">
                Scrum Master
                </p>
              </span>
            </div>
          </div>
          <div className="w-fill-[362.67px] h-Hug-[321.89px]  border border-1  border-[#000000] shadow-lg p-[32px] gap-[24px]  hidden lg:block ">
            <span className="w-Hug-[116px] h-Hug-[18.89px] gap-[4px]">
              <Image
                src={stars}
                alt="stars"
                width={116}
                height={18.89}
                className="text-[#000000] w-Hug-[116px] h-Hug-[18.89px]"
              />
            </span>
            <p className="w-[298.67px] h-[135px] font-[Roboto] font-[400] text-[18px] leading-[27px] text-[#000000] items-center mt-8">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.&quot;
            </p>
            <div className="w-Hug-[215px] h-Hug-[56px] flex gap-[20px]">
              <Image
                src={teamrows}
                alt=""
                className="w-[56px] h-[56px]  border rounded-full mt-5"
              />
              <span
                className="w-Hug-[139px] h-Hug-[48px] flex 
                flex-col gap-[20px]"
              >
                <p className="w-fixed-[99px] h-[24px] font-[600] font-[Roboto] text-[16px] leading-[26px] text-[#000000]  items-center">
                Stephen Kerubo

                </p>
                <p className="w-[139px] h-[24px] font-[Roboto] font-[400] text-[16px] leading-[24px] text-[#000000] items-center">
                UI/UX Designer

                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="lg:w-fill-[1152px] lg:w-Hug-[48px] flex justify-between">
          <div className="flex  justify-start lg:w-Hug-[72px] lg:w-Hug-[8px] gap-[8px] items-center">
          <div className="w-[8px] h-[8px] text-[#000000] text-[55px]">.</div>
          <div className="w-[8px] h-[8px] text-[#8D8D8D] text-[55px]">.</div>
          <div className="w-[8px] h-[8px] text-[#8D8D8D] text-[55px]">.</div>
          <div className="w-[8px] h-[8px] text-[#8D8D8D] text-[55px]">.</div>
          <div className="w-[8px] h-[8px] text-[#8D8D8D] text-[55px]">.</div>
          </div>
<div className="w-Hug-[112px] h-Hug-[48px]  flex justify-end gap-[15px] mt-[99px]">
  <div className="w-Hug-[48px] h-Hug-[48px] border border-1  border-[#000000] rounded-full p-[12px] flex gap-[8px]">
<FaArrowRight/>

  </div>
  <div className="w-Hug-[48px] h-Hug-[48px] border border-1  border-[#000000] rounded-full p-[12px] flex gap-[8px]">
<FaArrowLeft/>

</div>
</div>  
     
</div>
      </div>
    </div>
  );
};

export default Team;
