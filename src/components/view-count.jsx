"use client";
import { incrementViews } from "@/app/actions/blog";
import { useEffect, useState } from "react";

export default function ViewCount({ initialViews }: { initialViews: number }) {
  const [views, setViews] = useState(initialViews);

  useEffect(() => {
    const updateViews = async () => {
      const updatedViews = await incrementViews();
      setViews(updatedViews);
    };

    updateViews();
  }, []);

  return <p> Total views :{views}</p>;
}
