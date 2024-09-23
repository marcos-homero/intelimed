import { MapPinned } from "lucide-react";
import Image from "next/image";
import intelimed from "@/public/intelimed.png";

const About = () => {
  return (
    <div className="flex flex-col lg:justify-between items-center lg:flex-row py-16 px-8 gap-8 lg:px-32">
      <div className="lg:w-1/2 flex justify-between lg:justify-around lg:py-8 flex-col gap-8 lg:gap-4">
        <h4 className="text-[#031432] max-lg:text-center text-2xl font-semibold">
          Klinik 24 siap.
        </h4>
        <p className="text-secondary text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          voluptas, nesciunt quam animi quasi placeat a rem, architecto earum
        </p>
        <button className="flex items-center max-lg:self-center w-fit py-3 gap-4 px-8 text-white text-sm  rounded-full bg-gradient-to-r from-primary to-[#6f3afa] ">
          <MapPinned />
          Saiba Mais
        </button>
      </div>
      <div className="lg:w-1/2 rounded-md">
        <Image
          src={intelimed}
          alt="Picture of the author"
          className="rounded-[32px]"
        />
      </div>
    </div>
  );
};

export default About;
