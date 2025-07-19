import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export default async function markdownToHtml(file: string) {
  return await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeExternalLink)
    .use(rehypeOptimizeImage)
    .process(file)
    .then((value) => value.toString());
}
