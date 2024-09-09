"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /news when the homepage is accessed
    router.push("/category/News/1");
  }, [router]);

  return null; // Optionally show a loading spinner or message here
}