import fs from 'fs';

export default async function inject(dir: string, filePattern: string) {
    const files = fs.readdirSync(dir);
    files.forEach(async (file) => {
      const path = `${dir}/${file}`;
      if (fs.statSync(path).isDirectory()) {
        await inject(path, filePattern);
      } else if(file.endsWith(filePattern)) {
        await import(path);
      }
    });
};