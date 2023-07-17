"use client";
import Image from "next/image";
import ProblemImage from "../../../public/IMG_1831 (1).webp";
import { AlertTriangle } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

function Problemsection() {
  return (
    <div id="problem-section" className="w-full bg-[#f8f8f8] py-6">
      <div className="flex flex-col mx-auto my-10 gap-5  text-stone-900 max-w-5xl items-center">
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
          className="flex  mx-auto items-center justify-center h-24 w-full "
        >
          <h1 className="text-4xl font-bold">
            บอกลาการทำระบบ SCADA ต้นทุนสูงๆ ที่ขาดความยืดหยุ่น
          </h1>
        </motion.div>
        <div className="flex justify-between gap-1">
          <div className="flex w-6/12 justify-center">
            <Image
              src={ProblemImage}
              alt="hero image"
              style={{ height: 350, width: 380 }}
              className="flex items-center rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-between w-6/12 gap-3 ">
            <div className="flex gap-3">
              <div>
                <AlertTriangle color="red" size={22} />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg font-medium">
                  การใช้โปรแกรม SCADA สำเร็จรูปในตลาดส่วนมาก จะพ่วงมากับการมีค่า
                  License Software ที่เพิ่มขึ้น ตามขนาดของระบบที่เราจะทำ
                  อีกทั้งยังไม่สามารถ ขยายระบบได้ตามความต้องการในอนาคต...
                </p>
                <p className="font-normal text-sm text-stone-500">
                  ถ้าเราต้องการจะดูสถานะการทำงานของเครื่องจักรสักตัว
                  เราอาจต้องลงทุนหลายแสนและซื้ออุปกรณ์ที่เราไม่เข้าใจการทำงานของมันรวมถึงต้องฝากระบบของเราเอาไว้กับบุคคลที่สาม
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <CheckCircle2 color="#0ac5a8" size={22} />
              </div>
              <p className="text-lg font-medium">
                แต่ถ้าหากเรียนคอร์ส SCADA Bootcamp ของเราจนจบ
                คุณจะสามารถทำระบบของตัวเองได้ โดยที่ไม่เสียค่า License Software
                ซักบาท และในอนาคตจะเติม Features ต่างๆเช่น Line Notification,
                Data Logging, สร้าง API ก็ต่อเติมเองได้โดยไม่ต้องพึ่งพาใคร
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Problemsection;
