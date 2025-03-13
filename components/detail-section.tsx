// "use client";
// import { Raleway } from "next/font/google";
// // import { Button } from "./ui/button";
// import Image from "next/image";
// import Lottie from "lottie-react";
// import animationData1 from "@/public/Itinerary-JSON.json";
// import animationData2 from "@/public/Campaign-JSON.json";
// import frame1 from "@/public/frame1.png";
// import phonechat from "@/public/synccall.png";
// import check from "@/public/check.svg";
// import smartphone from "@/public/smartphonebg.png";
// // import clientreaction from "@/public/client-reaction.png";
// import reaction1 from "@/public/reaction1.png";
// import reaction2 from "@/public/row.png";

// // ✅ Customize font options
// const raleway = Raleway({
//   subsets: ["latin"],
//   weight: ["600", "700"], // Add required weights
// });

// function DetailSection() {
//   const travelList = [
//     " Turn itinerary pdfs into interactive plan",
//     "Sync activities with your calendar",
//     " Travelers access notes and docs in one place",
//     "Track and split trip expenses",
//   ];
//   return (
//     <div
//       className={` ${raleway.className} sm:pt-16 pt-8 pb-6  min-h-fit h-fit  relative flex flex-col`}
//     >
//       <div className=" mx-auto flex flex-col sm:flex-row gap-x-2 sm:gap-x-12 max-w-6xl">
//         <div className="sm:space-y-28 space-y-14">
//           <div className="flex justify-between   flex-col sm:flex-row items-center gap-x-32">
//             <div
//               className="p-2 sm:space-y-[23px]  space-y-4"
//               style={{ flex: 1 }}
//             >
//               <h2 className="sm:text-[27px] sm:font-[600] font-[500] sm:traking-[-1.6px] tracking-tight text-[#525266]">
//                 Boost Traveler Satisfaction and Drive Repeat Bookings
//               </h2>
//               <p className="leading-[20px] sm:leading-[35px] text-[#5252666e]">
//                 Travel companies experience a{" "}
//                 <span className="font-extrabold text-[#525266]">
//                   {" "}
//                   45%+ increase in re-bookings{" "}
//                 </span>
//                 through Frienzy&apos;s re-targeting campaigns. Scale your
//                 revenue by capturing traveler data and launching personalized
//                 promotions to past customers based on data insights.
//               </p>
//             </div>
//             <div
//               className="bg-no-repeat rounded-3xl h-fit  p-4 flex justify-center items-center"
//               style={{
//                 backgroundImage: `url(${frame1.src})`,
//                 backgroundPosition: "center",
//                 backgroundSize: "cover",
//                 flex: 1,
//               }}
//             >
//               <div className="sm:w-[480px] sm:h-auto">
//                 <Lottie animationData={animationData1} loop={true} />
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-between   flex-col sm:flex-row-reverse items-center gap-x-32">
//             <div
//               className="p-2 sm:space-y-[23px]  space-y-4"
//               style={{ flex: 1 }}
//             >
//               <h2 className="sm:text-[27px] sm:font-[600] font-[500] sm:traking-[-1.6px] tracking-tight text-[#525266]">
//                 One Place for Your Clients to Access Everything And Get
//                 Real-Time Updates
//               </h2>
//               <p className="leading-[20px] sm:leading-[35px] text-[#5252666e]">
//                 Your travel clients can access their itineraries, reservations,
//                 flight tickets, invoices and other documents in one place. You
//                 can also share real-time updates with clients through push
//                 notifications and direct chats.
//               </p>
//             </div>

//             <div
//               className="bg-no-repeat rounded-3xl h-fit p-4 flex justify-center items-center"
//               style={{
//                 backgroundImage: `url(${frame1.src})`,
//                 backgroundPosition: "center",
//                 backgroundSize: "cover",
//                 flex: 1,
//               }}
//             >
//               <div className="sm:w-[480px] sm:h-auto w-full h-full flex justify-center items-center">
//                 <Image
//                   src={phonechat}
//                   alt="real time chat and call"
//                   width={400}
//                   height={400}
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-between   flex-col sm:flex-row items-center gap-x-32">
//             <div
//               className="p-2 sm:space-y-[23px]  space-y-4"
//               style={{ flex: 1 }}
//             >
//               <h2 className="sm:text-[27px] sm:font-[600] font-[500] sm:traking-[-1.6px] tracking-tight text-[#525266]">
//                 Save 10+ Hours A Week With Frienzy&apos;s AI{" "}
//               </h2>
//               <p className="leading-[20px] sm:leading-[35px] text-[#5252666e]">
//                 Travel operators{" "}
//                 <span className="font-extrabold text-[#525266]">
//                   {" "}
//                   save 10+ hours a week{" "}
//                 </span>{" "}
//                 with our AI-driven tools that streamlines itinerary uploads,
//                 expense tracking, and group coordination.
//               </p>
//               <ul className="space-y-2">
//                 {travelList.map((content: string, index: number) => (
//                   <li key={index} className="flex items-center gap-x-4">
//                     <Image
//                       src={check}
//                       alt="check icon"
//                       width={18}
//                       height={18}
//                     />
//                     <span className="font-light sm:font-normal text-[12px] sm:text-[17px] text-[#5252666e]">
//                       {content}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div
//               className="bg-no-repeat rounded-3xl h-fit  p-4 flex justify-center items-center"
//               style={{
//                 backgroundImage: `url(${frame1.src})`,
//                 backgroundPosition: "center",
//                 backgroundSize: "cover",
//                 flex: 1,
//               }}
//             >
//               <div className="sm:w-[480px] sm:h-auto">
//                 <Lottie animationData={animationData2} loop={true} />
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-between   flex-col sm:flex-row-reverse items-center gap-x-32">
//             <div
//               className="p-2 sm:space-y-[23px]  space-y-4"
//               style={{ flex: 1 }}
//             >
//               <h2 className="sm:text-[27px] sm:font-[600] font-[500] sm:traking-[-1.6px] tracking-tight text-[#525266]">
//                 Build Your Community With In-Trip Engagement Tools
//               </h2>
//               <p className="leading-[20px] sm:leading-[35px] text-[#5252666e]">
//                 Take group tours experience up a notch beyond just the
//                 experience the travel destination provides by keeping travellers
//                 fully engaged during the trip through{" "}
//                 <span className="font-extrabold text-[#525266]">
//                   {" "}
//                   in-app group chat, polls and shared photo albums{" "}
//                 </span>{" "}
//                 for them to interact and connect with one another.
//               </p>
//             </div>

//             <div
//               className="bg-no-repeat rounded-3xl h-[520px] p-4 flex justify-center items-center relative border-1 border-[#FAC9B9]"
//               style={{
//                 backgroundImage: `url(${smartphone.src})`,
//                 backgroundPosition: "center",
//                 backgroundSize: "cover",
//                 flex: 1,
//               }}
//             >
//               {/* First Image */}
//               <div className="absolute -right-6 -top-8 sm:w-[400px] sm:h-[400px] w-[150px] h-[150px]">
//                 <Image
//                   src={reaction1}
//                   alt="real-time chat and call"
//                   layout="responsive"
//                   width={400}
//                   height={400}
//                   className="object-contain"
//                 />
//               </div>

//               {/* Second Image */}
//               <div className="absolute -bottom-24  -left-8 sm:w-[200px] sm:h-[200px] w-[150px] h-[150px]">
//                 <Image
//                   src={reaction2}
//                   alt="real-time chat and call"
//                   layout="responsive"
//                   width={200}
//                   height={200}
//                   className="object-contain"
//                 />
//               </div>
//               {/* <div className="relative 2-5 sm:w-full sm:h-full w-[150px] h-[150px]">
//                 <Image
//                   src={clientreaction}
//                   alt="real-time chat and call"
//                   layout="responsive"
//                   width={200}
//                   height={200}
//                   className="object-contain"
//                 />
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DetailSection;

// Prev detail Section

// "use client";
// import { Raleway } from "next/font/google";
// import Image from "next/image";
// import Lottie from "lottie-react";
// import animationData1 from "@/public/Itinerary-JSON.json";
// import animationData2 from "@/public/Campaign-JSON.json";
// import frame1 from "@/public/frame1.png";
// import phonechat from "@/public/synccall.png";
// import check from "@/public/check.svg";
// import smartphone from "@/public/smartphonebg.png";
// import reaction1 from "@/public/reaction1.png";
// import reaction2 from "@/public/row.png";

// const raleway = Raleway({
//   subsets: ["latin"],
//   weight: ["600", "700"],
// });

// function DetailSection() {
//   const travelList = [
//     "Turn itinerary pdfs into interactive plan",
//     "Sync activities with your calendar",
//     "Travelers access notes and docs in one place",
//     "Track and split trip expenses",
//   ];

//   return (
//     <div
//       className={`${raleway.className} pt-8 pb-6 min-h-fit h-fit relative flex flex-col`}
//     >
//       <div className="mx-auto flex flex-col sm:flex-row gap-4 sm:gap-x-12 max-w-6xl w-full px-6 sm:px-8 mb-4 sm:mb-8">
//         <div className="space-y-10 sm:space-y-28">
//           {/* First Section */}
//           <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-x-32">
//             <div className="p-2 space-y-4 sm:space-y-[23px] flex-1">
//               <h2 className="text-lg sm:text-[27px] font-semibold sm:tracking-tight text-[#525266]">
//                 Boost Traveler Satisfaction and Drive Repeat Bookings
//               </h2>
//               <p className="text-sm sm:text-base leading-[20px] sm:leading-[35px] text-[#5252666e]">
//                 Travel companies experience a{" "}
//                 <span className="font-extrabold text-[#525266]">
//                   45%+ increase in re-bookings
//                 </span>{" "}
//                 through Frienzy&apos;s re-targeting campaigns.
//               </p>
//             </div>
//             <div
//               className="bg-no-repeat rounded-3xl h-fit p-4 flex justify-center items-center flex-1"
//               style={{
//                 backgroundImage: `url(${frame1.src})`,
//                 backgroundPosition: "center",
//                 backgroundSize: "cover",
//               }}
//             >
//               <div className="w-full sm:w-[480px]">
//                 <Lottie animationData={animationData1} loop={true} />
//               </div>
//             </div>
//           </div>

//           {/* Second Section */}
//           <div className="flex flex-col sm:flex-row-reverse items-center gap-4 sm:gap-x-32">
//             <div className="p-2 space-y-4 sm:space-y-[23px] flex-1">
//               <h2 className="text-lg sm:text-[27px] font-semibold sm:tracking-tight text-[#525266]">
//                 One Place for Your Clients to Access Everything
//               </h2>
//               <p className="text-sm sm:text-base leading-[20px] sm:leading-[35px] text-[#5252666e]">
//                 Access itineraries, reservations, flight tickets, invoices, and
//                 more in one place.
//               </p>
//             </div>
//             <div
//               className="bg-no-repeat rounded-3xl h-fit p-4 flex justify-center items-center flex-1"
//               style={{
//                 backgroundImage: `url(${frame1.src})`,
//                 backgroundPosition: "center",
//                 backgroundSize: "cover",
//               }}
//             >
//               <div className="w-full h-full flex justify-center items-center">
//                 <Image
//                   src={phonechat}
//                   alt="real time chat"
//                   width={400}
//                   height={400}
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Third Section */}
//           <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-x-32">
//             <div className="p-2 space-y-4 sm:space-y-[23px] flex-1">
//               <h2 className="text-lg sm:text-[27px] font-semibold sm:tracking-tight text-[#525266]">
//                 Save 10+ Hours A Week With Frienzy&apos;s AI
//               </h2>
//               <p className="text-sm sm:text-base leading-[20px] sm:leading-[35px] text-[#5252666e]">
//                 Travel operators{" "}
//                 <span className="font-extrabold text-[#525266]">
//                   save 10+ hours a week
//                 </span>{" "}
//                 with AI-driven tools.
//               </p>
//               <ul className="space-y-2">
//                 {travelList.map((content, index) => (
//                   <li key={index} className="flex items-center gap-x-4">
//                     <Image
//                       src={check}
//                       alt="check icon"
//                       width={18}
//                       height={18}
//                     />
//                     <span className="text-sm sm:text-base text-[#5252666e]">
//                       {content}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div
//               className="bg-no-repeat rounded-3xl h-fit p-4 flex justify-center items-center flex-1"
//               style={{
//                 backgroundImage: `url(${frame1.src})`,
//                 backgroundPosition: "center",
//                 backgroundSize: "cover",
//               }}
//             >
//               <div className="w-full sm:w-[480px]">
//                 <Lottie animationData={animationData2} loop={true} />
//               </div>
//             </div>
//           </div>

//           {/* Fourth Section */}
//           <div className="flex flex-col sm:flex-row-reverse items-center gap-4 sm:gap-x-32">
//             <div className="p-2 space-y-4 sm:space-y-[23px] flex-1">
//               <h2 className="text-lg sm:text-[27px] font-semibold sm:tracking-tight text-[#525266]">
//                 Build Your Community With In-Trip Engagement
//               </h2>
//               <p className="text-sm sm:text-base leading-[20px] sm:leading-[35px] text-[#5252666e]">
//                 Keep travelers engaged through{" "}
//                 <span className="font-extrabold text-[#525266]">
//                   in-app group chat, polls, and shared albums
//                 </span>
//                 .
//               </p>
//             </div>
//             {/* <div
//               className="bg-no-repeat rounded-3xl h-fit p-4 flex justify-center items-center relative border border-[#FAC9B9] flex-1"
//               style={{
//                 backgroundImage: `url(${smartphone.src})`,
//                 backgroundPosition: "center",
//                 backgroundSize: "cover",
//               }}
//             >
//               <div className="absolute -right-2 sm:-right-6 -top-4 sm:-top-8 w-[120px] sm:w-[400px]">
//                 <Image
//                   src={reaction1}
//                   alt="reaction 1"
//                   layout="responsive"
//                   width={400}
//                   height={400}
//                   className="object-contain"
//                 />
//               </div>
//               <div className="absolute -bottom-12 sm:-bottom-24 -left-2 sm:-left-8 w-[120px] sm:w-[200px]">
//                 <Image
//                   src={reaction2}
//                   alt="reaction 2"
//                   layout="responsive"
//                   width={200}
//                   height={200}
//                   className="object-contain"
//                 />
//               </div>
//             </div> */}

//             <div
//               className="relative w-full max-w-lg mx-auto rounded-3xl p-4 border border-[#FAC9B9] flex justify-center items-center bg-no-repeat"
//               style={{
//                 backgroundImage: `url(${smartphone.src})`,
//                 backgroundPosition: "center",
//                 backgroundSize: "cover",
//                 minHeight: "250px",
//                 height: "420px",
//               }}
//             >
//               {/* Floating Image 1 (Top Right) */}
//               <div className="absolute -right-2 !sm:-right-16 -top-4 sm:-top-8 w-[300px]  sm:w-[300px] md:w-[400px]">
//                 <Image
//                   src={reaction1}
//                   alt="reaction 1"
//                   width={400} // Explicit width
//                   height={400} // Explicit height
//                   quality={100}
//                   className="object-contain"
//                 />
//               </div>

//               {/* Floating Image 2 (Bottom Left) */}
//               <div className="absolute bottom-4 sm:bottom-8 -left-2 sm:-left-6 w-[80px] sm:w-[120px] md:w-[160px]">
//                 <Image
//                   src={reaction2}
//                   alt="reaction 2"
//                   width={160} // Explicit width
//                   height={160} // Explicit height
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DetailSection;
"use client";

import { Raleway } from "next/font/google";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import frame1 from "@/public/frame1.png";
import phonechat from "@/public/synccall.png";
import check from "@/public/check.svg";
import smartphone from "@/public/smartphonebg.png";
import reaction1 from "@/public/reaction1.png";
import reaction2 from "@/public/row.png";

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["600", "700"],
});

// Define the type for the animation JSON data
type AnimationData = {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: any[];
  layers: any[];
};

function DetailSection() {
  const travelList = [
    "Turn itinerary pdfs into interactive plan",
    "Sync activities with your calendar",
    "Travelers access notes and docs in one place",
    "Track and split trip expenses",
  ];

  // Use state to manage animation data
  const [animationData1, setAnimationData1] = useState<AnimationData | null>(
    null
  );
  const [animationData2, setAnimationData2] = useState<AnimationData | null>(
    null
  );

  useEffect(() => {
    // Load animation JSON dynamically and extract default export
    import("@/public/Itinerary-JSON.json").then((module) =>
      setAnimationData1(module.default)
    );
    import("@/public/Campaign-JSON.json").then((module) =>
      setAnimationData2(module.default)
    );
  }, []);

  return (
    <div
      className={`${raleway.className} pt-8 pb-6 min-h-fit h-fit relative flex flex-col`}
    >
      <div className="mx-auto flex flex-col sm:flex-row gap-4 sm:gap-x-12 max-w-6xl w-full px-6 sm:px-8 mb-4 sm:mb-8">
        <div className="space-y-10 sm:space-y-28">
          {/* First Section */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-x-32">
            <div className="p-2 space-y-4 sm:space-y-[23px] flex-1">
              <h2 className="text-lg sm:text-[27px] font-semibold sm:tracking-tight text-[#525266]">
                Boost Traveler Satisfaction and Drive Repeat Bookings
              </h2>
              <p className="text-sm sm:text-base leading-[20px] sm:leading-[35px] text-[#5252666e]">
                Travel companies experience a{" "}
                <span className="font-extrabold text-[#525266]">
                  45%+ increase in re-bookings
                </span>{" "}
                through Frienzy&apos;s re-targeting campaigns.
              </p>
            </div>
            <div
              className="bg-no-repeat rounded-3xl h-fit p-4 flex justify-center items-center flex-1"
              style={{
                backgroundImage: `url(${frame1.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="w-full sm:w-[480px]">
                {animationData1 && (
                  <Lottie animationData={animationData1} loop />
                )}
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="flex flex-col sm:flex-row-reverse items-center gap-4 sm:gap-x-32">
            <div className="p-2 space-y-4 sm:space-y-[23px] flex-1">
              <h2 className="text-lg sm:text-[27px] font-semibold sm:tracking-tight text-[#525266]">
                One Place for Your Clients to Access Everything
              </h2>
              <p className="text-sm sm:text-base leading-[20px] sm:leading-[35px] text-[#5252666e]">
                Access itineraries, reservations, flight tickets, invoices, and
                more in one place.
              </p>
            </div>
            <div
              className="bg-no-repeat rounded-3xl h-fit p-4 flex justify-center items-center flex-1"
              style={{
                backgroundImage: `url(${frame1.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <Image
                src={phonechat}
                alt="real time chat"
                width={400}
                height={400}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Third Section */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-x-32">
            <div className="p-2 space-y-4 sm:space-y-[23px] flex-1">
              <h2 className="text-lg sm:text-[27px] font-semibold sm:tracking-tight text-[#525266]">
                Save 10+ Hours A Week With Frienzy&apos;s AI
              </h2>
              <p className="text-sm sm:text-base leading-[20px] sm:leading-[35px] text-[#5252666e]">
                Travel operators{" "}
                <span className="font-extrabold text-[#525266]">
                  save 10+ hours a week
                </span>{" "}
                with AI-driven tools.
              </p>
              <ul className="space-y-2">
                {travelList.map((content, index) => (
                  <li key={index} className="flex items-center gap-x-4">
                    <Image
                      src={check}
                      alt="check icon"
                      width={18}
                      height={18}
                    />
                    <span className="text-sm sm:text-base text-[#5252666e]">
                      {content}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="bg-no-repeat rounded-3xl h-fit p-4 flex justify-center items-center flex-1"
              style={{
                backgroundImage: `url(${frame1.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="w-full sm:w-[480px]">
                {animationData2 && (
                  <Lottie animationData={animationData2} loop />
                )}
              </div>
            </div>
          </div>

          {/* Fourth Section */}
          <div className="flex flex-col sm:flex-row-reverse items-center gap-4 sm:gap-x-32">
            <div className="p-2 space-y-4 sm:space-y-[23px] flex-1">
              <h2 className="text-lg sm:text-[27px] font-semibold sm:tracking-tight text-[#525266]">
                Build Your Community With In-Trip Engagement
              </h2>
              <p className="text-sm sm:text-base leading-[20px] sm:leading-[35px] text-[#5252666e]">
                Keep travelers engaged through{" "}
                <span className="font-extrabold text-[#525266]">
                  in-app group chat, polls, and shared albums
                </span>
                .
              </p>
            </div>

            <div
              className="relative w-full max-w-lg mx-auto rounded-3xl p-4 border border-[#FAC9B9] flex justify-center items-center bg-no-repeat"
              style={{
                backgroundImage: `url(${smartphone.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                minHeight: "250px",
                height: "420px",
              }}
            >
              <Image
                src={reaction1}
                alt="reaction 1"
                width={400}
                height={400}
                quality={100}
                className="absolute -right-2 sm:-right-16 -top-4 sm:-top-8 w-[300px] sm:w-[300px] md:w-[400px] object-contain"
              />
              <Image
                src={reaction2}
                alt="reaction 2"
                width={160}
                height={160}
                className="absolute bottom-4 sm:bottom-8 -left-2 sm:-left-6 w-[80px] sm:w-[120px] md:w-[160px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailSection;
