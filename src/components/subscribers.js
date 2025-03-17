import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Subscribers() {
  return (
    <Card className="max-w-sm mx-auto p-5 shadow-lg rounded-xl border border-gray-200 bg-white mt-4">
      {/* Card Header with Title & Description */}
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-bold text-gray-800">
          Subscriber Added
        </CardTitle>
        <CardDescription className="text-gray-400">
          Please Check you email
        </CardDescription>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="flex flex-col items-center space-y-4">
        <p className="text-lg font-semibold text-gray-700">
          Wow!! Shariar Duke Subscribed
        </p>
        <p className="text-sm text-gray-500">
          Last Subscription at : 12:36:00{" "}
        </p>
      </CardContent>
    </Card>
  );
}
