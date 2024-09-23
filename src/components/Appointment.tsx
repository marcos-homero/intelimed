import { MapPinned } from "lucide-react";
import React from "react";

const Appointment = () => {
  return (
    <div className="py-16 bg-[#E2EDFF] px-8 gap-8 lg:px-32 xl:px-64">
      <div className="bg-gradient-to-r items-center justify-center flex flex-col gap-8 from-primary px-8 py-8 to-[#6f3afa] rounded-[32px] shadow-md">
        <h1 className="text-center text-white font-semibold text-2xl ">
          Agende já a sua consulta ou exame
        </h1>
        <p className="text-center text-white lg:w-1/2 text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nam
          ipsum harum quo! Totam quos, corrupti illum itaque magni, laudantium
          consequuntur impedit id in blanditiis animi dolor voluptatibus nemo
          voluptatum.
        </p>
        <button className="flex items-center max-lg:self-center w-fit py-3 gap-4 px-8 text-primary font-semibold text-sm  rounded-full bg-white">
          <MapPinned />
          Saiba Mais
        </button>
      </div>
    </div>
  );
};

export default Appointment;
