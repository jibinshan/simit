'use client'
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
import gsap from 'gsap'

const ViewMenu = ({ }) => {

  useEffect(() => {

    const tl = gsap.timeline()
    tl.from('.head-container', 2, {
      y: 50,
      opacity: 1,
      ease: 'power4.out'
    }).from('.head-hero', 1.5, {
      x: 200,
      opacity: 0,
      delay: -2
    }).from('.hero-button', 1.5, {
      y: 100,
      opacity: 0,
      ease: "power4.out",
      delay: -2
    })

    tl.fromTo(
      '.table-button',
      {
        opacity: 0, // Start invisible
        scale: 0.5, // Start smaller for a "pop-in" effect
      },
      {
        opacity: 1, // Fully visible
        scale: 1, // Restore to original size
        duration: 1, // Duration for fade-in and scale effect
        ease: 'power3.out', // Smooth easing effect
      }
    );

    // Rotation animation
    tl.to('.table-button', {
      rotation: 360,   // Full rotation
      duration: 10,     // Time for one rotation
      ease: 'linear',  // Consistent rotation speed
      repeat: -1,      // Infinite rotation
    });
  }, [])

  return (
    <Button
      asChild
      className="table-button z-50 flex aspect-square h-24 flex-col items-center justify-center rounded-full bg-[#A63F5A] px-0 py-0 text-center text-xs uppercase text-[#fff] hover:text-white hover:bg-[#A63F5A]"
    >
      <Link href="/menu">
        <Icons.dining color="#fff" />
        Online 
        <br />
        Ordering
      </Link>
    </Button>
  );
};

export default ViewMenu;
