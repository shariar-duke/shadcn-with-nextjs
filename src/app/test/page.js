import CourseComment from "./components/add-post";
import AForm from "./components/form";

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
      <AForm createInvoice={createInvoice} />
      <CourseComment postId="P001" />
    </>
  );
}
