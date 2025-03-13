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
      <div className="mx-auto sm:p-8 p-6 gap-x-8 sm:gap-x-12 max-w-6xl">
        <h3 className="text-center font-[500] sm:font-[600] text-[#525266] !text-[16px] !sm:text-4xl  sm:leading-[40px]  !leading-[20px] ">
          From Order to Launch: <br /> Your Frienzy White-Label Timeline
        </h3>
        <p className="text-center font-[300] text-[12px] sm:text-[18px]  sm:font-[400] text-[#525266] ">
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
