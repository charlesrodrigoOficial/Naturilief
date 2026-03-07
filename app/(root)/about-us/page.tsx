import { APP_NAME } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

const AboutUsPage = () => {
  return (
    <section className="max-w-3xl mx-auto py-10 space-y-6">
      <h1 className="h1-bold">About Us</h1>
      <p className="text-muted-foreground leading-7">
        Welcome to {APP_NAME}. We are focused on offering natural, high-quality
        products that support healthier everyday living.
      </p>
      <p className="text-muted-foreground leading-7">
        Our team curates trusted items and aims to provide a smooth shopping
        experience from discovery to delivery.
      </p>
      <div className="space-y-2">
        <h2 className="h3-bold">Our Values</h2>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>Quality and transparency</li>
          <li>Customer-first support</li>
          <li>Continuous improvement</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUsPage;
