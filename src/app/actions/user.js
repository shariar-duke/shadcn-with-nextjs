"use server";

export async function updateUser(formData) {
  const name = formData.get("name");

  console.log("The anme is ", name);
}
