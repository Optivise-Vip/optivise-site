"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav } from "../lib/site";
import ScheduleButton from "./ScheduleButton";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on link click
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10"
        aria-label="Main navigation"
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display text-lg font-semibold text-foreground tracking-tight hover:text-accent transition-colors duration-200"
        >
          Optivise
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-sans text-muted hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <ScheduleButton
            label={nav.cta.label}
            href={nav.cta.href}
            variant="primary"
          />
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-md text-foreground hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-b border-border px-6 pb-6">
          <ul className="flex flex-col gap-4 mb-6 mt-4">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block text-base font-sans text-muted hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ScheduleButton
            label={nav.cta.label}
            href={nav.cta.href}
            variant="primary"
            className="w-full"
          />
        </div>
      )}
    </header>
  );
}
