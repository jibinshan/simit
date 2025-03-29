'use client'
import ViewMenu from "@/components/floating-buttons/ViewMenu";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Special from "./(section)/(special)/Special";
import Experience from "./(section)/Experience";
import Glimpse from "./(section)/Glimpse";
import Hero from "./(section)/Hero";
import Menu from "./(section)/Menu";
import PrivateAndGroupDining from "./(section)/PrivateAndGroupDining";
import Reviews from "./(section)/Review";
import AboutUs from "./(section)/AboutUs";
import Contact from "./(section)/Contact";
import Featured from "./(section)/Featured";
import TopPicks from "./(section)/TopPicks";
import { useEffect, useState } from "react";
import ConnectWithUs from "./(section)/ConnectWithUs";
import Reserve from "./(section)/Reserve";

export default function HomePage() {
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
    <main className="relative flex h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="absolute" />
        <Hero />
        <AboutUs />
        <Menu />
        <Special />
        <TopPicks />
        <Reserve />
        <Reviews />
        <ConnectWithUs />
        <Contact />
        <Footer />
        {/*
        <Experience />
        <PrivateAndGroupDining />
         */}
      </div>
      <div className="fixed bottom-2 right-2 flex md:bottom-[54px] md:right-[44px]">
          <ViewMenu />
      </div>
      {/* {isScrolled &&
        <div className="fixed bottom-2 right-2 z-50 hidden md:flex">
          <ViewMenu />
        </div>
      } */}
    </main>
  );
}
