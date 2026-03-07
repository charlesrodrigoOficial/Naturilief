import { APP_NAME } from "@/lib/constants";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
};

const ContactUsPage = () => {
  return (
    <section className="max-w-3xl mx-auto py-10 space-y-6">
      <h1 className="h1-bold">Contact Us</h1>
      <p className="text-muted-foreground leading-7">
        Have a question about products, orders, or delivery? The {APP_NAME}{" "}
        team is ready to help.
      </p>

      <div className="rounded-lg border p-5 space-y-3">
        <div>
          <p className="font-semibold">Email</p>
          <Link
            href="mailto:support@naturilief.com"
            className="text-sm text-muted-foreground hover:underline"
          >
            support@naturilief.com
          </Link>
        </div>
        <div>
          <p className="font-semibold">Phone</p>
          <Link
            href="tel:+94700000000"
            className="text-sm text-muted-foreground hover:underline"
          >
            +94 70 000 0000
          </Link>
        </div>
        <div>
          <p className="font-semibold">Business Hours</p>
          <p className="text-sm text-muted-foreground">
            Monday to Saturday, 9:00 AM to 6:00 PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
