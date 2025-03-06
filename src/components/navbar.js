import { ModeToggle } from "./theme-switcher";
export default function Navbar() {
  return (
    <div className="p-1 flex justify-between border-b">
      <h1 className="text-2xl">Subscribe to tapascript</h1>
      <ModeToggle />
    </div>
  );
}
