"use server";

export async function updateUser(userId, formData) {
  const name = formData.get("name");
  console.log("User id is ", userId);
  console.log("The anme is ", name);
}
