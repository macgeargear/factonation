import Image, { StaticImageData } from "next/image";
import kPrann from "../../../public/khun-Pran.webp";
import kParinya from "../../../public/khun-Parinya.webp";
import { Star } from "lucide-react";

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
  desc: string;
  icon: JSX.Element;
  image: StaticImageData;
}[] = [
  {
    name: "คุณปรานต์ ฉันทจิรพร",
    desc: `อาจารย์สอนเป็นขั้นตอน ทำให้เรื่องที่ซับซ้อนเข้าใจได้ง่ายขึ้น
            ได้นำความรู้ที่เรียนมาสร้างระบบ SCADA ใช้ที่โรงงานได้จริง
            ตอนนี้ทำงานสะดวกขึ้นมากครับ
            ติดตามสถานะเครื่องจักรได้จากทุกที่ทุกเวลา แนะนำเลยครับ`,
    icon: <StarRating numStars={5} />,
    image: kPrann,
  },
  {
    name: "คุณปริญญา เธียรกานนท์",
    desc: `เอาความรู้มาใช้สร้างระบบ SCADA ที่โรงงานได้
            สามารถออกแบบระบบได้แบบที่เราต้องการ ไม่ต้องเสียค่า license
            รายปี ประหยัดต้นทุนได้เยอะ และได้สกิลใหม่ คุ้มค่าครับ`,
    icon: <StarRating numStars={5} />,
    image: kParinya,
  },
  {
    name: "คุณเตชิต กุลกัลยากรกมล",
    desc: `SCADA เฟี้ยวจัดเลยครับ ผมเรียนเเล้วติดใจมากๆ อยาก develop scada จนแก่ตายเลยคับ`,
    icon: <StarRating numStars={5} />,
    image: kPrann,
  },
];

function Reviewsection() {
  return (
    <div className="bg-[#f8f8f8] py-4">
      <div className="flex flex-col w-4/5 mx-auto my-20 gap-16 ">
        <div className="flex gap-4">
          <p className="text-3xl font-black">|</p>
          <p className="text-4xl font-bold">รีวิวจากผู้เรียน</p>
        </div>
        <div className="flex justify-between gap-5 items-center">
          {reviews.map((review, i) => {
            return (
              <div
                key={i}
                className="flex bg-stone-900 gap-8 rounded-xl text-white p-10 w-[480px] h-[320px]"
              >
                <Image
                  src={kPrann}
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
        </div>
      </div>
    </div>
  );
}
export default Reviewsection;
