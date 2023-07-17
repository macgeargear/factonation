import { cn } from "@/lib/utils";
import { CheckSquare } from "lucide-react";
import { Badge } from "../ui/badge";

export interface IPriceDetails {
  module: string;
  price: number;
  courseName: string;
  benefits: string[];
  saledPrice?: string;
  actions: string;
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
    actions: "Buy Module 3",
  },
  ,
];

function Pricesection() {
  return (
    <div className="my-28" id="price-section">
      <div className="flex flex-col gap-3 w-11/12 mx-auto my-14 ">
        <div className="flex gap-4 px-20 ">
          <p className="text-3xl font-black">|</p>
          <p className="text-4xl font-bold">
            เริ่มเรียนได้เเล้ววันนี้ในราคาสุดคุ้ม
          </p>
        </div>
        <div className="flex items-center justify-center gap-3 ">
          <div className="flex gap-3 ">
            {priceDetails.map((priceDetail, i) => {
              return (
                <div
                  className={cn(
                    "border border-stone-200 p-6 rounded-xl w-60 flex flex-col justify-between backdrop-blur-3xl",
                    {
                      "bg-teal-900 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100":
                        priceDetail!.saledPrice,
                    }
                  )}
                  key={i}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                      <Badge>Module {priceDetail!.module}</Badge>
                      <p className="font-semibold text-xl w-52">
                        {priceDetail!.courseName}
                      </p>
                      {priceDetail!.saledPrice && (
                        <p className="font-semibold text-xl line-through decoration-stone-600 text-stone-600">
                          {priceDetail!.saledPrice}
                        </p>
                      )}
                      <p className="font-semibold text-3xl">
                        {priceDetail!.price} ฿
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 border-y py-4 ">
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
                  <button className="bg-stone-900 h-8 rounded-lg text-white">
                    {priceDetail!.actions}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricesection;
