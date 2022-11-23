/**
 * the following rules are required for this script to work as expected:
 *
 * - when uploading assets such as images on the contentful side,
 * the file name should be "image.xxx"
 *
 * - asset title must be: "<title>|<width>x<height>" e.g. "cat|720x480"
 * if the title is "image", the alt will be an empty string
 */

import type { Root } from "hast";
import { visit } from "unist-util-visit";

export default function rehypeOptimizeImage() {
  return (tree: Root) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "img" && node.properties) {
        const alt = node.properties.alt;

        if (typeof alt === "string" && alt.includes("|")) {
          const [title, size] = alt.split("|");
          const [width, height] = size.split("x");

          node.properties.alt = title === "image" ? "" : title;
          node.properties.width = width;
          node.properties.height = height;
        } else {
          node.properties.alt = "";
          node.properties.width = "1920";
          node.properties.height = "1080";
        }

        node.properties.loading = "lazy";
      }
    });
  };
}
