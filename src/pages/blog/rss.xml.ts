import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { pageUrl, SITE_ROOT, AUTHOR_NAME } from '../../lib/seo';

export async function GET() {
  const posts = (await getCollection('blog', ({ data }) => !data.draft && !data.noindex)).sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime()
  );

  return rss({
    title: `${AUTHOR_NAME} — Blog`,
    description: 'Technical post-mortems, software architecture deep dives, and performance engineering case studies.',
    site: SITE_ROOT,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      categories: post.data.tags,
      link: pageUrl(`/blog/${post.id.replace(/\.[^/.]+$/, '')}/`),
    })),
    customData: '<language>en</language>',
  });
}
