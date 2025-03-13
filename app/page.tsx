import { SiteNavBar } from "@/components/app-header";
import HeroSection from "@/components/hero-section";
import UltimateSection from "@/components/ultimate-section";
import DetailSection from "@/components/detail-section";
import ReviewSection from "@/components/review-section";
import WhiteLabel from "@/components/white-label";
import QuestionSection from "@/components/question-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <SiteNavBar />
      <HeroSection />
      <UltimateSection />
      <DetailSection />
      <ReviewSection />
      <WhiteLabel />
      <QuestionSection />
      <Footer />
    </>
  );
}
