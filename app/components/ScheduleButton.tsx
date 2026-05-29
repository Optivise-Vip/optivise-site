"use client";

import { site } from "../lib/site";

interface ScheduleButtonProps {
  label?: string;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
}

export default function ScheduleButton({
  label = "Schedule a call",
  href = site.schedulingUrl,
  variant = "primary",
  className = "",
}: ScheduleButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold font-sans tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const variants = {
    primary:
      "bg-accent text-background hover:bg-accent-bright active:scale-[0.98]",
    ghost:
      "border border-border text-foreground hover:border-foreground hover:text-foreground active:scale-[0.98]",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {label}
    </a>
  );
}
