import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JoinUs = ({ }) => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center"
      style={{
        backgroundImage: `url('/images/about-us/join-us.png')`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute w-full h-full left-0 top-0 bg-black/50" />
      <div className="flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row z-20">
        <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] p-6">
          <h1 className="max-w-[500px] text-center font-oswald text-5xl leading-[60px]">
            Join Us for an<br /> Unforgettable Experience
          </h1>
          <p className="max-w-[450px] text-center font-light leading-[160%] text-[#C1B6A6]">
            Ready to indulge in a culinary journey like no other? Whether it’s a cozy coffee date, a delightful brunch, or a special celebration, Nur Café welcomes you to savor the flavors of our expertly crafted dishes and desserts. Let us show you what makes dining at Nur Café a truly memorable experience.
          </p>
          <Link href="/table-booking">
            <Button
              variant="outline"
              className="group w-fit items-center gap-[1.19rem] border-primary bg-transparent font-semibold uppercase py-6 px-6 text-white hover:bg-primary"
            >
              Book Now{" "}
              <Icons.rightArrow className="text-primary duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
            </Button>
          </Link>
        </div>
      </div>
    </section >
  );
};

export default JoinUs;
