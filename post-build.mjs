import { promises as fs } from 'fs';

const indexHtmlFile = './dist/index.html';
const imageLinkReplacement = `_image/images/`;

const imagesLinkFix = async () => {
  try {
    const data = await fs.readFile(indexHtmlFile, 'utf8');
    const manupulatedData = data.replaceAll(`/_image/images/`, imageLinkReplacement);

    await fs.writeFile(indexHtmlFile, manupulatedData, 'utf8');
    return Promise.resolve();
  } catch (e) {
    return Promise.reject(e);
  }
};

const start = async () => {
  try {
    await imagesLinkFix();
  } catch (e) {
    console.log(e);
  }
};

start();
