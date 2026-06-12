import { services } from "../services";

export function getRelatedServices(currentSlug, relatedSlugs = []) {
  return services
    .filter((s) =>   s.slug !== currentSlug && relatedSlugs.includes(s.slug))
    .map((s) => ({
      name: s.title,
      slug: `/services/${s.slug}`,
      subtitle: s.subtitle,
    }));
}