"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: true };


const Special = ({ }) => {
  const { modelData } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#58110E]">
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
      </div>
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <div className="w-full flex flex-col md:flex-row gap-3 justify-between items-center">
          <div className="flex flex-col gap-2">
            <h3 className="font-playfair text-[#F7F4ED] text-center md:text-start">Specials</h3>
            <h1 className="max-w-[600px] text-center text-[#F7F4ED] uppercase text-5xl font-playfair md:text-5xl">
            explore our menu
            </h1>
          </div>
          <Button
            asChild
            className="z-40 flex font-playfair items-center justify-center gap-3 font-semibold px-6 py-7 uppercase bg-transparent border-white border-[2px] text-white rounded-full hover:bg-[#FFF] hover:text-[#9c5249]"
          >
            <Link href='/menu'>
              View Menu
              <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2">
          {modelData &&
            <EmblaCarousel slides={modelData} options={OPTIONS} />
          }
        </div>
      </div>
    </section>
  );
};

export default Special;
