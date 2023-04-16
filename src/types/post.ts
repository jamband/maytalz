import type { EntryFieldTypes } from "contentful";

export type Post = {
  contentTypeId: "posts";
  fields: {
    title: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    body: EntryFieldTypes.Text;
  };
};
