import Image from "next/image";

const Hero = ({ }) => {
  return (
    <section id="hero" className="flex w-full items-center justify-center">
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="w-full flex flex-col lg:flex-row px-4 lg:px-0 gap-6 lg:gap-0">
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="flex flex-col gap-6 items-start lg:w-8/12 mt-20 lg:mt-0">
              <h1 className="font-oswald text-primary leading-[66px] font-semibold text-5xl lg:text-6xl"> Art Form  Discover Nùr Café: A Fusion of Arabic Elegance and French Patisserie</h1>
              <p className="text-black font-manrope font-normal">Step into Nùr Café, where chic interiors and a serene atmosphere invite you to experience a sophisticated blend of Arabic cuisine and French patisserie. Located at 45 Deansgate, Manchester, M3 2AY, Nùr offers a sensory journey through the rich heritage of Arabic culture.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-6">
            <Image src='/images/about-us/hero.png' width={951} height={975} alt="hero" className="h-[100vh] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
