import About from "@/components/About";
import Appointment from "@/components/Appointment";
import HeroSection from "@/components/HeroSection";
import Location from "@/components/Location";
import MedicalServices from "@/components/MedicalServices";
import Partners from "@/components/Partners";
import Review from "@/components/Review";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <Partners />
      <MedicalServices />
      <Location />
      <About />
      <Appointment />
      <Review />
    </div>
  );
}
