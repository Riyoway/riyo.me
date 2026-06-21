"use client";

import { useEffect, useState } from "react";

function greetingForHour(hour: number) {
  if (hour >= 5 && hour < 11) return "おはようございます。";
  if (hour >= 11 && hour < 17) return "こんにちは。";
  if (hour >= 17 && hour < 22) return "こんばんは。";
  return "夜ふかしですね。";
}

export default function TimeGreeting() {
  const [greeting, setGreeting] = useState("こんにちは。");

  useEffect(() => {
    const update = () => setGreeting(greetingForHour(new Date().getHours()));

    update();
    const timer = window.setInterval(update, 60_000);
    document.addEventListener("visibilitychange", update);

    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return <>{greeting}</>;
}
