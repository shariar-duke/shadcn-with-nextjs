"use server";
import { Subscriber } from "../../../models/subs-model";

export async function updateUser(userId, formData) {
  const name = formData.get("name");
  console.log("User id is ", userId);
  console.log("The anme is ", name);

  try {
    await Subscriber.findByIdAndUpdate(userId, { name: name });
  } catch (err) {
    throw new Error(err.message);
  }
}
