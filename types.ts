
export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
}

export interface NewsPost {
  id: number;
  title: string;
  date: string;
  category: string;
  imageUrl: string;
}

export enum Section {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  NEWS = 'news',
  CONTACT = 'contact'
}
