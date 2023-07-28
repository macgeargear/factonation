import { Icons } from "@/components/Icon";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pricingPlan } from "@/types";
import Link from "next/link";
import { FC } from "react";

interface PriceCardProps {
  module: string;
  title: string;
  price: number;
  desc: string[];
}

const PriceCard: FC<PriceCardProps> = ({ module, title, price, desc }) => {
  return (
    <div className="grid w-full items-start gap-10 rounded-lg border border-primary-button p-10 md:grid-cols-[1fr_200px]">
      <div className="grid gap-6">
        <h3 className="text-xl font-bold sm:text-2xl">{`Module ${module}`}</h3>
        <p className="text-xl font-bold sm:text-2xl">{`Module ${title}`}</p>
        <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          {desc.map((e, i) => {
            return (
              <li className="flex items-center" key={i}>
                <Icons.check className="mr-2 h-4 w-4 text-slate-200" /> {e}
              </li>
            );
          })}
          {/* <li className="flex items-center">
            <Icons.check className="mr-2 h-4 w-4 text-slate-200" /> Unlimited
            Posts
          </li>
          <li className="flex items-center">
            <Icons.check className="mr-2 h-4 w-4 text-slate-200" /> Unlimited
            Users
          </li>

          <li className="flex items-center">
            <Icons.check className="mr-2 h-4 w-4 text-slate-200" /> Custom
            domain
          </li>
          <li className="flex items-center">
            <Icons.check className="mr-2 h-4 w-4 text-slate-200" /> Dashboard
            Analytics
          </li>
          <li className="flex items-center">
            <Icons.check className="mr-2 h-4 w-4 text-slate-200" /> Access to
            Discord
          </li>
          <li className="flex items-center">
            <Icons.check className="mr-2 h-4 w-4 text-slate-200" /> Premium
            Support
          </li> */}
        </ul>
      </div>
      <div className="flex flex-col gap-4 text-center">
        <div>
          <h4 className="text-5xl font-bold">{`${price} THB`}</h4>
          <p className="text-sm font-medium text-muted-foreground">
            Billed Monthly
          </p>
        </div>
        <Link
          href="/sign-in"
          className={cn(buttonVariants({ size: "lg" }), "bg-primary-button")}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default PriceCard;
