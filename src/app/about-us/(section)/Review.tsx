"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-transparent">
      <div className="flex h-full w-full max-w-[1300px] flex-col items-start justify-center gap-4 py-12 md:py-44 md:pt-24">
        <div className="flex h-full w-full flex-col items-start justify-center">
          <h3 className="w-full text-center font-playfair uppercase text-primary">
            Reviews
          </h3>
          <h1 className="w-full text-center font-playfair text-5xl font-[400] text-[#76101E] md:text-8xl">
            From our people
          </h1>
        </div>
        <div className="flex w-full items-center justify-center p-4">
          {reviews && (
            <Carousel className="w-full overflow-visible px-4">
              <CarouselContent className="ml-4 flex w-full justify-center gap-4 overflow-visible">
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className="relative flex w-full basis-full flex-col gap-6 overflow-visible rounded-2xl bg-[#f2f2f2] px-6 py-8 md:basis-1/3"
                  >
                    <div className="absolute right-12 top-0 z-50 overflow-visible rounded-full bg-[#f2f2f2] p-2">
                      <Image
                        src="/images/home/heart.png"
                        width={43}
                        height={38}
                        alt="heart"
                        className="w-[30px]"
                      />
                    </div>
                    <div className="flex w-full items-center gap-2">
                      {/* <Image
                        src={
                          review.authorAttribution.photoUri||
                          "/images/home/reviews/pictures/anna-mathew.svg"
                        }
                        width={64}
                        height={64}
                        alt={review.authorAttribution.displayName}
                      /> */}
                      <div className="flex w-full flex-col gap-2">
                        <p className="w-full border-b-[1px] border-b-[#D0CBCB] pb-8 text-center font-sans text-4xl font-[600] capitalize text-black">
                          {review.authorAttribution.displayName}
                        </p>
                        {/* <span className="text-primary">
                          {review.relativePublishTimeDescription}
                        </span> */}
                      </div>
                    </div>
                    {/* <div className="flex w-full">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Icons.star key={index} className="text-primary" />
                      ))}
                    </div> */}
                    <div className="">
                      <p className="line-clamp-4 text-center font-[300] text-black">
                        {review.text.text}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out md:hidden">
                <CarouselPrevious className="bg-[#76101e] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="bg-[#76101e] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
              <div className="group absolute -bottom-12 left-1/2 hidden w-full -translate-x-1/2 transform items-center justify-between gap-2 transition-transform duration-300 ease-in-out md:flex">
                <CarouselPrevious className="bg-[#76101e] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="bg-[#76101e] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
