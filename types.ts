// src/types.ts

export type Post = {
  frontmatter: {
    title: string;
    date: string;
    // Add any other frontmatter properties your posts have
  };
  url: string;
};

export type Page = {
  data: Post[];
  url: {
    prev: string | null;
    next: string | null;
  };
};
