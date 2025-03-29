"use client";

import Image from "next/image";

const ConnectWithUs = ({}) => {
  return <section className="w-full h-fit flex flex-col gap-8 py-12">
    <p className="w-full text-center font-playfair text-5xl font-[400] text-[#76101E] md:text-8xl">Connect With Us</p>
    <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 px-4 md:px-7">
       <div className="relative">
        <Image
        src='/images/home/instaframe.png'
        width={2028}
        height={2492}
        alt="frame"
        />
        <div className="absolute w-full h-full top-16 px-6">
        <Image
        src='/images/home/connect/1.png'
        width={439}
        height={441}
        alt="frame"
        />
        </div>
       </div>
       <div className="relative">
        <Image
        src='/images/home/instaframe.png'
        width={2028}
        height={2492}
        alt="frame"
        />
        <div className="absolute w-full h-full top-16 px-6">
        <Image
        src='/images/home/connect/2.png'
        width={439}
        height={441}
        alt="frame"
        />
        </div>
       </div>
       <div className="relative">
        <Image
        src='/images/home/instaframe.png'
        width={2028}
        height={2492}
        alt="frame"
        />
        <div className="absolute w-full h-full top-16 px-6">
        <Image
        src='/images/home/connect/3.png'
        width={439}
        height={441}
        alt="frame"
        />
        </div>
       </div>
       <div className="relative">
        <Image
        src='/images/home/instaframe.png'
        width={2028}
        height={2492}
        alt="frame"
        />
        <div className="absolute w-full h-full top-16 px-6">
        <Image
        src='/images/home/connect/4.png'
        width={439}
        height={441}
        alt="frame"
        className="h-[320px] overflow-hidden object-cover"
        />
        </div>
       </div>
    </div>
  </section>;
};

export default ConnectWithUs;
