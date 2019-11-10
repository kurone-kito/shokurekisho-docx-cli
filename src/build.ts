import render from '@kurone-kito/jsonresume-theme-japanese-cv-style-docx';
import fs from 'fs';
import chalk from 'chalk';
import path from 'path';

export const createDocxPath = (src: string) =>
  path.resolve(
    path.dirname(src),
    `${path.basename(src, path.extname(src))}.docx`
  );

export const build = async (src: string, dst = createDocxPath(src)) => {
  const json = JSON.parse(fs.readFileSync(src).toString());
  const docx = await render(json);
  fs.writeFileSync(dst, docx);
  return dst;
};

export default async (src: string, dst?: string) => {
  try {
    const result = await build(src, dst);
    if (result) {
      // eslint-disable-next-line no-console
      console.info(result);
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(chalk.redBright(e instanceof Error ? e.message : e));
  }
};
