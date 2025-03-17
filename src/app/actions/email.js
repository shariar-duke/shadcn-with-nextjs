"use server";
export async function sendEmail(formData) {
  try {
    const email = formData["email"];
    const fullName = formData["fullName"];
    console.log(email, formData);
  } catch (e) {
    throw new Error(e.message);
  }
}
