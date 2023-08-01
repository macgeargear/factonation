import Image, { StaticImageData } from "next/image";
import Industry from "../../../public/smart_industry.jpg";
import { Button } from "@/components/ui/MainButton";
import { ArrowRight } from "lucide-react";
import module1 from "../../../public/scada-bootcamp-module-1-cover.jpg";
import module2 from "../../../public/scada-bootcamp-module-2-cover.jpg";
import module3 from "../../../public/scada-bootcamp-module-3-cover.jpg";
import { CourseDto } from "@/types/dto";

const courses: {
  module: string;
  name: string;
  detail: string;
  video: number;
  image: StaticImageData;
  price: string;
}[] = [
  {
    module: "MODULE 1",
    name: "C# & .NET Fundamentals",
    detail: `หลักสูตรสำหรับผู้เริ่มต้นเรียนรู้ C# เพื่อปูพื้นฐานความเข้าใจที่ถูกต้อง ครอบคลุมคอนเซ็ปต์ตั้งแต่ C# vs .NET, Classes, Namespaces, Data types, Operators, Conditionals, Iteration, Arrays & Lists, Access modifiers, Enumerations, String manipulations, IO, Debugging, Interface, Generics, Delegates, Lambda, Events, LINQ, Async-await และอื่นๆ เมื่อเรียนจบคอร์สสามารถเขียน Console Application แบบง่ายได้ สามารถนำความรู้ C# ไปต่อยอดเขียน Application ที่ใช้งานได้จริงเช่น Desktop และ Web Application เพื่อไปทำระบบ SCADA ใน Module 2 ต่อไปได้`,
    video: 33,
    image: module1,
    price: "4,999 ฿",
  },
  {
    module: "MODULE 2",
    name: "Desktop & Web Application",
    detail: `หลักสูตรสำหรับผู้ที่มีพื้นฐาน C# หรือเรียนจบ Module 1 มาแล้ว ครอบคลุมการเขียน UI ด้วย WPF Framework และการใช้ Entity Framework เพื่อเชื่อมต่อกับฐานข้อมูลที่ออกแบบมาจาก Class ที่เราเขียนขึ้นมา รวมถึงการเขียน Responsive UI ด้วย XAML (ไม่ใช่การลากวาง) หลังจบคอร์สจะสามารถเขียน Desktop Application ด้วย WPF Framework ที่สามารถทำการ อ่าน เขียน และแก้ไขข้อมูลใน SQL Server Database ได้ ได้ลองใช้ Concept CRUD จาก WPF Framework มาสร้าง Web Application ที่ทำหน้าที่แบบเดียวกันด้วย Blazor ซึ่งทำให้ Web Application มีฟังก์ชันต่างๆโดยไม่ต้องเขียนภาษา Javascript ได้ ทุกอย่างทำไปเพื่อปูพื้นฐานในการ Integrate ทุกอย่างใน Module 3`,
    video: 38,
    image: module2,
    price: "4,999 ฿",
  },
  {
    module: "MODULE 3",
    name: "SCADA Development",
    detail: `หลักสูตรสำหรับผู้ที่มีพื้นฐาน C# และการเขียน Application มาแล้วอย่างดี หรือผู้ที่เรียนจบ Module 1 และ 2 แล้ว ในคอร์สนี้จะเป็นการนำความรู้ฝั่ง Hardware มาผสานกับความรู้ฝั่ง Software โดยจำกัด Scope ของโปรแกรมที่จะสร้างให้สามารถอ่าน Data Register ของ PLC มาแสดงบนมือถือได้ (Input, Coil, Registers) โดยเชื่อมต่อกับ SQL Server ที่เราเป็นคนออกแบบฐานข้อมูลเอง ไม่ใช่ฐานข้อมูลสำเร็จรูป และเอาฐานข้อมูลขึ้นไปอยู่บน Cloud (Azure SQL) ดูได้ทั้งบน Desktop และ Mobile ไม่จำเป็นต้องอยู่ในวงแลนด์เดียวกัน ขอแค่มีอินเตอร์เน็ตก็สามารถดูข้อมูลได้ ระบบจะเป็นแบบ Read-only และมีความถี่ในการอ่านข้อมูลในระดับประมาณ 5 วินาทีเท่านั้น`,
    video: 18,
    image: module3,
    price: "6,999 ฿",
  },
];
import { FC } from "react";
import Link from "next/link";

interface ModuleCardProps {
  course: CourseDto;
}

const ModuleCard: FC<ModuleCardProps> = ({ course }) => {
  return (
    <div className="flex flex-col items-center gap-6 ">
      <div className="flex lg:flex-row flex-col gap-5 rounded-xl lg:w-[920px] lg:h-[340px] w-[320px] bg-neutral-100 px-6 items-center drop-shadow-md mx-auto lg:py-0 py-6  ">
        <div className="maw-w-[460px] max-h-[280px] grid place-content-center ">
          <Image
            src={course.imageUrl}
            alt="Industry image"
            width={480}
            height={280}
            className=""
          />
        </div>
        <div className="flex flex-col lg:w-[710px] lg:h-[320px] w-[280px] p-2 gap-3 justify-center">
          <div className="flex flex-col gap-2">
            <p className="text-xs text-primary-button">{course.courseName}</p>
            <p className="text-xl font-semibold">{course.courseName}</p>
            <p className="text-sm text-stone-600 lg:w-[460px] w-[280px] mx-auto">
              {course.details}
            </p>
            <p className="text-xs font-semibold">
              จำนวนวิดีโอ {course.lessons.length} วิดีโอ
            </p>
          </div>
          <div className="flex gap-10 justify-between border-t border-primary-button py-1 ">
            <p className="text-xs font-semibold my-2  bg-neutral-100">
              {course.price}
            </p>
            <div className="flex items-center gap-0">
              <Link
                href={`/dashboard/courseOverview/${course.id}`}
                className="text-xs font-semibold bg-neutral-100"
              >
                ดูรายละเอียดคอร์์ส
              </Link>
              <ArrowRight size={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
