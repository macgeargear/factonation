import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "@/components/ui/accordion";
import Image from "next/image";

const QnA1 = [
  {
    question: "รูปแบบการเรียนเป็นแบบไหน?",
    answer:
      "เป็นรูปแบบของวิดีโอ On-demand ซึ่งเมื่อนักเรียนชำระค่าเล่าเรียนตามคอร์สที่ลงทะเบียนไว้แล้ว แอดมินจะส่งวิธีการเข้าถึง Channel ของคอร์สเรียนนั้นให้นักเรียนสามารถเข้าไปดูวิดีโอตามลำดับได้",
  },
  {
    question: "เรียนอาทิตย์ละกี่ครั้ง?",
    answer:
      "เราแนะนำให้นักเรียนเรียนอาทิตย์ละ 1-2 วิดีโอ (อ้างอิงได้จากหน้าตารางเรียน) เพราะต้องการให้มีเวลาเพียงพอในการทบทวนหรือดูซ้ำเพื่อทำความเข้าใจเนื้อหาให้ดีก่อนจะไปต่อ หากนักเรียนสามารถทำความเข้าใจได้เร็วก็สามารถดูวิดีโอต่อเนื่องได้เช่นกัน",
  },
  {
    question: "ถามคำถามอาจารย์อย่างไร?",
    answer:
      "นักเรียนสามารถถามคำถามที่เกี่ยวข้องกับเนื้อหาได้ทุกเมื่อใน Channel พูดคุยของแต่ละ Module ซึ่งตอนนี้จะเป็นการพูดคุยผ่าน Application Discord",
  },
];

const QnA2 = [
  {
    question: "เรียนอาทิตย์ละกี่ครั้ง?",
    answer:
      "เราแนะนำให้นักเรียนเรียนอาทิตย์ละ 1-2 วิดีโอ (อ้างอิงได้จากหน้าตารางเรียน เพราะต้องการให้มีเวลาเพียงพอในการทบทวนหรือดูซ้ำเพื่อทำความเข้าใจเนื้อหาให้ดีก่อนจะไปต่อ หากนักเรียนสามารถทำความเข้าใจได้เร็วก็สามารถดูวิดีโอต่อเนื่องได้เช่นกัน",
  },
  {
    question: "ทำไมถึงใช้การเรียนรูปแบบวิดีโอ On-demand?",
    answer:
      "เพราะว่าเราต้องการให้เนื้อหาในวิดีโอความกระชับที่สุดจากประสบการณ์ที่เคยเรียนคอร์ส Live ต่างๆจะมีความยาวเกินความจำเป็นจึงอาจจะทำให้เสียเวลาได้ หากมีปัญหาระหว่างเรียนสามารถถามคำถามใน Channel พูดคุยเพื่อที่นักเรียนคนอื่นที่อาจจะมีปัญหาเดียวกันจะได้เห็นเช่นกัน",
  },
];

function Questionsection() {
  return (
    <div id="question-section">
      <div>
        <div className="flex flex-col bg-stone-900 h-56 w-full justify-center ">
          <div className="flex flex-col gap-3 mx-32 text-white w-6/12">
            <div className="flex gap-2">
              <p className="text-3xl font-black">|</p>
              <p className="text-4xl">คำถามที่พบบ่อย</p>
            </div>
            <p className="text-xl w-5/6">
              ไม่พบคำถามที่คุณต้องการ? ติดต่อทีมงาน ของเราได้เลย
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex w-4/5 justify-center gap-10 ">
            <div className="flex flex-col my-10 w-2/4 ">
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
            </div>
            <div className="flex flex-col my-10 w-2/4 ">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questionsection;

{
  /* <div className="flex flex-col border-y border-stone-400 h-36 gap-5 p-5">
                    <div className="flex justify-between">
                        <div className="flex gap-4">
                            <p>icon</p>
                            <p className="text-xl font-bold">ไม่มีพื้นฐานมาก่อนเรียนได้ไหม?</p>
                        </div>
                        <p>icon</p>
                    </div>
                    <div>
                        <p>คำตอบ</p>
                    </div>
                </div> */
}

{
  /* <div className="flex flex-col border-b border-stone-400 h-36 gap-5 p-5">
                    <div className="flex justify-between">
                        <div className="flex gap-4">
                            <p>icon</p>
                            <p className="text-xl font-bold">ต้องเรียน Module ไหนบ้าง?</p>
                        </div>
                        <p>icon</p>
                    </div>
                    <div>
                        <p>คำตอบ</p>
                    </div>
                </div> */
}
{
  /* 
                <div className="flex flex-col border-b border-stone-400 h-36 gap-5 p-5">
                    <div className="flex justify-between">
                        <div className="flex gap-4">
                            <p>icon</p>
                            <p className="text-xl font-bold">ใช้เวลาเรียนนานแค่ไหน?</p>
                        </div>
                        <p>icon</p>
                    </div>
                    <div>
                        <p>คำตอบ</p>
                    </div>
                </div>

              </div> */
}

{
  /* <div className="flex flex-col mt-36 w-2/4  ">
                <div className="flex flex-col border-y border-stone-400 h-36 gap-5 p-5">
                    <div className="flex justify-between">
                        <div className="flex gap-4">
                            <p>icon</p>
                            <p className="text-xl font-bold">เรียนผ่านอะไร?</p>
                        </div>
                        <p>icon</p>
                    </div>
                    <div>
                        <p>คำตอบ</p>
                    </div>
                </div> */
}

{
  /* <div className="flex flex-col border-b border-stone-400 h-36 gap-5 p-5">
                    <div className="flex justify-between">
                        <div className="flex gap-4">
                            <p>icon</p>
                            <p className="text-xl font-bold">ผู้สอนเป็นใคร?</p>
                        </div>
                        <p>icon</p>
                    </div>
                    <div>
                        <p>คำตอบ</p>
                    </div>
                </div> */
}
