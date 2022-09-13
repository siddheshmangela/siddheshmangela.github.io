import { promises as fs } from 'fs';

const copyOgImage = async () => {
  try {
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

const deleteImageFolder = async () => {
  try {
    await fs.rm('./dist/images', { recursive: true, force: true });
    return Promise.resolve();
  } catch (e) {
    return Promise.reject(e);
  }
};

const start = async () => {
  try {
    await copyOgImage();
    await deleteImageFolder();
  } catch (e) {
    console.log(e);
  }
};

start();
