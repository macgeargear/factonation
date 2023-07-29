"use client";
// import { Metadata } from "next";
import Image from "next/image";
import loginImage from "../../../../public/IMG_1798.webp";
// import Link from "next/link";
// import { Command } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { Button, buttonVariants } from "@/components/ui/Button";
import { UserAuthForm, UserAuthFormPage } from "@/components/UserAuthForm";
// import { Icons } from "@/components/Icon";
import React from "react";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
import { FC } from "react";
import { useState } from "react";

const page: FC = () => {
  return (
    <div className="flex min-h-screen flex-1">
      <UserAuthForm page={UserAuthFormPage.LogIn} />
      <div className="relative hidden w-0 flex-1 lg:block">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={loginImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default page;
