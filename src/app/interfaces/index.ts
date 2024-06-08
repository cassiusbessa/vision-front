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

export type ReactionsCount = {
  heart: number;
  comment: number;
  share: number;
  lastUserReactionFullName?: string;
};

export type Comment = {
  user: User;
  content: string;
  date: string;
  replies: Comment[];
};

export type FrameWork = {
  id: string;
  name: string;
  image: string;
};
