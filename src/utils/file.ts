import fs from 'fs';
import path from 'path';

export const saveFile = (file: Express.Multer.File, destinationPath: string) => {
  const fullPath = path.join(destinationPath, file.originalname);
  fs.writeFileSync(fullPath, file.buffer);
  return fullPath;
};

export const deleteFile = (filePath: string) => {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
};
