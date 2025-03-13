// import { Raleway } from "next/font/google";
// import { Button } from "./ui/button";
// import Image from "next/image";
// import herobg from "@/public/hero-bg.png";
// import herosample from "@/public/sample-app.png";
// import demobtnverlay from "@/public/demo-overlay.png";
// import herocloud from "@/public/cloud1.png";
// // ✅ Customize font options
// const raleway = Raleway({
//   subsets: ["latin"],
//   weight: ["600", "700"], // Add required weights
// });

// function HeroSection() {
//   return (
//     <div
//       className={` ${raleway.className} sm:pt-16 pt-8 pb-6  min-h-fit h-[680px] relative flex flex-col  `}
//     >
//       <div className=" mx-auto flex flex-col sm:flex-row gap-x-2 sm:gap-x-12 max-w-6xl">
//         <div className="space-y-4" style={{ flex: 1 }}>
//           <div className=" p-[2px] rounded-full bg-gradient-to-r max-w-fit from-[#ffffff] to-[#FAC9B9] border-1 border-white shadow-lg">
//             {/* Inner white container with actual content */}
//             <div className="relative z-10 font-[700] text-xs  text-slate-800 bg-[#FFEFEA] rounded-full px-3 py-2">
//               ✨Frienzy ✨ The Ultimate White-label Group Travel App for Clients
//               Engagement
//             </div>
//           </div>

//           <h2 className="font-[700] text-[47.942px]  text-[#525266] mt-2 leading-[60px] tracking-tighter">
//             Launch A Custom App <br /> For Your Travel Business <br />
//             <span className="text-[#FA602D]">- No Coding Required.</span>
//           </h2>
//           <p className="line-clamp-5 leading-[35.957px] text-sm   sm:text-[17.978px] lg:text-[19px] text-[#525266] mt-1">
//             Enhance the group travel experience, capture valuable customer data,
//             and unlock new revenue streams with your own custom-branded travel
//             app. With Frienzy&apos;s white-label solution, you&apos;ll receive
//             your app in just 6 weeks, ready for your clients to download—no
//             coding required.
//           </p>
//           <div className="relative">
//             <Button
//               className={`${raleway.className} mt-4 cursor-pointer  sm:text-base text-sm font-700 text-white bg-orange-600 rounded-full sm:px-5 sm:py-6 hover:bg-orange-500  px-3 py-4 `}
//             >
//               {" "}
//               Schedule A Demo
//             </Button>
//             <Image
//               src={demobtnverlay}
//               alt="button-overlay"
//               quality={70}
//               width={48}
//               height={48}
//               className="z-[-10] absolute sm:-bottom-12  sm:-left-12 sm:h-[8rem] sm:w-[8rem] "
//             />
//           </div>
//         </div>
//         <div
//           className="bg-no-repeat"
//           style={{
//             backgroundImage: `url(${herobg.src})`,
//             backgroundPosition: "right",
//             backgroundSize: "1000px 500px",
//             flex: 1,
//           }}
//         >
//           <div className="relative w-full h-full">
//             <Image
//               src={herosample}
//               alt="app-demo-sample"
//               fill
//               quality={80}
//               className="object-contain "
//             />
//           </div>
//         </div>
//       </div>
//       <Image
//         src={herocloud}
//         alt="cloud-image"
//         quality={80}
//         width={100}
//         height={100}
//         className="z-5 absolute -bottom-16 h-auto w-full"
//       />
//     </div>
//   );
// }

// export default HeroSection;

import { Raleway } from "next/font/google";
import { Button } from "./ui/button";
import Image from "next/image";
import herobg from "@/public/hero-bg.png";
import herosample from "@/public/sample-app.png";
import demobtnverlay from "@/public/demo-overlay.png";
import herocloud from "@/public/cloud1.png";

// ✅ Customize font options
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["600", "700"],
});

function HeroSection() {
  return (
    <div
      className={`${raleway.className} relative flex flex-col items-center sm:pt-16 sm:mb-32 mb-12 pt-8 pb-6 min-h-fit h-auto`}
    >
      <div className="mx-auto flex flex-col sm:flex-row items-center gap-8 max-w-6xl w-full px-4 sm:px-8">
        {/* Left Content */}
        <div className="flex-1 text-center sm:text-left">
          <div className="p-[2px] rounded-full bg-gradient-to-r max-w-fit from-[#ffffff] to-[#FAC9B9] border border-white shadow-lg mx-auto sm:mx-0">
            <div className="relative z-10 font-bold sm:text-[8px] md:text-[12px] lg:text-xs text-slate-800 bg-[#FFEFEA] rounded-full px-2 py-2 sm:px-2 md:px-2 lg:px-3 lg:py-2 min-[320px]:text-[10px] max-[420px]:text-xs">
              ✨ Frienzy ✨ The Ultimate White-label Group Travel App
            </div>
          </div>

          <h2 className="font-bold text-3xl lg:text-5xl sm:text-md  md:text-lg text-[#525266] mt-4 leading-tight min-[320px]:text-xl max-[420px]:text-2xl">
            Launch A Custom App <br />
            For Your Travel Business <br />
            <span className="text-[#FA602D]">- No Coding Required.</span>
          </h2>

          <p className="text-sm sm:text-[14px] md:text-lg text-[#525266b6] mt-2 leading-relaxed sm:leading-[36px]">
            Enhance the group travel experience, capture valuable customer data,
            and unlock new revenue streams with your own custom-branded travel
            app. With Frienzy&apos;s white-label solution, you&apos;ll receive
            your app in just 6 weeks, ready for your clients to download—no
            coding required.
          </p>

          <div className="relative mt-6 flex justify-center sm:justify-start">
            <Button className="cursor-pointer text-sm sm:text-base font-bold text-white bg-orange-600 rounded-full px-6 py-3 hover:bg-orange-500">
              Schedule A Demo
            </Button>
            <Image
              src={demobtnverlay}
              alt="button-overlay"
              quality={70}
              width={48}
              height={48}
              className="absolute -bottom-4 -left-6 hidden sm:block"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full sm:flex-1 hidden  sm:flex justify-center sm:justify-end">
          <div
            className="relative w-full sm:w-[480px] h-[250px] sm:h-[520px] bg-center  bg-no-repeat"
            style={{
              backgroundImage: `url(${herobg.src})`,
              backgroundPosition: "right",
              backgroundSize: "1000px 500px",
              flex: 1,
            }}
          >
            <Image
              src={herosample}
              alt="app-demo-sample"
              fill
              quality={80}
              className="object-contain h-full w-full"
            />
          </div>
        </div>

        <div className="relative w-full sm:flex-1 block sm:hidden justify-center sm:justify-end">
          <div
            className="relative w-full sm:w-[480px] h-[250px] sm:h-[520px] bg-center  bg-no-repeat"
            style={{
              backgroundImage: `url(${herobg.src})`,
              backgroundPosition: "right",
              backgroundSize: "cover",
              flex: 1,
            }}
          >
            <Image
              src={herosample}
              alt="app-demo-sample"
              fill
              quality={80}
              className="object-contain h-full w-full"
            />
          </div>
        </div>
      </div>

      {/* Cloud Image */}
      <Image
        src={herocloud}
        alt="cloud-image"
        quality={80}
        width={100}
        height={100}
        className="absolute sm:-bottom-32 -bottom-12 w-full h-auto hidden sm:block"
      />
    </div>
  );
}

export default HeroSection;
