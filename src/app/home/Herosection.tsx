import { Button } from "@/components/ui/Button";
import Image from "next/image";
import heroImage from "../../../public/IMG_1737.webp";
import { useMemo } from "react";

function Herosection() {
  return (
    // <div className="min-h-screen">
    <div className="flex h-[calc(100vh-70px)] justify-center max-w-7xl mx-auto items-center text-gray-900">
      <div className="flex justify-between items-center gap-12 mx-auto">
        <div className="flex flex-col w-6/12 gap-7 ">
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
            <Button size={"xl"} className="px-8 bg-black text-white">
              สมัครทันที
            </Button>
            <Button size={"xl"} variant={"outline"}>
              แนะนำคอร์ส
            </Button>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            src={heroImage}
            alt="hero image"
            // style={{ height: 350, width: 455 }}
            className="flex items-center rounded-xl"
          />
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Herosection;
