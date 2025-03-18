import { Card, CardContent } from "@/components/ui/card";

import { getSubscribers } from "../../queries";

export default async function Subscribers() {
  const subscribers = await getSubscribers();
  console.log("All the subscribers are", subscribers);
  return (
    <div>
      {subscribers.map((sub) => (
        <Card
          key={sub.id}
          className="max-w-sm mx-auto p-5 shadow-lg rounded-xl border border-gray-200 bg-white mt-4"
        >
          {/* Card Content */}
          <CardContent className="flex flex-col items-center space-y-4">
            <p className="my-2">Wow!! {sub.name} Subscribed</p>
            <p>
              Subscribed on :
              {new Intl.DateTimeFormat("en-us").format(sub.createdAt)}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
