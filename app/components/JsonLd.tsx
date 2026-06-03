import { site } from "../lib/site";

/**
 * Site-wide structured data (schema.org) rendered into the initial server HTML.
 * Tells search engines that "Optivise" = this specific entity — the key signal
 * for disambiguating a contested brand name. Server component on purpose: the
 * <script> must be present before JS runs.
 */
export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}${site.logoPath}`,
    description: site.description,
    email: site.email,
    ...(site.sameAs.length > 0 ? { sameAs: site.sameAs } : {}),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
