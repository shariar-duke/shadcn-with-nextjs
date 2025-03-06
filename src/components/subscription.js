"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";

// ✅ Define form validation schema using Zod
const formSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
});

export default function SubscriptionForm() {
  // ✅ Initialize the form using `react-hook-form`
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { fullName: "", email: "" },
  });

  // ✅ Handle form submission
  function onSubmit(values) {
    console.log(values); // You can replace this with an API call
  }

  // check the form condition
  const { isSubmitting, isValid } = form.formState;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* ✅ Wrap the form with the `Form` component */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* ✅ Full Name Field */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 text-sm font-semibold">
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ✅ Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 text-sm font-semibold">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ✅ Submit Button */}
          <Button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all"
          >
            Subscribe
          </Button>
        </form>
      </Form>
    </div>
  );
}
