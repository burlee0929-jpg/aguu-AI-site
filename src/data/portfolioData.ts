import { PersonalInfo, ProjectItem } from '../types/portfolio';

const NETLIFY_BASE_URL = 'https://bucolic-klepon-91d72c.netlify.app/';

/**
 * Хэрэглэгчийн хувийн мэдээлэл
 */
export const PERSONAL_INFO: PersonalInfo = {
  name: 'Алтан-Од',
  registeredName: 'Алтан-Од®',
  age: 17,
  height: '188 см',
  nickname: 'Агуу',
  club: 'Naturbucks клуб',
  hobby: 'Волейбол (Volleyball)',
  favoriteBand: 'Хурд',
  favoriteSong: 'Санахын гэгээ',
  favoriteFood: 'Паста ба Цуйван',
  favoriteMovie: 'Авенжерс (Avengers)',
  favoriteAnime: 'Solo Leveling',
  favoriteAnimal: 'Нохой',
  futureGoal: 'Код сурах, вэб хөгжүүлэгч болох',
  learningSkills: ['HTML', 'CSS', 'JavaScript'],
  email: 'altangerelaltanod110@gmail.com',
  avatarUrl:
    'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Y%C5%ABki_Ishikawa_%28Legavolley_2022%29.jpg/960px-Y%C5%ABki_Ishikawa_%28Legavolley_2022%29.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail',
};

/**
 * "Миний бүтээлүүд" — Давхардалгүй, цэвэр 3 үндсэн бүтээлийн жагсаалт (Array)
 * Карт бүр шинэ цонхонд (target="_blank") нээгдэнэ.
 */
export const MY_PROJECTS: ProjectItem[] = [
  {
    id: 'project-star',
    title: 'Star — YouTube Медиа Хуудас',
    description:
      'Хайлт, хажуугийн цэс болон дуу хөгжим, аниме, тоглоомын 8 шилдэг видео бүхий YouTube медиа платформын хуулбар загвар.',
    category: 'Медиа & Видео',
    badge: 'Онцлох',
    url: `${NETLIFY_BASE_URL}star.html`,
    sourceFile: 'star.html',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg',
    highlights: ['YouTube дизайн', '8 Видео тоглуулагч', 'Цэс & Хайлт'],
  },
  {
    id: 'project-future',
    title: 'Future — Ирээдүйн төлөвлөгөө & Solo Leveling',
    description:
      'Код сурах (HTML, CSS, JS) ирээдүйн зорилго, дуртай дуу, цуйван болон алдарт Solo Leveling анимэгийн улирлуудын цуглуулга бүхий хуудас.',
    category: 'Төлөвлөгөө',
    badge: 'Төлөвлөгөө',
    url: `${NETLIFY_BASE_URL}future.html`,
    sourceFile: 'future.html',
    imageUrl: 'https://sgimage.netmarble.com/images/netmarble/sololv/20230313/r20w1678676611229.jpg',
    highlights: ['Код сурах зорилго', 'Solo Leveling Season 1-3', 'Хувийн сонирхол'],
  },
  {
    id: 'project-index',
    title: 'Home — Үндсэн Танилцуулга Хуудас',
    description:
      'Алтан-Одын тамирчны профайл, Naturbucks клубийн мэдээлэл, 188 см өндөр болон хувийн дэлгэрэнгүй танилцуулга хуудас.',
    category: 'Вэб хуудас',
    badge: 'Үндсэн',
    url: `${NETLIFY_BASE_URL}index.html`,
    sourceFile: 'index.html',
    imageUrl:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Y%C5%ABki_Ishikawa_%28Legavolley_2022%29.jpg/960px-Y%C5%ABki_Ishikawa_%28Legavolley_2022%29.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail',
    highlights: ['Тамирчны профайл', 'Naturbucks клуб', 'Эх бүтэц'],
  },
];
