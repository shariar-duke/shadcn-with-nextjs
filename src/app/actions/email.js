"use server";
import { Subscriber } from "../../../models/subs-model";
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
    }
  } catch (e) {
    throw new Error(e.message);
  }
}
