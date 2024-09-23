"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import missao from "@/public/missao.png";
import Autoplay from "embla-carousel-autoplay";

const Partners = () => {
  return (
    <div className="bg-[#E2EDFF] flex flex-col items-center py-16 gap-8">
      <h2 className="text-[#031432] text-2xl font-semibold">Convênios</h2>
      <Carousel
        className="w-full px-8 lg:px-32"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
              <div className=" relative">
                <Image
                  src={missao}
                  sizes="100vw"
                  // Make the image display full width
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  alt="Picture of the author"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Partners;
