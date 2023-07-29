"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Facebook } from "lucide-react";
import { Youtube } from "lucide-react";
import Image from "next/image";
import lineIcon from "../../../public/line (3).png";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAuthContext } from "@/contexts/authContext";
import { FC } from "react";
import { cn } from "@/lib/utils";

interface ILogin {
  isLoggedIn: boolean;
}
const Lastsection: FC<ILogin> = ({ isLoggedIn }) => {
  return (
    <div id="last-section" className="flex justify-center h-auto my-10 ">
      <div className="flex flex-col items-center gap-10 h-11/12 ">
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
          className="flex flex-col items-center justify-center border-2 border-stone-800 lg:gap-5 lg:p-10 lg:h-[270px] lg:w-[700px] md:w-[600px] md:h-[150px] w-full h-auto p-3 gap-3"
        >
          <div className="flex flex-col lg:text-4xl lg:font-normal lg:gap-2 font-light text-sm items-cente gap-1">
            <div className="flex flex-col text-center font-semibold  flex-wrap lg:gap-3 gap-1 ">
              <p>เพิ่มทักษะการทำงาน</p>
              <div className="flex lg:gap-2 gap-1 justify-center ">
                <p>ให้พร้อมสำหรับ </p>
                <p className="  text-primary-button">Factory 4.0 </p>
                <p>ได้แล้ววันนี้</p>
              </div>
            </div>

            <p className="lg:text-base text-[10px] text-center text-stone-600">
              เพียงสัปดาห์ละไม่เกิน 30 นาทีก็สามารถสร้าง Future Skill ไปกับเรา
            </p>
          </div>
          {isLoggedIn ? (
            <Link
              href="#price-section"
              className={cn(
                buttonVariants({ size: "sm" }),
                "lg:px-8 px-4 bg-black text-white  lg:text-sm text-xs"
              )}
            >
              เริ่มเรียนทันที
            </Link>
          ) : (
            <Link
              href="/login"
              className={cn(
                buttonVariants({ size: "sm" }),
                "lg:px-8 px-4 bg-black text-white lg:text-sm text-xs"
              )}
            >
              เริ่มเรียนทันที
            </Link>
          )}
        </motion.div>

        <div className="flex gap-3 items-center">
          <Link href="https://web.facebook.com/officialfactonation">
            <Facebook />
          </Link>
          <Link href="https://www.youtube.com/@FactonationTH/featured">
            <Youtube />
          </Link>
          <Link href="https://page.line.me/559odtho?openQrModal=true">
            <Image
              src={lineIcon}
              alt="hero image"
              style={{ height: 22, width: 22 }}
              className="flex items-center rounded-xl"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lastsection;
