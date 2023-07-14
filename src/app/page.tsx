"use client";
import Shop from "@/components/Shop";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <main className="flex justify-between min-h-screen items-center mt-10 px-6">
        <Button onClick={() => setToggle(!toggle)}>Toggle me!</Button>
        <div className="text-[#222]">{toggle ? "foo" : "bar"}</div>
        <Checkbox id="term" />
      </main>
      <div className="flex lg:flex-col gap-8 mt-32 my-4 mr-14"></div>
      <Shop />
    </div>
  );
}
