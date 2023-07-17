import { FC } from "react";
import { Button, buttonVariants } from "./ui/Button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ScrollLink from "./ScrollLink";

const Navbar: FC = () => {
  return (
    <div className="sticky top-0 inset-x-0 h-fit z-[10] py-4 bg-[#0B0E0C] text-background backdrop-blur-lg  ">
      <div className="container h-full mx-auto flex items-center justify-between gap-2">
        <div className="flex justify-start gap-12 items-center">
          <Link href="/">
            <h1 className="hidden font-bold text-white text-2xl md:block">
              Factonation
            </h1>
          </Link>

          <div className="hidden md:flex md:items-center md:justify-start md:gap-8">
            <ScrollLink href="/course">คอร์สเรียน</ScrollLink>
            <ScrollLink href="#price-section" className="scroll-smooth">
              ราคาคอร์ส
            </ScrollLink>
            <Link href="/store">บทความ</Link>
            <ScrollLink href="#question-section">คำถามที่พบบ่อย</ScrollLink>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link
            className={cn(buttonVariants({ variant: "ghost" }))}
            href="/sign-in"
          >
            เข้าสู่ระบบ
          </Link>
          <Link
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "bg-secondary-button text-[#222]"
            )}
            href="/"
          >
            ลงทะเบียน
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
