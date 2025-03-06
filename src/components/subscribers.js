import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Subscribers() {
  return (
    <Card className="max-w-sm mx-auto p-5 shadow-lg rounded-xl border border-gray-200 bg-white mt-4">
      {/* Card Header with Title & Description */}
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-bold text-gray-800">
          Subscriber Stats
        </CardTitle>
        <CardDescription className="text-gray-500">
          Track your latest subscribers here
        </CardDescription>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="flex flex-col items-center space-y-4">
        <p className="text-lg font-semibold text-gray-700">
          Total Subscribers: 1,250
        </p>
        <p className="text-sm text-gray-500">Last updated: 2 hours ago</p>
      </CardContent>

      {/* Card Footer */}
      <CardFooter className="flex justify-center">
        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-all">
          View More
        </button>
      </CardFooter>
    </Card>
  );
}
