import { Button } from "@/components/ui/button";
export default function TestPage() {
  async function createInvoice(formData) {
    "use server";

    const payload = {
      customerId: formData.get("customerId"),
      amount: formData.get("amount"),
    };

    console.log(payload);

    // mutate collection in db

    // send some email
  }
  return (
    <>
      <form className="m-4" action={createInvoice}>
        <input type="hidden" name="customerId" value="001" />
        <input
          type="number"
          className="border-black border mx-2  rounded"
          name="amount"
        />
        <Button type="submit">Create Invoice</Button>
      </form>
    </>
  );
}
