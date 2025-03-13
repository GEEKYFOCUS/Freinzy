// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "./ui/button";
// // import { useRouter } from "next/navigation";
// import appLogo from "@/public/logo.svg";
// import signPost from "@/public/signpost.svg";

// import { Raleway } from "next/font/google";

// // ✅ Customize font options
// const raleway = Raleway({
//   subsets: ["latin"],
//   weight: ["600", "700"], // Add required weights
// });

// export const schoolSocialPages = [
//   { link: "twitter.com", icon: "images/twitter.svg" },
//   {
//     link: "instagram.com",
//     icon: "images/instagram.svg",
//   },
//   {
//     link: "facebook.com",
//     icon: "images/facebook.svg",
//   },
//   {
//     link: "youtube.com",
//     icon: "images/youtube.svg",
//   },
// ];

// export function SiteNavBar() {
//   return (
//     <header className="sticky font-outfit top-0 z-50 w-full border-border/40  bg-background/95 backdrop-blur [backdrop-filter]:bg-background/60 border-b-2 shadow-xs">
//       <nav className="container flex h-14 items-center mx-auto justify-between   px-2 py-6 sm:px-2 sm:py-12 max-w-6xl">
//         <Link href="#" className="flex items-center  gap-x-[.1rem]">
//           <Image
//             src={appLogo}
//             alt="logo"
//             width={48}
//             height={48}
//             className="object-contain sm:h-[31px] sm:aspect-square"
//           />
//           <span className="font-[900] text-3xl text-[#FA602D]">frienzy</span>
//         </Link>
//         <ul
//           className={` ${raleway.className} flex items-center gap-x-6 list-none `}
//         >
//           <li>
//             <Link href={"/schools"} className="flex items-center gap-2 p-1">
//               <Image
//                 src={signPost}
//                 alt="sign-post"
//                 width={24}
//                 height={24}
//                 className="object-contain"
//               />
//               <span className="font-[700] text-base  text-gray-800 hover:text-gray-700">
//                 For Business{" "}
//               </span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               href={"/vendors"}
//               className="font-[600]  p-1 text-[#939399] hover:text-gray-500"
//             >
//               For Travelers
//             </Link>
//           </li>
//           <li>
//             <Link
//               href={"/contact-us"}
//               className="font-[600] p-1 text-base text-[#939399] hover:text-gray-500"
//             >
//               Blog
//             </Link>
//           </li>
//         </ul>
//         <div className="flex items-center gap-2">
//           <Button
//             className={`${raleway.className} cursor-pointer  sm:text-base text-sm font-700 text-white bg-orange-600 rounded-full sm:px-5 sm:py-6 hover:bg-orange-500  px-3 py-4 `}
//           >
//             {" "}
//             Contact Us
//           </Button>
//           <Button
//             className={`${raleway.className} cursor-pointer  sm:text-base text-sm font-700 text-white  bg-stone-700  rounded-full sm:px-5 sm:py-6 hover:bg-stone-600  px-3 py-4 `}
//           >
//             Book a Demo
//           </Button>
//         </div>
//       </nav>
//     </header>
//   );
// }
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import appLogo from "@/public/logo.svg";
import signPost from "@/public/signpost.svg";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export function SiteNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     if (isOpen) {
  //       document.body.style.overflow = "hidden";
  //       // Prevent scrolling
  //     } else {
  //       document.body.style.overflow = "scroll";
  //       // Restore scrolling
  //     }

  //     return () => {
  //       document.body.style.overflow = "";
  //       // Cleanup on unmount
  //     };
  //   }
  // }, [isOpen]);
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 bg-background/95 backdrop-blur border-border/40 shadow-xs">
      <nav className="container mx-auto flex h-14 items-center justify-between px-4 py-6 sm:px-6 sm:py-8 max-w-6xl">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-x-[.2px] gap-x-">
          <Image
            src={appLogo}
            alt="logo"
            width={48}
            height={48}
            className="object-contain lg:h-[31px] sm:h-[26px]   sm:aspect-square"
          />
          <span className="font-[900] lg:text-3xl sm:text-md md:text-md text-[#FA602D]">
            frienzy
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul
          className={`hidden opacity-0 sm:opacity-100 sm:flex items-center gap-x-6 ${raleway.className} sm:text-[12px] md:text-xs lg:text-base`}
        >
          <li>
            <Link href="/schools" className="flex items-center gap-2 p-1">
              <Image
                src={signPost}
                alt="sign-post"
                width={24}
                height={24}
                className="object-contain sm:w-auto   md:w-[18px] lg:w-auto  "
              />
              <span className="font-[700] sm:text-base md:text-xs lg:text-base  text-gray-800 hover:text-gray-700">
                For Business
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/vendors"
              className="sm:font-[600] md:font-[500] lg:font-[600]    p-1 text-[#939399] hover:text-gray-500"
            >
              For Travelers
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className="sm:font-[600] md:font-[500] lg:font-[600]    p-1 text-[#939399] hover:text-gray-500"
            >
              Blog
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          <Button
            className={`${raleway.className} bg-orange-600 text-white rounded-full sm:px-2 sm:py-3 md:px-4 md:py-3 lg:px-5 lg:py-3 hover:bg-orange-500`}
          >
            Contact Us
          </Button>
          <Button
            className={`${raleway.className} bg-stone-700 text-white rounded-full sm:px-2 sm:py-3 md:px-4 md:py-3 lg:px-5 lg:py-3 hover:bg-stone-600`}
          >
            Book a Demo
          </Button>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden focus:outline-none"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Overlay to blur the background */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 backdrop-blur-md transition-opacity duration-300 z-40 min-h-screen"
          onClick={() => setIsOpen(false)} // Close menu when clicking outside
        ></div>
      )}

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[85%] bg-[#FA602D] shadow-lg z-50 overflow-hidden
          transform transition-transform duration-300 ease-in-out
          ${
            isOpen ? "translate-x-0 opacity-100" : "-translate-x-200 opacity-0 "
          } 
          sm:hidden`}
      >
        <div className="p-6 relative h-full flex flex-col justify-between">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4"
          >
            <X size={32} />
          </button>

          {/* Navigation Links */}
          <ul className="mt-10 flex flex-col gap-6 text-lg font-semibold">
            <li>
              <Link
                href="/schools"
                className="block p-2"
                onClick={() => setIsOpen(false)}
              >
                For Business
              </Link>
            </li>
            <li>
              <Link
                href="/vendors"
                className="block p-2"
                onClick={() => setIsOpen(false)}
              >
                For Travelers
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="block p-2"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className="mt-auto flex flex-col gap-4">
            <Button
              className="w-fit bg-orange-600 text-white rounded-full py-3"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Button>
            <Button
              className="w-fit bg-stone-700 text-white rounded-full py-3"
              onClick={() => setIsOpen(false)}
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
