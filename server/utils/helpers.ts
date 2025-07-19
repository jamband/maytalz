import { parse } from "node-html-parser";

export const extractOpenGraphImage = (html: string) => {
  const root = parse(html);
  const img = root.getElementsByTagName("img");
  return img[0]?.getAttribute("src");
};
