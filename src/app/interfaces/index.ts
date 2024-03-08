export type ProjectLinks = {
  github?: string;
  demo?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  links: ProjectLinks;
  image?: string;
};

export type User = {
  fullName: string;
  image: string;
};

export type ProjectInfo = {
  project: Project;
  user: User;
};
