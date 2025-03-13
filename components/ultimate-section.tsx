"use client";

import { Raleway } from "next/font/google";
import { useState } from "react";
import Image from "next/image";

import dynamic from "next/dynamic";
// Import dynamic for lazy loading

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  {
    ssr: false,
  }
);

import multiply from "@/public/x.svg";
import cloudBg1 from "@/public/blueSky1.png";
import cloudBg2 from "@/public/blueSky2.png";
import cloudBg3 from "@/public/blueSky3.png";
import mindset1 from "@/public/mindset1.png";
import mindset2 from "@/public/mindset2.png";
import mindset3 from "@/public/mindset3.png";
import cloudymountain from "@/public/cloudymountain.png";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["600", "700"],
});

interface Features {
  challenge: string;
  title: string;
  content: string;
  image: string;
}

function UltimateSection() {
  const [isActive, setIsActive] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const ultimateFeatures: Features[] = [
    {
      challenge: "Time-consuming manual processes",
      title: "Interactive itinerary on maps",
      content:
        "Turn itinerary PDF drafts into organized and visual itinerary plans with AI. Create a digital bulletin board for trips using the notes tool.",
      image: "/Itenary0.png",
    },
    {
      challenge: "Limited engagement & missed connections",
      title: "Group chat & community features",
      content:
        "Group chat, polls and real-time updates keep everyone connected in one place.",
      image: "/itenary.png",
    },
    {
      challenge: "Poor in-trip experience for groups",
      title: "Collaborative photo albums",
      content:
        "Shared photo album for your group travel clients to share and relive memories with one another.",
      image: "/itenary2.png",
    },
  ];

  return (
    <div
      className={`${raleway.className} sm:mt-16 mt-8 -mb-12 sm:mb-0 min-h-fit h-auto relative`}
    >
      <div className="mx-auto pt-8 sm:pb-16 pb-6 max-w-6xl w-full px-6 sm:px-8">
        <div className="text-[#525266] flex flex-col items-center gap-y-4 sm:gap-y-6">
          <h2 className="sm:text-3xl sm:font-[600] font-[500] ">
            The Ultimate Group Travel Solution
          </h2>
          <p className="sm:font-[200] font-[100] sm:text-[18px] text-sm text-center ">
            Seamlessly coordinate every aspect of group travel, from planning to
            real-time updates—all in one powerful platform.
          </p>
        </div>

        <div className="md:flex py-4 sm:py-8 sm:gap-x-56 gap-x-20 hidden ">
          {/* Left Side (Features) */}
          <div
            className="flex flex-col sm:gap-y-[6.4px] gap-y-1"
            style={{ flex: 1 }}
          >
            {ultimateFeatures.map((content, index) => (
              <div
                key={index}
                onMouseOver={() => setIsActive(index)}
                className="group p-2 rounded-lg flex flex-col gap-y-2 
                transition-all duration-300 ease-in-out 
                hover:bg-[#E6E6F2] hover:border-l-2 sm:hover:border-l-4 hover:border-[#3A4096] max-w-[410px]"
              >
                <div
                  className="flex items-center sm:gap-x-2 gap-x-1 shadow-sm rounded-full px-4 py-2 w-fit 
                  bg-white group-hover:bg-[#FAC9B9] 
                  transition-colors duration-300 ease-in-out"
                >
                  <Image
                    src={multiply}
                    alt="cancel-btn"
                    role="button"
                    width={10}
                    height={10}
                  />
                  <span className="line-through sm:font-[500] font-[400] sm:text-[10px] text-sm text-[#525266]">
                    {content.challenge}
                  </span>
                </div>
                <h3
                  className=" sm:font-[700] font-[600] sm:text-lg text-base 
                  group-hover:text-[#6060BF] transition-colors duration-300 ease-in-out"
                >
                  {content.title}
                </h3>
                <p className="sm:font-[400] font-[300] sm:text-[12px] text-[8px] sm:leading-[28px] leading-12">
                  {content.content}
                </p>
              </div>
            ))}
          </div>

          <div className="relative flex-1 h-auto">
            {ultimateFeatures.map((feature, index) => (
              <Image
                key={index}
                src={feature.image}
                alt="features-image"
                fill
                quality={80}
                className={`absolute   transition-opacity duration-500 ${
                  isActive === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center mt-8 mb-6">
          {/* <motion.div
            key={ultimateFeatures[activeIndex].title}
            className="text-center"
          >
            <div className="flex justify-center">
              <Image
                src={ultimateFeatures[activeIndex].image}
                alt={ultimateFeatures[activeIndex].title}
                width={300}
                height={300}
                className="rounded-lg mb-4 "
              />
            </div>

            <div
              className="group p-3 rounded-lg flex flex-col gap-y-3 items-center 
    transition-all duration-300 ease-in-out 
    hover:bg-[#E6E6F2] hover:border-l-2 sm:hover:border-l-4 
    hover:border-[#3A4096] w-full sm:max-w-[410px]"
            >
              <div
                className="flex items-center gap-x-1 sm:gap-x-2 shadow-sm rounded-full 
      px-3 sm:px-4 py-1 sm:py-2 w-fit 
      bg-white group-hover:bg-[#FAC9B9] 
      transition-colors duration-300 ease-in-out"
              >
                <Image
                  src={multiply}
                  alt="cancel-btn"
                  role="button"
                  width={12}
                  height={12}
                />
                <span className="line-through font-[400] sm:font-[500] text-xs sm:text-[10px] text-[#525266]">
                  {ultimateFeatures[activeIndex].challenge}
                </span>
              </div>
              <h3
                className="font-[600] sm:font-[700] text-sm sm:text-lg 
      group-hover:text-[#6060BF] transition-colors duration-300 ease-in-out"
              >
                {ultimateFeatures[activeIndex].title}
              </h3>
              <p className="font-[300] sm:font-[400] text-xs sm:text-[12px] leading-5 sm:leading-[28px]">
                {ultimateFeatures[activeIndex].content}
              </p>
            </div>
          </motion.div> */}
          <MotionDiv
            key={ultimateFeatures[activeIndex].title}
            className="text-center"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <div className="flex justify-center">
              <Image
                src={ultimateFeatures[activeIndex].image}
                alt={ultimateFeatures[activeIndex].title}
                width={300}
                height={300}
                className="rounded-lg mb-4"
              />
            </div>

            <div className="group p-3 rounded-lg flex flex-col gap-y-3 items-center transition-all duration-300 ease-in-out hover:bg-[#E6E6F2] hover:border-l-2 sm:hover:border-l-4 hover:border-[#3A4096] w-full sm:max-w-[410px]">
              <div className="flex items-center gap-x-1 sm:gap-x-2 shadow-sm rounded-full px-3 sm:px-4 py-1 sm:py-2 w-fit bg-white group-hover:bg-[#FAC9B9] transition-colors duration-300 ease-in-out">
                <Image
                  src={multiply}
                  alt="cancel-btn"
                  role="button"
                  width={12}
                  height={12}
                />

                <span className="line-through font-[400] sm:font-[500] text-xs sm:text-[10px] text-[#525266]">
                  {ultimateFeatures[activeIndex].challenge}
                </span>
              </div>

              <h3 className="font-[600] sm:font-[700] text-sm sm:text-lg group-hover:text-[#6060BF] transition-colors duration-300 ease-in-out">
                {ultimateFeatures[activeIndex].title}
              </h3>

              <p className="font-[300] sm:font-[400] text-xs sm:text-[12px] leading-5 sm:leading-[28px]">
                {ultimateFeatures[activeIndex].content}
              </p>
            </div>
          </MotionDiv>
          ;
          <div className="flex space-x-2 mt-6">
            {ultimateFeatures.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-blue-500 w-8" : "bg-gray-600 w-4"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="sm:translate-y-24">
          <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-6">
            {/* First Card - Content First */}
            {/* <div className="p-[2px] rounded-3xl bg-gradient-to-r max-w-fit from-[#ffffff] to-[#FAC9B9] border-1 border-white shadow-lg"> */}

            <div className="relative flex-1 w-full sm:w-1/3">
              <div
                className="absolute inset-0 rounded-3xl border-[1px] pointer-events-none"
                style={{
                  content: '""',
                  background:
                    "linear-gradient(to bottom, white 30%, #FAC9B9 90%)",
                  borderRadius: "1.5rem", // Same as rounded-3xl
                  padding: "1px", // Border thickness
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "destination-out",
                  maskComposite: "exclude",
                }}
              ></div>
              <div
                className="relative bg-no-repeat rounded-3xl h-auto p-4 flex flex-col sm:gap-y-2 gap-y-1 items-center border-[3px] border-transparent"
                style={{
                  backgroundImage: `url(${cloudBg1.src})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="bg-white/30 backdrop-blur-sm px-4 py-3 sm:space-y-2 space-y-2 rounded-md text-start">
                  <h4 className="font-semibold sm:font-bold sm:text-[18px] text-[14px]">
                    Build your CRM
                  </h4>
                  <p className="font-light text-[#52526685] sm:font-normal sm:leading-[28px] leading-[14px] sm:text-[13px] text-sm">
                    Grow your CRM effortlessly—every customer who downloads your
                    app is automatically added.
                  </p>
                </div>

                <div className="relative w-full sm:w-[300px] h-[200px] sm:h-[250px] flex items-center justify-center">
                  <Image
                    src={mindset1}
                    alt="CRM mindset graph"
                    width={250}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* </div> */}
            {/* Second Card */}
            <div className="relative flex-1 w-full sm:w-1/3">
              <div
                className="absolute inset-0 rounded-3xl border-[1px] pointer-events-none"
                style={{
                  content: '""',
                  background:
                    "linear-gradient(to bottom, white 30%, #FAC9B9 90%)",
                  borderRadius: "1.5rem", // Same as rounded-3xl
                  padding: "1px", // Border thickness
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "destination-out",
                  maskComposite: "exclude",
                }}
              ></div>

              <div
                className="relative bg-no-repeat rounded-3xl  p-4 flex flex-col sm:gap-y-2 gap-y-1 items-center border-[3px] border-transparent h-full"
                style={{
                  backgroundImage: `url(${cloudBg2.src})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="relative w-full sm:w-[300px] h-[200px] sm:h-[250px] flex items-center justify-center">
                  <Image
                    src={mindset2}
                    alt="Loyalty graph"
                    width={250}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <div className="bg-white/30 backdrop-blur-sm px-4 py-3 sm:space-y-2 space-y-2 rounded-md text-start">
                  <h4 className="font-semibold sm:font-bold sm:text-[18px] text-[14px]">
                    Enhance Loyalty
                  </h4>
                  <p className="font-light text-[#52526685] sm:font-normal sm:leading-[28px] leading-[14px] sm:text-[13px] text-sm">
                    Keep customers engaged and loyal with our exclusive app
                    experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Third Card */}
            <div className="relative flex-1 w-full sm:w-1/3">
              <div
                className="absolute inset-0 rounded-3xl border-[1px] pointer-events-none"
                style={{
                  content: '""',
                  background:
                    "linear-gradient(to bottom, white 30%, #FAC9B9 90%)",
                  borderRadius: "1.5rem", // Same as rounded-3xl
                  padding: "1px", // Border thickness
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "destination-out",
                  maskComposite: "exclude",
                }}
              ></div>

              <div
                className="relative bg-no-repeat rounded-3xl h-auto p-4 flex flex-col sm:gap-y-2 gap-y-1 items-center border-[3px] border-transparent"
                style={{
                  backgroundImage: `url(${cloudBg3.src})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="bg-white/30 backdrop-blur-sm px-4 py-3 sm:space-y-2 space-y-2 rounded-md text-start">
                  <h4 className="font-semibold sm:font-bold sm:text-[18px] text-[14px]">
                    Custom Branding
                  </h4>
                  <p className="font-light text-[#52526685] sm:font-normal sm:leading-[28px] leading-[14px] sm:text-[13px] text-sm">
                    Provide a luxury, custom-branded experience for your
                    customers that will keep them coming back.
                  </p>
                </div>

                <div className="relative w-full sm:w-[300px] h-[200px] sm:h-[250px] flex items-center justify-center">
                  <Image
                    src={mindset3}
                    alt="Branding mindset graph"
                    width={250}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center -translate-y-28  sm:-translate-y-24">
        <Image
          src={cloudymountain}
          alt="Cloudy Mountain"
          width={500}
          height={300}
          className="w-full sm:w-full z-5"
        />
      </div>
    </div>
  );
}

export default UltimateSection;
