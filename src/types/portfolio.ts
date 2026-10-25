/**
 * Портфолио төсөл болон хувийн мэдээллийн төрлүүд
 */

export interface SubLink {
  label: string;
  url: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: 'Вэб хуудас' | 'Медиа & Видео' | 'Аниме & Контент' | 'Төлөвлөгөө';
  url: string;
  badge?: string;
  sourceFile: string;
  imageUrl?: string;
  subLinks?: SubLink[];
  highlights?: string[];
}

export interface PersonalInfo {
  name: string;
  registeredName: string;
  age: number;
  height: string;
  nickname: string;
  club: string;
  hobby: string;
  favoriteBand: string;
  favoriteSong: string;
  favoriteFood: string;
  favoriteMovie: string;
  favoriteAnime: string;
  favoriteAnimal: string;
  futureGoal: string;
  learningSkills: string[];
  email: string;
  avatarUrl: string;
}
