"use client";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "I can make static and dynamic website for any sort of business or personal use. ",
    href: "/contact",
  },
  {
    id: "02",
    title: "E-Commerce",
    description:
      "I can build e-commerce website for any shops and any company.",
    href: "/contact",
  },
  {
    id: "03",
    title: "CMS Building",
    description:
      "I have experience in building and managing CMS softwares.",
    href: "/contact",
  },
  {
    id: "04",
    title: "Full Stack Development",
    description:
      "As a MERN Stack developer, I am capable of building full stack applications.",
    href: "/contact",
  },
];

const page = () => {
  return (
    <div className="flex flex-col justify-center p-12 xl:py-0 h-[85dvh]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.1, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {services.map((service, index) => (
            <div key={index} className="flex flex-col justify-center items-center gap-6 group space-y-1">
              <div className="w-full flex justify-between items-center p-2">
                <div className="text-white text-5xl font-extrabold duration-500">{service.id}</div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent flex items-center justify-center transition-all duration-500 hover:-rotate-45">
                  <ArrowDownRight className="text-primary text-3xl "/>
                </Link>
              </div>
              <div className="w-full p-2">
              <h2 className="text-5xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              <p className="text-white/60 mt-2">{service.description}</p>
              </div>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default page;