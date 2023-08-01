"use client";
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "@/components/ui/Accordion";
import Image from "next/image";
import { motion } from "framer-motion";

const QnA1 = [
  {
    question: "ไม่มีพื้นฐานมาก่อนเรียนได้ไหม?",
    answer:
      "ได้ เราได้ทำการออกแบบโครงสร้างคอร์สของเราให้เหมาะกับผู้เรียนที่ไม่เคยมีประสบการณ์เขียนโปรแกรมมาก่อน เราขอเพียงแค่นักเรียนมีคอมพิวเตอร์เพื่อใช้ในการเรียนรู้ของตัวเองก็เพียงพอแล้ว",
  },
  {
    question: "ต้องเรียน Module ไหนบ้าง?",
    answer:
      "หากนักเรียนไม่เคยเขียนโปรแกรมมาก่อน หรือเคยเขียนมาบ้างแต่ยังพื้นฐานไม่แน่น เราแนะนำให้นักเรียนเริ่มตั้งแต่ Module 1 เพื่อปรับพื้นฐานก่อนที่จะไปต่อ หากนักเรียนมีพื้นฐานภาษา C# ที่ดีพอแล้ว เราแนะนำให้นักเรียนเริ่มจาก Module 2 เพื่อเริ่มนำพื้นฐาน C# มาใช้เขียนโปรแกรม Desktop App และ Web App ขั้นสูงต่อได้ หรือหากนักเรียนมีความรู้ในฝั่งของการเขียน Software มากพอแล้ว ก็สามารถเริ่มจาก Module 3 เพื่อเรียนรู้การนำโลกของ Hardware มาเชื่อมต่อกับโลกของ Software ได้ ",
  },
  {
    question: "ใช้เวลาเรียนนานแค่ไหน?",
    answer:
      "แต่ละ Module จะใช้เวลาเรียนอยู่ที่ประมาณ 3-4 เดือน สำหรับการเรียนอาทิตย์ละ 1-2 เนื้อหา หรือหากนักเรียนทำความเข้าใจได้เร็วก็สามารถเรียนต่อเนื่องเพื่อจบคอร์สเร็วขึ้นได้",
  },
];

const QnA2 = [
  {
    question: "เรียนผ่านอะไร?",
    answer:
      "นักเรียนจะเข้าดูเนื้อหาผ่านระบบ E-Learning Platform ของทาง Factonation ซึ่งจะสามารถดูบนคอมพิวเตอร์หรือมือถือก็ได้ ",
  },
  {
    question: "ผู้สอนเป็นใคร?",
    answer:
      "เนื้อหาทั้งหมดถูกสอนโดย อาจารธีร์ Founder ของ Factonation ซึ่งมีประสบการณ์การเขียนโปรแกรม SCADA ในโรงงานมาตั้งแต่เรียนจบจากคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทลัย (เกียรตินิยมอันดับ 1)",
  },
  {
    question: "ถามคำถามผู้สอนอย่างไร?",
    answer:
      "หลังจากที่ นักเรียนสมัครคอร์สของเราแล้วจะได้ลิ้งค์เข้าร่วมกลุ่ม Private Discord ที่สามารถถามคำถามอาจารย์เกี่ยวกับบทเรียนได้ทุกเมื่อ",
  },
];

function Questionsection() {
  return (
    <div id="question-section" className="w-full">
      <div>
        <div className="flex flex-col bg-stone-900 justify-center lg:h-56 h-36 ">
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
            className="flex flex-col lg:gap-3 gap-1 text-white w-10/12 mx-auto"
          >
            <div className="flex gap-2">
              <p className="lg:text-3xl text-xl">|</p>
              <p className="lg:text-4xl text-xl">คำถามที่พบบ่อย</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="lg:text-xl lg:font-medium text-[12px] w-auto font-light ">
                ไม่พบคำถามที่คุณต้องการ ติดต่อทีมงาน ของเราได้เลย
              </p>
              <div className="flex flex-wrap gap-3 text-primary-button w-auto lg:font-normal lg:text-xs text-[10px] font-light ">
                <p>เบอร์โทร: 062-179-9526</p>
                <p>Line Official ID: @factonation</p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex lg:flex-row lg:my-10 my-5 flex-col w-4/5 justify-center lg:gap-10 gap-0 items-center ">
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
              className="flex flex-col lg:w-2/4 w-4/5 lg:text-lg text-sm "
            >
              {QnA1.map((qna, i) => {
                return (
                  <Accordion type="single" collapsible className="w-54" key={i}>
                    <AccordionItem value="1">
                      <AccordionTrigger>{qna.question}</AccordionTrigger>
                      <AccordionContent>{qna.answer}</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              })}
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
              className="flex flex-col lg:w-2/4 w-4/5 lg:text-lg text-sm "
            >
              {QnA2.map((qna, i) => {
                return (
                  <Accordion type="single" collapsible className="w-54" key={i}>
                    <AccordionItem value="1">
                      <AccordionTrigger>{qna.question}</AccordionTrigger>
                      <AccordionContent>{qna.answer}</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questionsection;
