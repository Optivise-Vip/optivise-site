import Link from "next/link";
import { footer, site } from "../lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border py-16 px-6 lg:px-10"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Wordmark + blurb */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-display text-xl font-semibold text-foreground tracking-tight hover:text-accent transition-colors duration-200 inline-block mb-4"
            >
              Optivise
            </Link>
            <p className="font-sans text-sm text-muted leading-relaxed max-w-xs">
              {footer.blurb}
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation" className="md:col-span-1">
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-5">
              Navigate
            </p>
            <ul className="flex flex-col gap-3">
              {footer.links.map((link) => {
                const isExternal = link.href.startsWith("http");
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(isExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="font-sans text-sm text-muted hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-1">
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-5">
              Contact
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="font-sans text-sm text-muted hover:text-foreground transition-colors duration-200"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <span className="font-sans text-sm text-muted">
                  {site.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-sans text-xs text-muted/60">
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted/40">
            {site.url.replace("https://", "")}
          </p>
        </div>
      </div>
    </footer>
  );
}
