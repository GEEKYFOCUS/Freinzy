// import Image from "next/image";

// import dottedLine from "@/public/purple-stick.png";

// export default function Roadmap() {
//   const roadmapData = [
//     {
//       id: 1,
//       title: "Kickoff Meeting (Week 1)",
//       description:
//         "We confirm branding (logo, colors, fonts) and finalize app settings & features.",
//     },
//     {
//       id: 2,
//       title: "App Store Account Setup (Weeks 1-3)",
//       description: `You will apply for an Apple Developer account (requires a DUNS number, which can take 1-2 weeks). Once Apple approves, you'll add us as an admin so we can publish the app on your behalf.`,
//     },
//     {
//       id: 3,
//       title: "Customization & App Build (Weeks 2-4)",
//       description:
//         "While your Apple Developer account is being processed, we configure your branding, preferred features, and finalize the app build.",
//     },
//     {
//       id: 4,
//       title: "App Submission & Approval (Weeks 4-6)",
//       description: `We submit your app to the Apple App Store & Google Play Store. Google's approval is usually quick, but Apple may take extra time. We monitor and handle any required updates.`,
//     },
//     {
//       id: 5,
//       title: "Launch & Onboarding (Week 6)",
//       description:
//         "Once approved, your app is live! We provide training and support to ensure a smooth rollout to your travelers.",
//     },
//   ];

//   return (
//     <div className="relative max-w-6xl mx-auto py-10">
//       {/* Center Line */}
//       <div className="absolute left-1/2 transform -translate-x-1/2 h-[90%]">
//         <Image
//           src={dottedLine}
//           alt="dotted-vertical-line"
//           width={12}
//           //  Adjust if  needed
//           height={48}
//           // Adjust if needed
//           quality={80}
//           className="object-contain h-full"
//         />
//       </div>

//       {/* Roadmap Items */}
//       <div className="relative flex flex-col items-center space-y-12">
//         {roadmapData.map((item, index) => (
//           <div key={item.id} className="relative flex items-center w-full">
//             {/* Content on Left for Odd indexes */}
//             {index % 2 !== 0 && (
//               <div className="w-1/2 text-right pr-6 translate-y-12">
//                 <div className="flex sm:gap-x-4 ">
//                   <div className="space-x-1 sm:space-y-2">
//                     <h3 className="text-[16px] sm:text-[20px] font-[600] sm:font-[700] text-[#525266]">
//                       {item.title}
//                     </h3>
//                     <p className="text-[#525266c4] text-[10px] sm:text-[14px] font-[300] sm:font-[400]">
//                       {item.description}
//                     </p>
//                   </div>
//                   <div className="bg-[#B2B2B2] p-1 rounded-lg w-fit max-w-fit justify-self-start place-self-start">
//                     <div className="bg-[#6060BF] text-white px-3 py-1 rounded-lg">
//                       0{index + 1}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Content on Right for Even indexes (Fixed) */}
//             {index % 2 === 0 && (
//               <div className="w-1/2 pl-6 text-left ml-auto">
//                 <div className="flex sm:gap-x-4  ">
//                   <div className="bg-[#B2B2B2] p-1 rounded-lg w-fit max-w-fit justify-self-start place-self-start">
//                     <div className="bg-[#6060BF] text-white px-3 py-1 rounded-lg">
//                       0{index + 1}
//                     </div>
//                   </div>
//                   <div className="space-x-1 sm:space-y-2">
//                     <h3 className="text-[16px] sm:text-[20px] font-[600] sm:font-[700] text-[#525266]">
//                       {item.title}
//                     </h3>
//                     <p className="text-[#525266c4] text-[10px] sm:text-[14px] font-[300] sm:font-[400] ">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import dottedLine from "@/public/purple-stick.png";

export default function Roadmap() {
  const roadmapData = [
    {
      id: 1,
      title: "Kickoff Meeting (Week 1)",
      description:
        "We confirm branding (logo, colors, fonts) and finalize app settings & features.",
    },
    {
      id: 2,
      title: "App Store Account Setup (Weeks 1-3)",
      description: `You will apply for an Apple Developer account (requires a DUNS number, which can take 1-2 weeks). Once Apple approves, you'll add us as an admin so we can publish the app on your behalf.`,
    },
    {
      id: 3,
      title: "Customization & App Build (Weeks 2-4)",
      description:
        "While your Apple Developer account is being processed, we configure your branding, preferred features, and finalize the app build.",
    },
    {
      id: 4,
      title: "App Submission & Approval (Weeks 4-6)",
      description: `We submit your app to the Apple App Store & Google Play Store. Google's approval is usually quick, but Apple may take extra time. We monitor and handle any required updates.`,
    },
    {
      id: 5,
      title: "Launch & Onboarding (Week 6)",
      description:
        "Once approved, your app is live! We provide training and support to ensure a smooth rollout to your travelers.",
    },
  ];

  return (
    <>
      <div className="relative max-w-6xl mx-auto py-10 px-4 sm:hidden block">
        {/* Dotted Line */}
        {/* <div className="absolute left-1/2 -translate-x-1/2  h-full hidden md:block">
          <Image
            src={dottedLine}
            alt="dotted-vertical-line"
            width={12}
            height={48}
            quality={80}
            className="object-contain h-full absolute top-20 "
          />
        </div> */}

        <div className="absolute left-4 transform bottom-16  -translate-x-1/2 h-[85%]">
          <Image
            src={dottedLine}
            alt="dotted-vertical-line"
            width={12}
            //  Adjust if  needed
            height={48}
            // Adjust if needed
            quality={80}
            className="object-contain h-full"
          />
        </div>

        {/* Mobile Dotted Line */}
        {/* <div className="absolute left-4 h-full w-[2px] bg-[#B2B2B2] md:hidden"></div> */}

        {/* Roadmap Items */}
        <div className="relative flex flex-col items-start md:items-center space-y-12 ml-3">
          {roadmapData.map((item, index) => (
            <div
              key={item.id}
              className="relative flex w-full items-center md:items-start"
            >
              {/* Mobile View - Single Column */}
              <div className="flex gap-2 items-center md:hidden">
                {/* Number Badge */}
                <div className="bg-[#B2B2B2] p-1 rounded-lg justify-self-start place-self-start">
                  <div className="bg-[#6060BF] text-white px-1 py-1 rounded-lg">
                    0{index + 1}
                  </div>
                </div>
                {/* Text Content */}
                <div>
                  <h3 className="text-[16px] font-[600] text-[#525266]">
                    {item.title}
                  </h3>
                  <p className="text-[#525266c4] text-[12px]">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Desktop View - Alternating Layout */}
              <div
                className={`hidden md:flex w-1/2 ${
                  index % 2 !== 0 ? "text-right pr-6 justify-end" : "pl-6"
                }`}
              >
                {index % 2 === 0 && (
                  <div className="bg-[#B2B2B2] p-1 rounded-lg">
                    <div className="bg-[#6060BF] text-white px-3 py-1 rounded-lg">
                      0{index + 1}
                    </div>
                  </div>
                )}
                <div className="space-y-2">
                  <h3 className="text-[20px] font-[700] text-[#525266]">
                    {item.title}
                  </h3>
                  <p className="text-[#525266c4] text-[14px]">
                    {item.description}
                  </p>
                </div>
                {index % 2 !== 0 && (
                  <div className="bg-[#B2B2B2] p-1 rounded-lg">
                    <div className="bg-[#6060BF] text-white px-3 py-1 rounded-lg">
                      0{index + 1}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto py-10 sm:block hidden">
        <div className="absolute left-1/2 transform top-12 -translate-x-1/2 h-[90%]">
          <Image
            src={dottedLine}
            alt="dotted-vertical-line"
            width={12}
            //  Adjust if  needed
            height={48}
            // Adjust if needed
            quality={80}
            className="object-contain h-full"
          />
        </div>
        {/* Roadmap Items */}
        <div className="relative flex flex-col items-center space-y-12">
          {roadmapData.map((item, index) => (
            <div key={item.id} className="relative flex items-center w-full">
              {/* Content on Left for Odd indexes */}
              {index % 2 !== 0 && (
                <div className="w-1/2 text-right pr-6 translate-y-12">
                  <div className="flex sm:gap-x-4 ">
                    <div className="space-x-1 sm:space-y-2">
                      <h3 className="text-[16px] sm:text-[20px] font-[600] sm:font-[700] text-[#525266]">
                        {item.title}
                      </h3>
                      <p className="text-[#525266c4] text-[10px] sm:text-[14px] font-[300] sm:font-[400]">
                        {item.description}
                      </p>
                    </div>
                    <div className="bg-[#B2B2B2] p-1 rounded-lg w-fit max-w-fit justify-self-start place-self-center">
                      <div className="bg-[#6060BF] text-white px-3 py-1 rounded-lg">
                        0{index + 1}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Content on Right for Even indexes (Fixed) */}
              {index % 2 === 0 && (
                <div className="w-1/2 pl-6 text-left ml-auto">
                  <div className="flex sm:gap-x-4  ">
                    <div className="bg-[#B2B2B2] p-1 rounded-lg w-fit max-w-fit justify-self-start place-self-center">
                      <div className="bg-[#6060BF] text-white px-3 py-1 rounded-lg">
                        0{index + 1}
                      </div>
                    </div>
                    <div className="space-x-1 sm:space-y-2">
                      <h3 className="text-[16px] sm:text-[20px] font-[600] sm:font-[700] text-[#525266]">
                        {item.title}
                      </h3>
                      <p className="text-[#525266c4] text-[10px] sm:text-[14px] font-[300] sm:font-[400] ">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

//  {/* Timeline Dot on the Center Line (Fixed) */}
//           {/* <div className="absolute left-1/2 transform -translate-x-1/2 "> */}
//           {/* <div className="w-2 h-2 bg[#6060BF] rounded-full -translate-y-12"></div> */}

//           {/* </div> */}
