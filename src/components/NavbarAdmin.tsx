"use client";

import { FC, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { AlignJustify } from "lucide-react";
import { X } from "lucide-react";
import { useAuthContext } from "@/contexts/authContext";

const NavbarAdmin: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { isLoggedIn, name } = useAuthContext();

  return (
    <div className="sticky top-0 z-[10]">
      <div className="sticky top-0 inset-x-0 h-fit z-[10] py-4 bg-[#0B0E0C] text-background backdrop-blur-lg  ">
        <div className="container h-full mx-auto flex items-center justify-between gap-2">
          <div className="flex justify-start gap-12 items-center">
            <Link href="/">
              <h1 className=" font-bold text-white text-2xl md:block">
                Factonation
              </h1>
            </Link>

            <div className="hidden md:flex md:items-center md:justify-start md:gap-8">
              <Link href="/admin/courses">Course</Link>

              <Link href="/admin/users" className="scroll-smooth">
                User
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <>
                <Avatar>
                  <AvatarImage></AvatarImage>
                  <AvatarFallback>{name![0]}</AvatarFallback>
                </Avatar>
                <Link
                  href={"/"}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "bg-secondary-button text-[#222]"
                  )}
                >
                  Log out
                </Link>
              </>
            ) : (
              <>
                <Link
                  className={cn(buttonVariants({ variant: "ghost" }))}
                  href="/login"
                >
                  เข้าสู่ระบบ
                </Link>
                <Link
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "bg-secondary-button text-[#222]"
                  )}
                  href="/register"
                >
                  ลงทะเบียน
                </Link>
              </>
            )}
          </div>
          <button className="lg:hidden">
            <AlignJustify
              type="button"
              className={`${open ? "hidden" : "w-[25px] h-[25px]"}`}
              onClick={() => setOpen(!open)}
            />
            <X
              type="button"
              className={`${
                open
                  ? "w-[25px] h-[25px] rotate-[360deg] duration-500"
                  : "hidden"
              }`}
              onClick={() => setOpen(!open)}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;
