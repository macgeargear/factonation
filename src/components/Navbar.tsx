"use client";

import { FC, useEffect, useState } from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import ScrollLink from "./ScrollLink";

import {
  AlignJustify,
  LogIn,
  LogOut,
  MailPlus,
  Store,
  UserPlus,
} from "lucide-react";
import { BookMarked } from "lucide-react";
import { Newspaper } from "lucide-react";
import { BadgeHelp } from "lucide-react";
import { DollarSign } from "lucide-react";
import { X } from "lucide-react";
import { useAuthContext } from "@/contexts/authContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";

import { Button, buttonVariants } from "./ui/MainButton";
import { host } from "@/types";
import { useRouter } from "next/navigation";
import { badgeVariants } from "./ui/Badge";

const Navbar: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      console.log(storedToken);
      setToken(storedToken);
    }
  }, []);

  const { isLoggedIn, email, name, logout } = useAuthContext();
  const router = useRouter();

  return (
    <div className="sticky top-0 z-[10]">
      <div className="sticky top-0 inset-x-0 h-fit z-[10] py-4 bg-[#0B0E0C] text-background backdrop-blur-lg  ">
        <div className="container h-full mx-auto flex items-center justify-between gap-2">
          <div className="flex justify-between gap-6 items-center">
            <Link href="/">
              <h1 className=" font-bold text-white text-2xl md:block">
                Factonation
              </h1>
            </Link>
            <div className="lg:flex lg:gap-3 lg:items-cente hidden ">
              <Link href="/module">
                <p>คอร์สเรียน</p>
              </Link>
              <Link href="https://www.lazada.co.th/shop/factonation/">
                <p>ร้านค้า</p>
              </Link>
              <Link href="https://page.line.me/559odtho?openQrModal=true">
                <p>ติดต่อเรา</p>
              </Link>
            </div>
          </div>

          <div className="lg:flex items-center gap-3 hidden ">
            {/* <div className="hidden lg:flex lg:items-center lg:justify-start lg:gap-10">
            
            <Link href="/dashboard">คอร์สเรียน</Link>
          </div> */}
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className=" bg-primary-button">
                    <AvatarImage></AvatarImage>
                    <AvatarFallback>{email![0]}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white" align="end">
                  {/* Name & Email */}
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      {isLoggedIn && (
                        <>
                          <p className="font-xl font-semibold">{email}</p>
                          <p className="font-lg">{name}</p>
                        </>
                      )}
                    </div>
                  </div>
                  <DropdownMenuSeparator className="bg-slate-200 px-4" />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-slate-200 px-4" />

                  <DropdownMenuItem className="cursor-pointer">
                    <Button variant={"ghost"} onClick={() => logout(token)}>
                      Sign out
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
      <div
        className={`${
          open
            ? "lg:hidden flex right-0 fixed h-full w-2/4 sm:w-2/5  z-10 "
            : "hidden"
        }`}
      >
        <div
          className={`bg-[#1c1f1d] text-background backdrop-blur-lg w-full h-screen ease-in-out duration-500 ${
            open ? "translate-x-100" : "-translate-x-0"
          } `}
        >
          <div
            className="flex flex-col gap-4 mx-7 py-6"
            onClick={() => setOpen(!open)}
          >
            <div className="flex gap-2 items-center">
              <BookMarked size={15} />
              <Link href="/dashboard">คอร์สเรียน</Link>
            </div>
            <div className="flex gap-2 items-center">
              <Store size={15} />
              <Link href="https://www.lazada.co.th/shop/factonation/">
                ร้านค้า
              </Link>
            </div>
            <div className="flex gap-2 items-center">
              <MailPlus size={15} />
              <Link href="https://page.line.me/559odtho?openQrModal=true">
                ติดต่อเรา
              </Link>
            </div>

            {isLoggedIn ? (
              <>
                <div className="flex gap-2 items-center">
                  <LogOut size={15} />
                  <Button variant="ghost" onClick={() => logout(token)}>
                    logout
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="flex gap-2 items-center">
                  <LogIn size={15} />
                  <Link href="/login">เข้าสู่ระบบ</Link>
                </div>
                <div className="flex gap-2 items-center">
                  <UserPlus size={15} />
                  <Link href="/register">ลงทะเบียน</Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
