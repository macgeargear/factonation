"use client";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { UploadCloud } from "lucide-react";
import { FileCode2 } from "lucide-react";

const benefits: { icon: React.ReactNode; desc: string }[] = [
  {
    icon: <FileCode2 color="black" size={54} />,
    desc: "มีผลงานระหว่างเรียนทุกโมดูล",
  },
  {
    icon: <UploadCloud color="black" size={54} />,
    desc: "เรียนจบ นำระบบขึ้น Cloud ดูได้ทันที",
  },
  {
    icon: <Rocket color="black" size={54} />,
    desc: "มีการสอนต่อเติมระบบ ให้มีความสามารถสูงขึ้น",
  },
];

function Benefitsection() {
  return (
    <div
      id="benefit-section"
      className="flex flex-col w-10/12  mx-auto lg:my-24 my-16 gap-10 text-gray-900 "
    >
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
        className="flex justify-center lg:text-4xl font-bold gap-2 text-xl"
      >
        <p>เรียนกับ</p>
        <p className="text-primary-button">FACTONATION</p>
        <p>ดียังไง ?</p>
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
        className="flex flex-wrap justify-center gap-8 text-center"
      >
        {benefits.map((benefit, i) => {
          return (
            <div
              className="flex border-2 border-primary-button py-6 px-4 rounded-xl lg:h-80 lg:w-64 h-auto w-56 items-center justify-center"
              key={i}
            >
              <div className="flex flex-col lg:gap-10 gap-6 justify-center items-center">
                {benefit.icon}
                <p className="lg:text-xl px-4 font-extralight text-base">{benefit.desc}</p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Benefitsection;
