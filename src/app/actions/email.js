"use server";
import EmailTemplate from "@/components/email-template";
import { Resend } from "resend";
import { Subscriber } from "../../../models/subs-model";

import { revalidatePath } from "next/cache";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
  try {
    const email = formData["email"];
    const fullName = formData["fullName"];

    if (!email) return null;

    const foundSubscriber = await Subscriber.findOne({ email: email }).lean();

    console.log(foundSubscriber);

    if (!foundSubscriber) {
      const subscribersPayload = {
        name: fullName,
        email,
      };

      await Subscriber.create(subscribersPayload);

      const message = `Dear ${fullName} thank you for subscribing to Shariar's Newsletter . The door toward abundance of knowledge is now open. Enjoy `;

      await resend.emails.send({
        from: "onboarding@resend.dev", // ✅ Use Resend's default sender email
        to: email,
        subject:
          "Congratulations !!! You have subscribed to Shariar's Newsletter",
        react: EmailTemplate({ message }),
      });
    } else {
      throw new Error(`${email} subscribed alrady`);
    }

    revalidatePath("/");
  } catch (e) {
    throw new Error(e.message);
  }
}
