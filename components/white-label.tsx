import { Raleway } from "next/font/google";
import Roadmap from "@/components/roadmap";

// import { Button } from "./ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import appLogo from "@/public/logo.svg";

// ✅ Customize font options
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["600", "700"], // Add required weights
});

function WhiteLabel() {
  return (
    <div
      className={`${raleway.className} sm:pt-16 pt-8 pb-6 relative flex flex-col`}
    >
      <div className="mx-auto sm:p-8 py-6 px-4 gap-x-8 sm:gap-x-12  max-w-6xl">
        <h3 className="text-center font-[600] sm:font-[600] text-[#525266] text-[24px] sm:text-3xl lg:[47px] sm:leading-[47px] leading-[32px] sm:mb-4 mb-2">
          From Order to Launch: <br /> Your Frienzy White-Label Timeline
        </h3>

        <p className="text-center  font-[400] text-[17.97px] sm:text-[18px]  sm:font-[400] leading-[35px]  text-[#525266ef] ">
          Here&apos;s our timeline for getting your custom-branded group travels
          app set up and published:
        </p>
        <div>
          <Roadmap />
        </div>
      </div>
    </div>
  );
}

export default WhiteLabel;
