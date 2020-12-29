export interface Project {
  name: string;
  shortDescription: string;
  fullDescription: string;
  repositoryURL: string;
  liveSiteURL: string;
  slug: string;
  coverURL: string;
  technologies: {
    name: string;
    color: string;
  }[];
}
