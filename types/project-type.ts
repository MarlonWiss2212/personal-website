export interface ProjectType {
  title: string;
  message: string;
  images: string[];
  className: string;
  web?: {
    link?: string;
    gitLink?: string;
  }
  appStore?: {
    appleLink?: string;
    googleLink?: string;
    gitLink?: string;
  }
}
