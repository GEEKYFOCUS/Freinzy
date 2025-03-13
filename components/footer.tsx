

import { Raleway } from "next/font/google";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import appLogo from "@/public/Logo.png";

// ✅ Customize font options
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["600", "700"], // Add required weights
});

function Footer() {
  const resources = [
    { content: "For Travelers", link: "#" },
    { content: "For Business", link: "#" },
    { content: "Itinerary generator", link: "#" },
    { content: "AI Itinerary planner", link: "#" },
    { content: "Tour operator software", link: "#" },
    { content: "Tour operator booking software", link: "#" },
    { content: "Contact Us", link: "#" },
    { content: "Blog", link: "#" },
  ];

  const legal = [
    { content: "Support", link: "#" },
    { content: "Privacy policy", link: "#" },
    { content: "Terms of use", link: "#" },
    { content: "Cookie policy", link: "#" },
  ];

  const socials = [
    { content: "Instagram", link: "#" },
    { content: "Facebook", link: "#" },
    { content: "Twitter(X)", link: "#" },
    { content: "LinkedIn", link: "#" },
  ];

  return (
    <div
      className={`${raleway.className} sm:pt-16 pt-8 pb-6 relative flex flex-col`}
    >
      <div className="mx-auto sm:p-8 p-6 gap-x-2 sm:gap-x-12 sm:max-w-6xl max-w-screen">
        <div className="flex flex-col sm:flex-row justify-between gap-y-8 sm:gap-x-8">
          {/* Left Side (Logo & Lists) */}
          <div className="sm:space-y-12 space-y-4 py-4 px-2">
            <div className="max-w-fit">
              <Link href="#" className="flex items-center gap-x-[-.2rem]">
                <Image
                  src={appLogo}
                  alt="logo"
                  width={120}
                  height={120}
                  className="object-contain sm:w-[200px]  h-[60px] "
                />
                {/* <span className="font-[900] text-2xl sm:text-6xl sm:leading-[-8px] leading-[-6px] text-[#FA602D]  font-(family-name:--font-geist-sans)">
                  frienzy
                </span> */}
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-x-20 gap-y-6">
              <ul className="space-y-2">
                <li className="font-[600] sm:font-[700]  sm:text-[14px] text-[12px] ">
                  Resources
                </li>
                {resources.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="text-[#242426] hover:text-orange-600 font-[400] sm:font-[500]  sm:text-[14px] text-[12px]"
                    >
                      {item.content}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                <li className="font-[600] sm:font-[700]  sm:text-[14px] text-[12px]">
                  Legal and Support
                </li>
                {legal.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="text-[#242426] hover:text-orange-600 font-[400] sm:font-[500]  sm:text-[14px] text-[12px]"
                    >
                      {item.content}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                <li className="font-[600] sm:font-[700]  sm:text-[14px] text-[12px]">
                  Socials
                </li>
                {socials.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="text-[#242436] hover:text-orange-600 font-[400] sm:font-[400]  sm:text-[14px] text-[12px]"
                    >
                      {item.content}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side (Subscription Form) */}
          <div className="flex flex-col space-y-4 sm:w-2/3 py-4 px-2 sm:pl-28 ">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Subscribe to get updates
            </h2>
            <p className="text-gray-600">
              Subscribe to get the latest news, updates, new features, and
              product releases. Don&apos;t miss out on the future of event
              communication and safety - subscribe now!
            </p>
            <div className="flex items-center  border border-gray-300 rounded-full p-[.4px] py-[.9px]   sm:p-[.5px] placeholder:text-xs sm:placeholder:text-base ">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-2 outline-none text-gray-700"
              />
              <Button className="ml-4 bg-orange-600 hover:bg-orange-500 text-white sm:px-5 sm:py-3 py-1  px-3 rounded-full  max-[360px]:-translate-x-[66.67%] transform sm:translate-x-0 ">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 border-t-2 border-gray-300">
        <div className="max-w-6xl sm:px-32 px-4">
          <p className="font-[400] sm:font-[500] text-[12px]">
            © 2024 Frienzy. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
