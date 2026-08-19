import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: string) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL}
`;

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const baseOrigin = site?.toString().replace(/\/$/, '') || '';
  const sitemapURL = `${baseOrigin}${base}/sitemap-index.xml`;
  return new Response(getRobotsTxt(sitemapURL).trim(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
