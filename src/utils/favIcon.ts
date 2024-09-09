import axios from 'axios';
import * as cheerio from 'cheerio';

const getFavIcon = async (originalUrl: string): Promise<string> => {
  try {
    // Vérifier si l'URL est valide
    new URL(originalUrl);

    const response = await axios.get(originalUrl);
    const html = response.data;
    const $ = cheerio.load(html);
    const favicon =
      $('link[rel="icon"]').attr('href') ||
      $('link[rel="shortcut icon"]').attr('href');

    if (favicon) {
      // Si l'URL de la favicon est relative, la convertir en URL absolue
      const url = new URL(favicon, originalUrl);
      return url.href;
    } else {
      return '';
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error fetching favicon:', error.message);
    } else {
      console.error('Unexpected error fetching favicon:', error);
    }
    return '';
  }
};

export default getFavIcon;
