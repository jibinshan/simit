'use client'
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Contact = ({ }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".zoom-scrolls", {
            scrollTrigger: {
                trigger: ".zoom-scrolls",
                toggleActions: 'restart none none none',
            },
            scale: 1, // Adjust the zoom scale as per your need
            duration: 2.5
        });
        gsap.to(".zoom-scrolls-two", {
            scrollTrigger: {
                trigger: ".zoom-scrolls-two",
                toggleActions: 'restart none none none',
            },
            scale: 1, // Adjust the zoom scale as per your need
            duration: 2.5
        });
    }, [])
    return (
        <section className="relative flex flex-col md:flex-row  md:items-end md:justify-between gap-6 h-full md:h-[100vh] w-full items-center justify-center bg-[#76101e] py-12 pb-6 px-3 md:px-12" id="contact">
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <Image
                src="/images/home/contact-one.png"
                width={524}
                height={686}
                alt="contact"
                className="zoom-scrolls w-full md:w-1/3 md:h-4/5 z-30"
                style={{
                    transform: 'scale(0.5)',
                }}
            />
            <div
                className="relative h-full w-full md:w-1/3 bg-white py-24 px-6 rounded-t-full z-40">
                <div className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-t-full z-10">
                </div>
                <div className="flex flex-col items-center justify-center gap-6 z-40">
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <p className="text-[#76101E] font-playfair text-5xl md:text-6xl">Contact us</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <p className="text-[#B57978] font-inter text-lg">Booking request</p>
                        <Link href="tel:+441618210139" className="text-black font-inter text-xl z-40">+44 161 821 0139</Link>
                        <Link href="mailto:info@nurcafe.co.uk" className="text-black font-inter text-xl z-40">info@nurcafe.co.uk</Link>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <p className="text-[#B57978] font-inter text-lg">Location</p>
                        <Link href="https://maps.app.goo.gl/4xKqiTXEPTeFuwUw8" target="_blank" className="text-black font-inter text-xl z-40">45 Deansgate, Manchester,<br /> United Kingdom, M3 2AY.</Link>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <p className="text-[#B57978] font-inter text-lg">Opening Hours</p>
                        <p className="text-black font-inter text-xl">Sunday - Saturday: 09:30 - 22:00</p>
                    </div>
                </div>
            </div>
            <Image
                src="/images/home/contact-two.png"
                width={524}
                height={686}
                alt="contact"
                className="zoom-scrolls-two w-full md:w-1/3 md:h-4/5 z-30"
                style={{
                    transform: 'scale(0.5)',
                }}
            />
        </section >
    )
}

export default Contact