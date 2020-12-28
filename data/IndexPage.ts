import { Project } from "./Project";
import { SocialMediaLinks } from "./SocialMediaLinks";

export interface IndexPage {
  headline: string;
  subheading: string;
  projects: Project[];
  aboutMe: string;
  socialMedia: SocialMediaLinks;
}
