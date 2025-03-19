"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function Typewriter() {
  const words = [
    {
      text: "Turning",
    },
    {
      text: "Ideas",
    },
    {
      text: "into",
    },
    {
      text: "AI-Driven",
    },

    {
      text: "Realities.",
    },
  ];
  return (
    <div>
      <TypewriterEffect
        words={words}
        className="text-center text-[40px] md:text-5x1 lg:text-6x1"
      />
    </div>
  );
}
