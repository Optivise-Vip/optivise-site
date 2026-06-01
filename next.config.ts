import type { NextConfig } from "next";

/**
 * Content-Security-Policy.
 * Tightened for a static marketing site: everything is same-origin. Fonts are
 * self-hosted via next/font, so no external font domains are needed.
 * - 'unsafe-inline' on script/style is required by Next.js hydration bootstrap
 *   and React's server-rendered inline style attributes (e.g. the hero gradient).
 *   We have no external scripts and no eval, so this stays low-risk.
 * - The 3D intro (react-three-fiber) compiles shaders via the WebGL API, not JS
 *   eval, and fetches nothing external — so it is unaffected by this policy.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "worker-src 'self' blob:",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply the security headers to every route.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
