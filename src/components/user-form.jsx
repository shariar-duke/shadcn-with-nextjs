import { updateUser } from "@/app/actions/user";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
export default function UserForm() {
  return (
    <form action={updateUser} className="p-4 flex">
      <Input className="w-1/2 mx-2" type="text" name="name" />
      <Button type="submit">Update User Name</Button>
    </form>
  );
}
