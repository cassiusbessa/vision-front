export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
  image?: string;
};
