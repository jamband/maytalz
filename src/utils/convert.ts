import { remark } from "remark";
import externalLinks from "remark-external-links";
import html from "remark-html";

export const markdownToHtml = async (file: string) => {
  return await remark()
    .use(html, { sanitize: false })
    .use(externalLinks)
    .process(file)
    .then((value) => value.toString());
};
