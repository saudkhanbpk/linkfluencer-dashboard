import axios from 'axios';
import { load } from 'cheerio';

export async function getFaviconUrl(
  websiteUrl: string,
): Promise<string | null> {
  try {
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const targetUrl = encodeURIComponent(websiteUrl);

    const response = await axios.get(proxyUrl + targetUrl);
    const html = response.data.contents;

    const $ = load(html);

    const faviconElement = $(
      'link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]',
    ).first();
    let faviconUrl = faviconElement.attr('href');

    if (faviconUrl && !faviconUrl.startsWith('http')) {
      const url = new URL(websiteUrl);
      faviconUrl = `${url.origin}${faviconUrl}`;
    }

    return faviconUrl || null;
  } catch (error) {
    console.error('Erreur lors de la récupération du favicon:', error);
    return null;
  }
}
