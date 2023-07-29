"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import loginImage from "../../../../public/IMG_1798.webp";
import { UserAuthForm, UserAuthFormPage } from "@/components/UserAuthForm";
import { useState } from "react";

const Page: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className="flex min-h-screen flex-1">
      <UserAuthForm page={UserAuthFormPage.Register} />
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

export default Page;
