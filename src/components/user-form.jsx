"use client";
import { updateUser } from "@/app/actions/user";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
export default function UserForm({ userId }) {
  const updatedUserWithId = updateUser.bind(null, userId);
  return (
    <form
      action={(formData) => {
        updatedUserWithId(formData);
        toast.success("Updated User Successfully");
      }}
      className="p-4 flex"
    >
      <Input className="w-1/2 mx-2" type="text" name="name" />
      <Button type="submit">Update User Name</Button>
    </form>
  );
}
