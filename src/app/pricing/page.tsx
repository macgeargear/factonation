import Link from "next/link";

import PriceCard from "./PriceCard";
import { pricingPlans } from "./pricing_plans";

export const metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <section className="text-[#222] container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Simple, transparent pricing
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Unlock all features including unlimited courses for your account.
        </p>
      </div>
      {pricingPlans.map((e, i) => (
        <PriceCard
          key={i}
          module={e!.module}
          title={e!.title}
          price={e!.price}
          desc={e!.desc}
        />
      ))}

      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
          Factonation is a demo app.{" "}
          <strong>You can test the upgrade and won&apos;t be charged.</strong>
        </p>
      </div>
    </section>
  );
}
