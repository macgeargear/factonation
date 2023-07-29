"use client";

import Image from "next/image";
import heroImage from "../../../public/IMG_1737.webp";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { buttonVariants } from "../ui/button";
import { FC } from "react";
import { useAuthContext } from "@/contexts/authContext";

interface ILogin {
  isLoggedIn: boolean;
}

const Herosection: FC<ILogin> = async () => {
  // const isLoggedIn = false;
  const { isLoggedIn } = useAuthContext();
  return (
    // <div className="min-h-screen">
    <div
      id="hero-section"
      className="flex xl:h-[calc(100vh-70px)] justify-center xl:max-w-6xl mx-auto xl:items-center xl:my-0 text-gray-900 my-14 "
    >
      <div className="flex xl:flex-row xl:justify-between items-center gap-12 mx-auto flex-col ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: "some" }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          variants={{
            hidden: { opacity: 0, x: -150 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex flex-col xl:w-6/12 xl:items-start gap-7 items-center "
        >
          <div className="flex xl:flex-col sm:flex-row flex-col xl:gap-4 xl:text-5xl xl:font-extrabold text-3xl gap-2 font-semibold ">
            <div className="flex gap-2 flex-row ">
              <h1 className="flex ">เริ่มทำระบบ</h1>
              <h1 className="flex text-primary-button ">Factory 4.0</h1>
            </div>
            <h1 className="xl:text-left text-center">ด้วยตัวเอง</h1>
          </div>
          <div className="flex xl:w-full xl:flex-col xl:justify-start flex-wrap xl:text-2xl leading-7 font-normal xl:gap-3 flex-row gap-0 justify-center w-3/4 ">
            <p>เริ่มตั้งแต่สอนเขียน C# ไม่จำเป็นต้อง</p>
            <p>มีพื้นฐานการเขียนโปรแกรม เรียนแบบ</p>
            <p>On-demand สัปดาห์ละ 2 วิดีโอ ในกลุ่ม</p>
            <p>Private ถามตอบได้ตลอดเวลา</p>
          </div>

          <div className="flex xl:gap-8 text-2xl justify-center md:gap-5 gap-2">
            {isLoggedIn ? (
              <Link
                href="#price-section"
                className={cn(
                  buttonVariants({ size: "xl" }),
                  "lg:py-8 px-5 bg-black text-white md:text-xl text-base lg:w-44 "
                )}
              >
                เริ่มเรียนทันที
              </Link>
            ) : (
              <Link
                href="/login"
                className={cn(
                  buttonVariants({ size: "xl" }),
                  "lg:px-8 px-5 bg-black text-white lg:text-xl text-base lg:w-44"
                )}
              >
                เริ่มเรียนทันที
              </Link>
            )}

            <Link
              href="/module"
              className={cn(
                buttonVariants({ size: "xl", variant: "outline" }),
                " lg:text-xl text-base px-5 py-3 lg:w-44"
              )}
            >
              แนะนำคอร์ส
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: "some" }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          variants={{
            hidden: { opacity: 0, x: 150 },
            visible: { opacity: 1, x: 0 },
          }}
          className="xl:w-1/2 w-3/4"
        >
          <Image
            src={heroImage}
            alt="hero image"
            // style={{ height: 350, width: 455 }}
            className="flex items-center rounded-xl"
          />
        </motion.div>
      </div>
    </div>
    // </div>
  );
};

export default Herosection;
