import { Button } from "@/components/ui/button";

export default function AForm({ createInvoice }) {
  return (
    <form className="m-4" action={createInvoice}>
      <input type="hidden" name="customerId" value="001" />
      <input
        type="number"
        className="border-black border mx-2  rounded"
        name="amount"
      />
      <Button type="submit">Create Invoice</Button>
    </form>
  );
}
