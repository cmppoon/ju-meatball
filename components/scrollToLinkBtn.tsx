"use client";
import React from "react";

export function ScrollLink({
  target,
  children,
  className,
}: {
  target: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={className}
      onClick={() =>
        document.getElementById(target)?.scrollIntoView({
          behavior: "smooth",
        })
      }
    >
      {children}
    </button>
  );
}
