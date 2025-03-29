import Image from "next/image";

const BavetteStory = ({ }) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center lg:py-16 p-4">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11">
        <h2 className="font-oswald text-8xl text-[#9b3733]/20 md:left-[15%] md:text-8xl text-center">
          The Nur-Cafe<br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/story.png"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="max-w-[500px] text-center font-oswald text-6xl sm:text-7xl md:text-start">
              From Vision to Flavor
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-black md:text-start">
              What started as a shared passion for exceptional cuisine blossomed into a haven for lovers of fine dining and rich cultural experiences. In its inception, Nur Café was envisioned as more than just a café—it was a tribute to the art of blending traditional Arabic flavors with modern elegance.
              <br />
              <br />
              From humble beginnings to becoming a celebrated destination in Manchester, Nur Café remains rooted in quality, creativity, and a commitment to community. Every dish, every sip of coffee, and every delicate pastry reflects the dedication to crafting moments worth savoring.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
