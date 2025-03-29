"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import { BetaMenuActive } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight ?? 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${position} top-5 z-50 flex h-[10vh] w-full items-center bg-transparent p-4 md:px-12 transition-all duration-300 ease-in-out`}
    >
      <div className="flex h-full w-full items-center justify-between">
        <Link href="/" className="flex">
          <Image src="/images/logo.png" width={140} height={120} alt="logo" className="w-14 md:w-24" />
        </Link>
        {!isScrolled && (
          <div className="hidden w-full flex-row items-center justify-center gap-[3.48rem] md:flex">
            <div className="w-full flex items-center justify-center">
              <div className={cn("w-fit flex gap-12 items-center justify-center rounded-full px-12 py-4", pathname !== '/' && "bg-primary")} >
                <Button
                  asChild
                  variant="link"
                  className="px-0 text-lg text-accent font-semibold text-white font-playfair"
                >
                  <Link href="/">Home</Link>
                </Button>
                <Button
                  asChild
                  variant="link"
                  className="px-0 text-lg text-accent font-semibold text-white font-playfair"
                >
                  <Link href="/menu">Menu</Link>
                </Button>
                {/* <Button
              asChild
              variant="link"
              className="px-0 uppercase text-accent"
            >
              <Link href="/about-us">About</Link>
            </Button> */}
                <Button
                  asChild
                  variant="link"
                  className="px-0 text-lg text-accent font-semibold text-white font-playfair"
                >
                  <Link href="/about-us">About</Link>
                </Button>
                <Button
                  asChild
                  variant="link"
                  className="px-0 text-lg text-accent font-semibold text-white font-playfair"
                >
                  <Link href="/contact">Contact</Link>
                </Button>
              </div>

            </div>
            {/* <Button
              asChild
              variant="link"
              className="px-0 uppercase text-accent"
            >
              <Link href="/gift-voucher">Gift Voucher</Link>
            </Button> */}
            {/* <Link href="/table-booking">
              <Button
                className="group h-11 items-center gap-[1.19rem] rounded-full font-semibold uppercase bg-white/30 backdrop-blur-md font-playfair px-6 py-7"
                variant="secondary"
              >
                Book Table
                <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1" />
              </Button>
            </Link> */}
          </div>
        )
        }
        <Link href="/table-booking" className="hidden md:block">
       <Button className="bg-white/30 backdrop-blur-md rounded-full text-lg px-6 py-6 text-white font-playfair flex items-center justify-center gap-1">
        <span>Book Table</span>
        <ArrowRight className="text-white"/>
       </Button>
        </Link>
        {
          isScrolled ? (
            <Sidebar>
              <Button
                variant="ghost"
                className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
              >
                <span className="sr-only">Menu</span>
                <Icons.menu />
              </Button>
            </Sidebar>
          ) : (
            <Sidebar>
              <Button
                variant="ghost"
                className="px-1 py-1 text-primary hover:bg-transparent hover:text-primary md:hidden"
              >
                <span className="sr-only">Menu</span>
                <EqualizerIcon />
              </Button>
            </Sidebar>
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;


const EqualizerIcon: React.FC = () => {
  return (
    <div className="equalizer-icon rotate">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};