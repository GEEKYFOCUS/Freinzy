import { Raleway } from "next/font/google";
import { Button } from "./ui/button";
// import Image from "next/image";
// import herobg from "@/public/hero-bg.png";
// import herosample from "@/public/sample-app.png";
// import demobtnverlay from "@/public/demo-overlay.png";
// import herocloud from "@/public/cloud1.png";
// ✅ Customize font options
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["600", "700"], // Add required weights
});
interface Question {
  title: string;
  content: string;
}
function QuestionSection() {
  const questions = [
    {
      title: "What is Frienzy?",
      content:
        "Frienzy is a travel planning and sharing app that helps you create personalized itineraries, manage group expenses, and share your travel experiences with friends and the broader community.",
    },
    {
      title: "How do I create an itinerary?",
      content:
        "Sign up, enter your trip details, and use our intuitive interface to add activities, accommodations, and more. You can share the itinerary with your travel companions for seamless planning.",
    },
    {
      title: "Can I track expenses with Frienzy?",
      content:
        "Yes, Frienzy allows you to track group expenses, making it easy to manage your travel budget and split costs with friends.",
    },
  ];

  return (
    <div
      className={` ${raleway.className} sm:pt-16 pt-8 pb-6  min-h-fit h-fit relative flex flex-col bg-[#FFF9ED] `}
    >
      <div className=" mx-auto sm:p-8 p-6  gap-x-2 sm:gap-x-12 max-w-screen sm:max-w-6xl px-4 sm:px-8 ">
        {/* <div className="flex justify-between flex-col sm:flex-row gap-x-28 gap-y-4 "> */}
        <div className="flex justify-between flex-col sm:flex-row gap-x-28 gap-y-4">
          {/* First div - Adjusted for proper sizing */}
          <div
            className="flex flex-col sm:gap-y-1 gap-y-1 py-2 px-3 flex-shrink-0 w-fit flex-1"
            style={{ flex: 1 }}
          >
            <h2 className="font-medium sm:font-semibold text-2xl sm:text-4xl text-[#525266] sm:leading-[50px] leading-[32px]">
              Got Questions?
            </h2>
            <p className=" text-[#525266] text-[12px] font-normal sm:font-medium  line-clamp-2   w-[300px] max-w-max sm:pr-8  pr-4">
              Check out our FAQ or contact us directly to get all the answers
              you need.
            </p>
            <Button
              className={`${raleway.className} mt-4 cursor-pointer sm:text-base text-sm font-bold text-white bg-orange-600 rounded-full sm:px-8 sm:py-6 hover:bg-orange-500 px-3 py-2 max-w-fit`}
            >
              Schedule Demo
            </Button>
          </div>

          {/* Second div - Takes up remaining space */}
          <div
            className="flex flex-col gap-y-2 sm:gap-y-4 flex-1"
            style={{ flex: 2 }}
          >
            {questions.map((content: Question, index: number) => (
              <div
                key={index}
                className="pb-[6px] border-b-[1.2px] border-[#242426b0]"
              >
                <h2 className="font-[500] text-[#242426] sm:font-[600] text-lg sm:text-2xl leading-5 sm:leading-9">
                  {content.title}
                </h2>
                <p className="font-[500] text-[#525266] sm:font-[600] text-[13px] leading-5 sm:leading-6 ">
                  {content.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionSection;
