import Image from "next/image";

const companyLogo = [
  "/companyLogo1.png",
  "/companyLogo2.png",
  "/companyLogo3.png",
  "/companyLogo4.png",
  "/companyLogo5.png",
  "/companyLogo6.png",
  "/companyLogo7.png",
  "/companyLogo8.png",
];

export default function ScrollingLogos() {
  return (
    <div className="w-full overflow-hidden mt-4 sm:mt-6 py-4">
      <div className="relative flex whitespace-nowrap animate-scroll items-center">
        {/* Duplicating Logos for Infinite Effect */}
        {[...companyLogo, ...companyLogo].map((logo, index) => (
          <div key={index} className="mx-6 flex-shrink-0">
            <Image
              src={logo}
              alt="Company Logo"
              width={78}
              height={78}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// import Image from "next/image";

// const companyLogo = [
//   "/companyLogo1.png",
//   "/companyLogo2.png",
//   "/companyLogo3.png",
//   "/companyLogo4.png",
//   "/companyLogo5.png",
//   "/companyLogo6.png",
//   "/companyLogo7.png",
//   "/companyLogo8.png",
// ];

// export default function ScrollingLogos() {
//   return (
//     <div className="w-full overflow-hidden mt-4 sm:mt-6 py-4">
//       <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
//         {companyLogo.map((logo, index) => (
//           <div key={index} className="w-16 sm:w-20 flex-shrink-0">
//             <Image
//               src={logo}
//               alt="Company Logo"
//               width={78}
//               height={78}
//               className="object-contain w-full"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
