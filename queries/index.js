import { Subscriber } from "../models/subs-model";

export async function getSubscribers() {
  try {
    const subscribers = await Subscriber.find({}).lean();
    return subscribers;
  } catch (e) {
    throw new Error(e.message);
  }
}
