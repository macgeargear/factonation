"use client";
import { Button, buttonVariants } from "@/components/ui/Button";
import Image from "next/image";
import heroImage from "../../../public/IMG_1737.webp";
import { useMemo } from "react";
import Link from "next/link";
import { sign } from "crypto";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

function Herosection() {
  return (
    // <div className="min-h-screen">
    <div
      id="hero-section"
      className="flex h-[calc(100vh-70px)] justify-center max-w-6xl mx-auto items-center text-gray-900"
    >
      <div className="flex justify-between items-center gap-12 mx-auto">
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
          className="flex flex-col w-6/12 gap-7 "
        >
          <div className="flex flex-col gap-4 text-5xl font-extrabold">
            <div className="flex gap-2">
              <h1 className="flex ">เริ่มทำระบบ</h1>
              <h1 className="flex text-primary-button ">Factory 4.0</h1>
            </div>
            <h1>ด้วยตัวเอง</h1>
          </div>
          <div className="flex flex-col flex-wrap text-2xl leading-7 font-normal gap-4 ">
            <p>เริ่มตั้งแต่สอนเขียน C# ไม่จำเป็นต้อง</p>
            <p>มีพื้นฐานการเขียนโปรแกรม เรียนแบบ</p>
            <p>On-demand สัปดาห์ละ 2 วิดีโอ ในกลุ่ม</p>
            <p>Private ถามตอบได้ตลอดเวลา”</p>
          </div>
          <div className="flex gap-8 text-2xl items-center">
            <Link
              href="/dashboard"
              className={cn(
                buttonVariants({ size: "xl" }),
                "px-8 bg-black text-white"
              )}
            >
              สมัครทันที
            </Link>
            <Link
              href="/dashboard/courseOverview/af000670-fb5f-4a37-92b1-464b1e83947f"
              className={buttonVariants({ size: "xl", variant: "outline" })}
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
          className="w-1/2"
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
}

export default Herosection;
