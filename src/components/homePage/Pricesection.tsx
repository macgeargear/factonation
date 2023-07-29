"use client";
import { cn } from "@/lib/utils";
import { CheckSquare } from "lucide-react";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { useAuthContext } from "@/contexts/authContext";
import { FC } from "react";
import { Url } from "url";
import Link from "next/link";
import { useCourses } from "@/hooks/useCourses";

export interface IPriceDetails {
  module: string;
  price: number;
  courseName: string;
  benefits: string[];
  saledPrice?: string;
  actions: string;
  paymaent: Url;
}

interface ILogin {
  isLoggedIn: boolean;
}

const priceDetails = [
  {
    module: "1",
    price: 4999,
    courseName: "C# & .NET Fundamentals",
    benefits: [
      "ระยะเวลารวมประมาณ 4 เดือน โดยรูปแบบการเรียนจะเป็น VDO On-Demand สัปดาห์ละ 2 วิดีโอ",
      "กลุ่ม Private ผ่าน Discord สำหรับการพูดคุยและถามตอบระหว่างอาจารย์และนักเรียนที่ เรียนในคอร์สเดียวกัน",
    ],
    actions: "Buy Module 1",
    payment: "https://buy.stripe.com/28o3e2elY6bs2acdQQ",
  },
  {
    module: "2",
    price: 4999,
    courseName: "Desktop & Web Application",
    benefits: [
      "ระยะเวลารวมประมาณ 4 เดือน โดยรูปแบบการเรียนจะเป็น VDO On-Demand สัปดาห์ละ 2 วิดีโอ",
      "กลุ่ม Private ผ่าน Discord สำหรับการพูดคุยและถามตอบระหว่างอาจารย์และนักเรียนที่ เรียนในคอร์สเดียวกัน",
    ],
    actions: "Buy Module 2",
    payment: "https://buy.stripe.com/4gw5ma4Lo57o6qs4gh",
  },
  {
    module: "3",
    price: 6999,
    courseName: "SCADA Application Development",
    benefits: [
      "ระยะเวลารวมประมาณ 4 เดือน โดยรูปแบบการเรียนจะเป็น VDO On-Demand สัปดาห์ละ 2 วิดีโอ",
      "กลุ่ม Private ผ่าน Discord สำหรับการพูดคุยและถามตอบระหว่างอาจารย์และนักเรียนที่ เรียนในคอร์สเดียวกัน",
    ],
    actions: "Buy Module 3",
    payment: "https://buy.stripe.com/3csg0O0v80R82ac7su",
  },
  {
    module: "1+2+3",
    price: 16999,
    saledPrice: "10999",
    courseName: "Special Bundle Package",
    benefits: [
      "ราคาพิเศษเมื่อซื้อพร้อมกันทั้ง 3 Module จากราคาปกติ 16,997",
      "ระยะเวลารวมประมาณ 9 - 12 เดือน โดยรูปแบบการเรียนจะเป็น VDO On-Demand สัปดาห์ละ 2 วิดีโอ",
      "กลุ่ม Private ผ่าน Discord สำหรับการพูดคุยและถามตอบระหว่างอาจารย์และนักเรียนที่เรียนในคอร์สเดียวกัน",
    ],
    actions: "Buy Module 1+2+3",
    payment: "https://buy.stripe.com/8wMbKydhU8jA7uwcMP",
  },
  ,
];

const Pricesection: FC = () => {
  const { isLoggedIn } = useAuthContext();
  // const {course} = useCourses()
  return (
    <div className="lg:my-28 my-5" id="price-section">
      <div className="flex flex-col gap-3 w-full mx-auto my-14 ">
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
          className="flex lg:gap-4 gap-2 lg:mx-0 mx-4  "
        >
          <p className="lg:text-3xl font-black text-xl">|</p>
          <p className="lg:text-4xl font-bold text-xl">
            เริ่มเรียนได้เเล้ววันนี้ในราคาสุดคุ้ม
          </p>
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
          className="flex items-center justify-center gap-3 "
        >
          <div className="flex lg:flex-row lg:flex-nowrap flex-col flex-wrap gap-3 items-center ">
            {priceDetails.map((priceDetail, i) => {
              return (
                <div
                  className={cn(
                    "border border-stone-200 lg:p-6 rounded-xl lg:w-60 lg:gap-0 w-11/12 flex flex-col justify-between backdrop-blur-3xl lg:h-[510px] h-auto p-3 gap-7  ",
                    {
                      "bg-teal-900 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100":
                        priceDetail!.saledPrice,
                    }
                  )}
                  key={i}
                >
                  <div className="flex lg:flex-col flex-row gap-3">
                    <div className="flex flex-col gap-2">
                      <Badge>Module {priceDetail!.module}</Badge>
                      <p className="font-semibold lg:text-xl lg:w-52 w-28 text-base">
                        {priceDetail!.courseName}
                      </p>
                      {priceDetail!.saledPrice && (
                        <p className="font-semibold lg:text-xl line-through decoration-stone-600 text-stone-600 text-base">
                          {priceDetail!.saledPrice}
                        </p>
                      )}
                      <p className="font-semibold lg:text-3xl text-2xl">
                        {priceDetail!.price} ฿
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 lg:border-y lg:border-l-0 border-l lg:py-4 lg:px-0 px-3 py-2 justify-center  ">
                      {priceDetail!.benefits.map((benefit, i) => {
                        return (
                          <div className="flex gap-2" key={i}>
                            <div>
                              <CheckSquare color="black" size={16} />
                            </div>
                            <p className="text-xs">{benefit}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {isLoggedIn ? (
                    <Link
                      href={`${priceDetail?.payment}`}
                      className="flex justify-center items-center bg-stone-900 h-8 rounded-lg text-white "
                    >
                      {priceDetail!.actions}
                    </Link>
                  ) : (
                    <Link
                      href="/login"
                      className="flex justify-center items-center bg-stone-900 h-8 rounded-lg text-white"
                    >
                      {priceDetail!.actions}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricesection;
