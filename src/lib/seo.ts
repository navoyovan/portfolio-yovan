const SITE = (import.meta.env.SITE ?? 'https://navoyovan.github.io').replace(/\/$/, '');
const BASE = import.meta.env.BASE_URL.replace(/\/$/, ''); // e.g. '/portfolio-yovan'

export const SITE_ROOT = `${SITE}${BASE}/`;
export const AUTHOR_NAME = 'Yovan Gunardio Darmawan';

/** Absolute URL for a site path, e.g. absoluteUrl('/blog/foo/') */
export function absoluteUrl(path = '/'): string {
  if (/^https?:\/\//.test(path)) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE}${BASE}${clean}`;
}

/** Canonical page URL with a trailing slash (matches GitHub Pages + sitemap). */
export function pageUrl(path = '/'): string {
  const url = absoluteUrl(path);
  return url.endsWith('/') || /\.[a-z0-9]+$/i.test(url) ? url : `${url}/`;
}

/** Map an AI collaborator name to its publishing organization (for schema contributor). */
export function aiOrganization(name: string): { '@type': 'Organization'; name: string; url: string } | null {
  const n = name.toLowerCase();
  if (n.includes('claude') || n.includes('anthropic')) {
    return { '@type': 'Organization', name: 'Anthropic', url: 'https://www.anthropic.com' };
  }
  if (n.includes('gemini') || n.includes('antigravity') || n.includes('deepmind') || n.includes('google')) {
    return { '@type': 'Organization', name: 'Google', url: 'https://www.google.com' };
  }
  if (n.includes('gpt') || n.includes('openai')) {
    return { '@type': 'Organization', name: 'OpenAI', url: 'https://openai.com' };
  }
  return null;
}
