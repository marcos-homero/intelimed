import Image from "next/image";

import doctor from "@/public/doctor.png";

const HeroSection = () => {
  return (
    <div
      id="herosection"
      className="flex flex-col lg:flex-row lg:justify-between gap-4 px-8 max-lg:py-16 lg:px-32 xl:px-64 items-center"
    >
      <div className="lg:w-2/5 flex flex-col gap-8 max-lg:py-4">
        <h1 className="text-primary text-4xl max-lg:text-center lg:text-2xl xl:text-4xl font-bold">
          Klinik 24 siap melayani keluhan masyarakat selama 24/7.
        </h1>
        <p className="text-secondary text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          voluptas, nesciunt quam animi quasi placeat a rem, architecto earum
          debitis accusantium sit deleniti repellendus nisi? Eius corrupti illum
          qui deserunt!
        </p>
        <button className="flex items-center max-lg:self-center w-fit py-3 gap-4 px-8 text-white text-sm  rounded-full bg-gradient-to-r from-primary to-[#6f3afa] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
            />
          </svg>
          Saiba Mais
        </button>
      </div>
      <div className="flex w-4/5 lg:w-2/5">
        <Image
          src={doctor}
          className="w-full h-auto"
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default HeroSection;
