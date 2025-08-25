import path from 'path';

export const seedingConfig = {
  directory: path.join(__dirname, '..', 'seeds'),
  loadExtensions: ['.js', '.ts']
};