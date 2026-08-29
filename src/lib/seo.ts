export const SITE_URL = "https://hermosasoftware.io";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/meta/hermosa_share.gif`;

export const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "Hermosa Software",
	legalName: "Hermosa Software LLC",
	url: SITE_URL,
	logo: `${SITE_URL}/herso-Logo.png`,
	description:
		"Software development company in Uvita, Costa Rica. Web applications, React Native mobile apps, UI/UX design, SEO, and staff augmentation.",
	foundingLocation: {
		"@type": "Place",
		name: "Uvita, Costa Rica",
		address: {
			"@type": "PostalAddress",
			addressCountry: "CR",
		},
	},
	email: "contact@hermosasoftware.io",
	sameAs: [
		"https://www.linkedin.com/company/hermosa-software/",
		"https://www.instagram.com/hermosasoftware/",
	],
	knowsAbout: [
		"Web Development",
		"React Native",
		"TypeScript",
		"Mobile App Development",
		"UI/UX Design",
		"SEO",
		"Staff Augmentation",
	],
};

export const websiteSchema = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: "Hermosa Software",
	url: SITE_URL,
	description: organizationSchema.description,
	publisher: {
		"@type": "Organization",
		name: "Hermosa Software",
	},
};

export function projectSlugFromEntrySlug(slug: string): string {
	const [, ...parts] = slug.split("/");
	return parts.join("/") || slug;
}
