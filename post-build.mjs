import { promises as fs } from 'fs';

const imagesLinkFix = async () => {
  const indexHtmlFile = './dist/index.html';

  try {
    const data = await fs.readFile(indexHtmlFile, 'utf8');
    const manupulatedData = data.replaceAll(`/_image/images/`, `_image/images/`);

    await fs.writeFile(indexHtmlFile, manupulatedData, 'utf8');
    return Promise.resolve();
  } catch (e) {
    return Promise.reject(e);
  }
};

const copyOgImage = async () => {
  try {
    // const fileDest = './dist/og.jpg';

    const allFiles = await fs.readdir('./dist/_image/images');
    const filesFiltered = allFiles.filter((a) => a.includes('0_') && a.includes('.jpg'));
    const selectedFile = filesFiltered.find((a) => a.includes('0_1050'))
      ? filesFiltered.find((a) => a.includes('0_1050'))
      : filesFiltered[0];

    await fs.copyFile(`./dist/_image/images/${selectedFile}`, './dist/og.jpg');
    return Promise.resolve();
  } catch (e) {
    return Promise.reject(e);
  }
};

const start = async () => {
  try {
    await imagesLinkFix();
    await copyOgImage();
  } catch (e) {
    console.log(e);
  }
};

start();
