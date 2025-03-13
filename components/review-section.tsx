// import { Raleway } from "next/font/google";
// import { Button } from "./ui/button";
// import Image from "next/image";
// import ScrollingLogos from "@/components/logos-slide";
// // ✅ Customize font options
// const raleway = Raleway({
//   subsets: ["latin"],
//   weight: ["600", "700"], // Add required weights
// });

// interface reviewListType {
//   title: string;
//   image: string;
//   content: string;
// }

// interface UserReviewType {
//   user: string;
//   role: string;
//   logo: string;
//   review: string;
//   reviewerLogo: string;
// }

// function ReviewSection() {
//   const reviewList = [
//     {
//       title: "Tour Operators & Group Trip Planners",
//       content:
//         "Offer seamless, in-app travel coordination and post-trip marketing.",
//       image: "/review1.png",
//     },
//     {
//       title: " Luxury & Bespoke Travel Agencies",
//       content: "Provide premium service with a fully branded experience",
//       image: "/review2.png",
//     },
//     {
//       title: "Educational & Student Travel Companies",
//       content: "Keep students, parents, and faculty informed and engaged.",
//       image: "/review3.png",
//     },
//   ];

//   // const companyLogo = [
//   //   "/companyLogo1.png",
//   //   "/companyLogo2.png",
//   //   "/companyLogo3.png",
//   //   "/companyLogo4.png",
//   //   "/companyLogo5.png",
//   //   "/companyLogo6.png",
//   //   "/companyLogo7.png",
//   //   "/companyLogo8.png",
//   // ];

//   const userReviewList = [
//     {
//       user: "Brandon Heller",
//       role: "Founder , CEO",
//       logo: "/reviewerLogo1.png",
//       review: `“Frienzy  has completely transformed how we manage group travel for our clients. The seamless itinerary sharing, expense tracking, and in-trip
//   Communication…helps us build lasting relationships and keep clients coming back.”`,
//       reviewerLogo: "/userReview1.png",
//     },
//     {
//       user: "Lindsy Weeks",
//       role: "Director of Operations",
//       logo: "/reviewerLogo2.png",
//       review: `“Frienzy  has completely transformed how we manage group travel for our clients. The seamless itinerary sharing, expense tracking, and in-trip
//   communication helps us build lasting relationships and keep clients coming back.”`,
//       reviewerLogo: "/userReview2.png",
//     },
//     {
//       user: "Lindsy Weeks",
//       role: "Director of Operations",
//       logo: "/reviewerLogo3.png",
//       review: `“Before Frienzy, we were juggling spreadsheets, PDFs, and endless group chats to keep our student trips organized. Now, everything is in one place….”`,
//       reviewerLogo: "/userReview3.png",
//     },
//   ];

//   return (
//     <div
//       className={` ${raleway.className} sm:pt-16 pt-8 pb-6  min-h-fit h-fit relative flex flex-col bg-[#3A4096] `}
//     >
//       <div className=" mx-auto  gap-x-2 sm:gap-x-12 max-w-6xl">
//         <div className="flex justify-between sm:flex-row flex-col">
//           <div className="p-2 flex flex-col sm:gap-y-6 gap-y-4 flex-1">
//             <div className="relative  font-[700] text-xs  text-slate-800 bg-[#FFEFEA] rounded-full w-fit px-3 py-2">
//               ✨Frienzy ✨ White Label App Use case
//             </div>
//             <h2 className="text-[30px] text-white sm:text-[47px] font-[500] sm:font-[600] leading-[58px]">
//               Who Is Frienzy For?
//             </h2>
//           </div>

//           <div className="flex flex-col sm:gap-y-6 gap-y-4  p-2 flex-1">
//             <p className="leading-[24px] sm:leading-[35px]  text-white/50 font-[300] sm:font-[400]   text-[12px] sm:text-[17px]  ">
//               If you&apos;re in the business of experience curation for
//               travellers, Frienzy&apos;s custom-branded travel app lets you bake
//               a wow experience into all of your touchpoints with travel clients.
//             </p>
//             <Button
//               className={`${raleway.className}  cursor-pointer  sm:text-base text-sm font-700 text-white/70 bg-orange-600 rounded-xl sm:px-5 sm:py-6 hover:bg-orange-500  px-3 py-4 max-w-fit   `}
//             >
//               {" "}
//               Schedule A Demo
//             </Button>
//           </div>
//         </div>
//         <div className="flex flex-col sm:flex-row sm:gap-x-4 sm:mt-6 ">
//           {reviewList.map((item: reviewListType, index: number) => (
//             <div
//               key={index}
//               className="flex flex-col gap-y-1 bg-[#2C2C80] p-2 rounded-xl h-full sm:min-h-[340px]   flex-1"
//             >
//               <div className="w-full h-[180px] sm:h-[220px]">
//                 <Image
//                   src={item.image}
//                   alt="team operation"
//                   quality={80}
//                   width={390}
//                   height={270}
//                   className="rounded-xl object-cover w-full h-full"
//                 />
//               </div>

//               <h3 className="text-[16px] sm:text-[20px] text-white font-semibold leading-[22px] sm:leading-[26px]">
//                 {item.title}
//               </h3>

//               <p className="text-white/50 font-light text-[10px] sm:text-[14px] leading-[16px] sm:leading-[22px] flex-1">
//                 {item.content}
//               </p>
//             </div>
//           ))}
//         </div>
//         <div className="flex flex-col sm:flex-row sm:gap-x-4 gap-y-4 sm:mt-6 mt-2">
//           {userReviewList.map((content: UserReviewType, index: number) => (
//             <div
//               key={index}
//               className="flex flex-col gap-y-4 bg-[#4A4A98]/50 backdrop-blur-lg p-4 rounded-xl  w-full flex-1  shadow-lg"
//             >
//               {/* User Info & Logo */}
//               <div className="flex justify-between items-center">
//                 {/* User Profile */}
//                 <div className="flex items-center gap-x-3">
//                   <Image
//                     src={content.reviewerLogo}
//                     alt="user-image"
//                     width={48}
//                     height={48}
//                     quality={80}
//                     className="rounded-full"
//                   />
//                   <div className="space-y-1">
//                     <h2 className="text-white text-lg font-semibold">
//                       {content.user}
//                     </h2>
//                     <p className="text-white/50 text-sm">{content.role}</p>
//                   </div>
//                 </div>

//                 {/* Company Logo */}
//                 <Image
//                   src={content.logo}
//                   alt="company-logo"
//                   width={100}
//                   height={100}
//                   quality={90}
//                   className="object-contain"
//                 />
//               </div>

//               {/* Review Text */}
//               <p className="text-white/80 text-sm leading-relaxed">
//                 {content.review}
//               </p>
//             </div>
//           ))}
//         </div>

//         <p className=" mt-2 sm:mt-6 text-white sm:font-[700] font-[600] text-[12px] sm:text-[17px] text-center  uppercase leading-[14px] sm:leading-[25px]  ">
//           Connecting Travel Experts with Explorers
//         </p>
//         <ScrollingLogos />
//       </div>
//     </div>
//   );
// }

// export default ReviewSection;

import { Raleway } from "next/font/google";
import { Button } from "./ui/button";
import Image from "next/image";
import ScrollingLogos from "@/components/logos-slide";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["600", "700"],
});

interface ReviewListType {
  title: string;
  image: string;
  content: string;
}

interface UserReviewType {
  user: string;
  role: string;
  logo: string;
  review: string;
  reviewerLogo: string;
}

function ReviewSection() {
  const reviewList: ReviewListType[] = [
    {
      title: "Tour Operators & Group Trip Planners",
      content:
        "Offer seamless, in-app travel coordination and post-trip marketing.",
      image: "/review1.png",
    },
    {
      title: "Luxury & Bespoke Travel Agencies",
      content: "Provide premium service with a fully branded experience",
      image: "/review2.png",
    },
    {
      title: "Educational & Student Travel Companies",
      content: "Keep students, parents, and faculty informed and engaged.",
      image: "/review3.png",
    },
  ];

  const userReviewList: UserReviewType[] = [
    {
      user: "Brandon Heller",
      role: "Founder , CEO",
      logo: "/reviewerLogo1.png",
      review: `“Frienzy has completely transformed how we manage group travel for our clients. The seamless itinerary sharing, expense tracking, and in-trip communication helps us build lasting relationships and keep clients coming back.”`,
      reviewerLogo: "/userReview1.png",
    },
    {
      user: "Lindsy Weeks",
      role: "Director of Operations",
      logo: "/reviewerLogo2.png",
      review: `“Before Frienzy, we were juggling spreadsheets, PDFs, and endless group chats to keep our student trips organized. Now, everything is in one place….”`,
      reviewerLogo: "/userReview2.png",
    },
    {
      user: "Lindsy Weeks",
      role: "Director of Operations",
      logo: "/reviewerLogo3.png",
      review: `“Frienzy has completely transformed how we manage group travel for our clients. The seamless itinerary sharing, expense tracking, and in-trip communication helps us build lasting relationships and keep clients coming back.”`,
      reviewerLogo: "/userReview3.png",
    },
  ];

  return (
    <div
      className={`${raleway.className} pt-8 pb-6 mt-4  min-h-fit relative flex flex-col bg-[#3A4096]`}
    >
      <div className="mx-auto sm:max-w-6xl max-w-screen px-4 sm:px-6 lg:px-8 ">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 ">
          <div className="flex flex-col gap-4 flex-1">
            <div className="relative font-bold text-xs sm:text-sm text-slate-800 bg-[#FFEFEA] rounded-full w-fit px-3 py-2">
              ✨ Frienzy ✨ White Label App Use Case
            </div>
            <h2 className="text-white text-[clamp(26px,5vw,47px)] font-semibold leading-tight">
              Who Is Frienzy For?
            </h2>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <p className="text-white/50 font-light text-[clamp(12px,3vw,17px)] leading-relaxed">
              If you&apos;re in the business of experience curation for
              travellers, Frienzy&apos;s custom-branded travel app lets you bake
              a wow experience into all of your touchpoints with travel clients.
            </p>
            <Button className="w-fit sm:w-auto max-w-fit cursor-pointer text-sm sm:text-base font-bold text-white bg-orange-600 rounded-xl px-4 py-3 sm:px-5 sm:py-5 hover:bg-orange-500">
              Schedule A Demo
            </Button>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid gap-6 grid-cols-1 max-w-fit sm:grid-cols-2 lg:grid-cols-3 mt-8 !sm:mt-12">
          {reviewList.map((item, index) => (
            <div
              key={index}
              className="bg-[#2C2C80] p-4  rounded-xl flex flex-col gap-3"
            >
              <div className="sm:w-full w-fit h-auto">
                <Image
                  src={item.image}
                  alt="team operation"
                  quality={80}
                  width={390}
                  height={270}
                  className="rounded-xl object-cover sm:w-full sm:h-auto "
                />
              </div>
              <h3 className="text-white text-[clamp(16px,3vw,20px)] font-semibold max-w-fit">
                {item.title}
              </h3>
              <p className="text-white/50 font-light text-[clamp(10px,2.5vw,14px)] leading-relaxed max-w-fit ">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* User Reviews */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8  w-fit max-w-[100%] sm:max-w-fit sm:w-auto">
          {userReviewList.map((content, index) => (
            <div
              key={index}
              className="bg-[#4A4A98]/50 backdrop-blur-lg p-4 rounded-xl shadow-lg  sm:max-w-auto"
            >
              {/* User Info & Logo */}
              <div className="flex flex-col gap-y-2 sm:flex-row justify-between items-start sm:items-center">
                <div className="flex items-center gap-3">
                  <Image
                    src={content.reviewerLogo}
                    alt="user-image"
                    width={48}
                    height={48}
                    quality={80}
                    className="rounded-full"
                  />
                  <div>
                    <h2 className="text-white text-lg font-semibold">
                      {content.user}
                    </h2>
                    <p className="text-white/50 text-sm ">{content.role}</p>
                  </div>
                </div>
                <Image
                  src={content.logo}
                  alt="company-logo"
                  width={80}
                  height={80}
                  quality={90}
                  className="object-contain w-auto h-auto"
                />
              </div>

              {/* Review Text */}
              <p className="text-white/80 text-sm leading-relaxed mt-3 max-w-screen sm:max-w-fit">
                {content.review}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-6 text-white font-semibold text-[clamp(12px,3vw,17px)] text-center uppercase ">
          Connecting Travel Experts with Explorers
        </p>
        <ScrollingLogos />
      </div>
    </div>
  );
}

export default ReviewSection;
