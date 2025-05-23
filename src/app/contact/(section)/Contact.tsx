"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const FormValidation = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  reason: z.string(),
  message: z.string(),
});

type FormData = z.infer<typeof FormValidation>;

const Contact = ({ }) => {
  const form = useForm<FormData>({
    resolver: zodResolver(FormValidation),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      reason: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    bookTableMutation.mutate(data);
  };

  const bookTableMutation = useMutation({
    mutationFn: async (values: z.infer<typeof FormValidation>) => {
      return await axios.post("/api/contact", values);
    },
    onSuccess: () => {
      toast.success(
        "Your message has been submitted successfully. We will get back to you soon",
      );
      form.reset();
    },
    onError: () => {
      toast.error(
        "There was an error submitting your message. Please try again later",
      );
    },
  });

  return (
    <section className="flex flex-col h-full w-full items-center justify-center bg-[#fff5e5]" id="contact">
      <div className="flex h-full w-full max-w-[1300px] flex-col gap-[2.5rem] px-0 pl-0 md:px-2 py-12 md:py-24">
        <div className="flex w-full flex-col lg:flex-row">
          <div className="flex w-full flex-col bg-[#fff5e5] lg:w-1/2 px-6 lg:px-28 gap-8">
            <div className="flex flex-col gap-8">
              <p className="font-bai leading-[4px] text-lg">Contact Us</p>
              <h1
                className="text-4xl lg:text-5xl font-medium uppercase leading-[50px] tracking-[5px] font-forum">
                Get in<br /> Touch</h1>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full  p-2">
                    <MapPin />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href="https://maps.app.goo.gl/RcUh1as5zsmZng1AA" target="_blank">
                    <p className="">
                      45 Deansgate, Manchester M3<br /> 2AY, United Kingdom
                    </p>
                  </Link>
                  <Link href="https://maps.app.goo.gl/RcUh1as5zsmZng1AA" target="_blank">
                    <p className="flex gap-2 text-sm items-center">
                      <span>Get Direction</span>
                      <ArrowRight />
                    </p>
                  </Link>
                </div>
              </div>
              {/* <div className="flex items-center gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full p-2">
                    <Phone />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href="tel:+441618210139" className="">+44 161 821 0139</Link>
                </div>
              </div> */}
              <div className="flex items-center gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full  p-2">
                    <Mail />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href="mailto:info@nurcafe.co.uk"
                    className="">info@nurcafe.co.uk</Link>
                </div>
              </div>
              <div className="flex justify-start gap-4 items-center">
                <Link href='https://www.instagram.com/nurcafemcr/?hl=en' target="_blank">
                  <Icons.instagram />
                </Link>
                {/* <Link href='https://www.tripadvisor.com/Restaurant_Review-g187069-d28003565-Reviews-Nur_Cafe-Manchester_Greater_Manchester_England.html' target="_blank">
                  <Icons.unknown />
                </Link> */}
                <Link href='https://g.co/kgs/eEdUrdK' target="_blank">
                  <Icons.google />
                </Link>
                {/* <Link href='https://www.facebook.com/Istanbulwoolton/'>
                  <Icons.facebook />
                </Link> */}
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col bg-[#fff5e5] lg:w-1/2 lg:items-center lg:justify-center">
            <div className="w-full px-3 lg:w-4/5 lg:px-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="h-full">
                  <div className="flex gap-4 pt-7">
                    <div className="flex w-full flex-col gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="First Name"
                                {...field}
                                className="h-12 rounded-xl bg-white"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Phone"
                                {...field}
                                className="h-12 rounded-xl bg-white"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Email"
                                {...field}
                                className="h-12 rounded-xl bg-white"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>Reason for contacting (optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Your Message"
                                {...field}
                                className="h-32 rounded-xl bg-white"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col pt-7 lg:flex-row">
                    <Button className="w-full font-bai rounded-2xl py-6 hover:bg-secondary" disabled={bookTableMutation.isPending}>Contact US</Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.1787275755482!2d-2.2461876!3d53.483136300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb100499bf4a9%3A0xd83801f7a87ef198!2zTsO5ciBjYWZl!5e0!3m2!1sen!2sin!4v1734633617051!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[500px]"
        ></iframe>
      </div>
      {/* <div className="w-full flex overflow-hidden">
        <Image src='/images/home/herobottom.png' alt="bottom" width={966} height={96} />
        <Image src='/images/home/herobottom.png' alt="bottom" width={966} height={96} />
      </div> */}
    </section >
  );
};

export default Contact;

// /images/contact/contact.png
