/* Image utilities */

export const resizeImage = async (file: Buffer, width: number, height: number): Promise<Buffer> => {
  const sharp = require('sharp');
  return sharp(file)
    .resize(width, height)
    .toBuffer();
};

export const convertToJpeg = async (file: Buffer): Promise<Buffer> => {
  const sharp = require('sharp');
  return sharp(file)
    .jpeg()
    .toBuffer();
};