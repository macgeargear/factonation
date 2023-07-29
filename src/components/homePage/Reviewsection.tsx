"use client";
import Image, { StaticImageData } from "next/image";
import kPrann from "../../../public/khun-Pran.webp";
import kParinya from "../../../public/khun-Parinya.webp";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { MessagesSquare } from 'lucide-react';

const StarRating = ({ numStars }: { numStars: number }) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star key={i} color="#0ac5a8" size={20} fill="#0ac5a8" />);
  }
  return (
    <div className="flex rounded-xl justify-between w-24 h-4 items-center gap-0.5">
      {stars}
    </div>
  );
};

const reviews: {
  name: string;
  posit: string;
  desc: string;
  icon: JSX.Element;
  image: StaticImageData;
}[] = [
  {
    name: "คุณปรานต์ ฉันทจิรพร",
    posit: "ผู้ช่วยกรรมการผู้จัดการ บริษัท ลักกี้กลาส จำกัด",
    desc: `อาจารย์สอนเป็นขั้นตอน ทำให้เรื่องที่ซับซ้อนเข้าใจได้ง่ายขึ้น
            ได้นำความรู้ที่เรียนมาสร้างระบบ SCADA ใช้ที่โรงงานได้จริง
            ตอนนี้ทำงานสะดวกขึ้นมากครับ
            ติดตามสถานะเครื่องจักรได้จากทุกที่ทุกเวลา แนะนำเลยครับ`,
    icon: <StarRating numStars={5} />,
    image: kPrann,
  },
  {
    name: "คุณปริญญา เธียรกานนท์",
    posit: "ผู้จัดการโรงงาน บริษัท ซี.ที. อินดัสทรี จำกัด",
    desc: `เอาความรู้มาใช้สร้างระบบ SCADA ที่โรงงานได้
            สามารถออกแบบระบบได้แบบที่เราต้องการ ไม่ต้องเสียค่า license
            รายปี ประหยัดต้นทุนได้เยอะ และได้สกิลใหม่ คุ้มค่าครับ`,
    icon: <StarRating numStars={5} />,
    image: kParinya,
  },
  {
    name: "คุณเตชิต กุลกัลยากรกมล",
    posit: "ผู้จัดการโรงงาน บริษัท ซี.ที. อินดัสทรี จำกัด",
    desc: `SCADA เฟี้ยวจัดเลยครับ ผมเรียนเเล้วติดใจมากๆ อยาก develop scada จนแก่ตายเลยคับ`,
    icon: <StarRating numStars={5} />,
    image: kPrann,
  },
  {
    name: "คุณเตชิต กุลกัลยากรกมล",
    posit: "ผู้จัดการโรงงาน บริษัท ซี.ที. อินดัสทรี จำกัด",
    desc: `SCADA เฟี้ยวจัดเลยครับ ผมเรียนเเล้วติดใจมากๆ อยาก develop scada จนแก่ตายเลยคับ`,
    icon: <StarRating numStars={5} />,
    image: kPrann,
  },



];

function Reviewsection() {
  return (
    <div className="bg-[#f8f8f8] py-4">
      <div className="flex flex-col w-4/5 mx-auto lg:my-20 my-10 gap-6 ">
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
        className="flex lg:gap-4 lg:mx-0 mx-3 gap-2 ">
          <p className="lg:text-3xl lg:font-black text-xl font-semibold">|</p>
          <p className="lg:text-4xl lg:font-bold text-xl font-semibold">รีวิวจากผู้เรียน</p>
        </motion.div>


        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: "some" }}
        transition={{
          delay: 0.2,
          duration: 0.3,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        variants={{
          hidden: { opacity: 0, x: 150 },
          visible: { opacity: 1, x: 0 },
        }} 
        className="flex lg:gap-8 gap-3  flex-wrap justify-center">
        {reviews.map((review, i) => {
            return (
         
          <div key={i}  className="flex flex-col lg:p-8 justify-between lg:w-[480px] lg:h-[250px] h-[220px] w-[290px] p-6 rounded-xl bg-stone-800 text-white  ">
            <div>
            {/* <MessagesSquare size={20} /> */}

            <p className="lg:text-base font-normal text-xs ">
          {review.desc}
          </p >
          </div>
          <div className="flex gap-8 items-center">
              <Image
                  src={review.image}
                  alt="kPrann image"
                  style={{ height: 60, width: 65 }}
                  className="flex items-center rounded-lg"
                />
            <div className="flex flex-col gap-1">
              <div>{review.icon}</div>
              <p className="lg:text-base font-semibold text-sm">{review.name}</p>
              <p className="text-xs font-light">{review.posit}</p>
            </div>
          </div>
          </div>
          );
        })}
        </motion.div>






        {/* <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: "some" }}
        transition={{
          delay: 0.2,
          duration: 0.3,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        variants={{
          hidden: { opacity: 0, x: 150 },
          visible: { opacity: 1, x: 0 },
        }}
         className="flex justify-between gap-5 items-center">
          {reviews.map((review, i) => {
            return (
              <div
                key={i}
                className="flex bg-stone-900 gap-8 rounded-xl text-white p-10 w-[480px] h-[320px]"
              >
                <Image
                  src={review.image}
                  alt="kPrann image"
                  style={{ height: 60, width: 65 }}
                  className="flex items-center rounded-lg"
                />
                <div className="flex flex-col gap-2">
                  <div>
                    <p>{review.name}</p>
                    <p>{review.desc}</p>
                  </div>
                  {review.icon}
                </div>
              </div>
            );
          })}
        </motion.div> */}
      </div>
    </div>
  );
}
export default Reviewsection;
