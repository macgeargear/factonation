import { Button } from "@/components/ui/Button";
import { Facebook } from "lucide-react";
import { Youtube } from "lucide-react";
import Image from "next/image";
import lineIcon from "../../../public/line (3).png";

function Lastsection() {
  return (
    <div id="last-section" className="flex justify-center h-auto my-10 ">
      <div className="flex flex-col items-center gap-10 ">
        <div
          className="flex flex-col items-center justify-center border-2 border-stone-800 gap-5 p-10 "
          style={{ height: 250, width: 700 }}
        >
          <div className="flex flex-col items-cente gap-1">
            <p className="text-4xl text-center font-semibold">
              เพิ่มทักษะการทำงาน
            </p>
            <div className="flex gap-2 ">
              <p className="text-4xl text-center font-semibold">
                ให้พร้อมสำหรับ{" "}
              </p>
              <p className="text-4xl text-center font-semibold text-primary-button">
                Factory 4.0{" "}
              </p>
              <p className="text-4xl text-center font-semibold">
                ได้แล้ววันนี้
              </p>
            </div>

            <p className="text-base text-center text-stone-600">
              เพียงสัปดาห์ละไม่เกิน 30 นาทีก็สามารถสร้าง Future Skill ไปกับเรา
            </p>
          </div>
          <Button size={"sm"} className="px-8 bg-black text-white">
            สมัครทันที
          </Button>
        </div>

        <div className="flex gap-3 items-center">
          <Facebook />
          <Youtube />
          <Image
            src={lineIcon}
            alt="hero image"
            style={{ height: 22, width: 22 }}
            className="flex items-center rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Lastsection;
