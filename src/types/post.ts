import type { Entry, EntryFields } from "contentful";
import type { Tag } from "./tag";

export type Post = {
  title: EntryFields.Text;
  description: EntryFields.Text;
  slug: EntryFields.Text;
  body: EntryFields.Text;
  tags: Array<Entry<Tag>> | undefined;
};
