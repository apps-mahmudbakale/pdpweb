/**
 * Gallery items.
 *
 * Each item may supply an `image` path (e.g. `/gallery/2026-convention.jpg`).
 * Where `image` is omitted the gallery renders a generated branded placeholder
 * instead — see src/components/ui/GalleryFrame.tsx. Drop real photographs into
 * `public/gallery/` and add the path to `image` to swap them in; no component
 * changes needed.
 */

export type GalleryCategory =
  | 'Conventions'
  | 'Rallies'
  | 'Campaign'
  | 'Officers'
  | 'Constituency'
  | 'Programmes';

export interface GalleryItem {
  id: number;
  title: string;
  caption: string;
  category: GalleryCategory;
  /** ISO date the photograph was taken. */
  date: string;
  image?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'National Convention 2008',
    caption: 'The International Conference Centre, Abuja, on the morning of the 2008 convention that produced a single consensus candidate.',
    category: 'Conventions',
    date: '2008-03-08',
    image: 'https://images.unsplash.com/photo-1551845811-1539fc1f4812?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Delegates at Port Harcourt 2016',
    caption: 'Over two thousand delegates filled the hall for the convention that introduced the “Change the change” campaign slogan.',
    category: 'Conventions',
    date: '2016-05-21',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'The 2007 campaign flag-off',
    caption: 'The party flag was flagged off for the April 2007 general elections, with the presidential candidate addressing party members.',
    category: 'Campaign',
    date: '2006-12-09',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: '2019 campaign launch',
    caption: 'The formal launch of the 2019 presidential campaign under the slogan adopted at the Port Harcourt convention.',
    category: 'Campaign',
    date: '2019-02-01',
    image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    title: 'Ward congress, Kano',
    caption: 'A ward congress in progress. Every officer above this room is elected by members at this level.',
    category: 'Constituency',
    date: '2023-04-12',
    image: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    title: 'Chapter meeting, Rivers',
    caption: 'State chapter officers deliberating on the convention timetable and the state’s delegation list.',
    category: 'Officers',
    date: '2024-06-18',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 7,
    title: 'Peoples Democratic Institute symposium',
    caption: 'Academics and practitioners at the annual symposium of the party’s intellectual arm.',
    category: 'Programmes',
    date: '2025-11-14',
    image: 'https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 8,
    title: 'National headquarters, Wadata Plaza',
    caption: 'The National Secretariat at Wadata Plaza, Michael Okpara Way, Wuse Zone 5, Abuja.',
    category: 'Officers',
    date: '2024-01-09',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 9,
    title: 'Organiser training, Abuja',
    caption: 'State and local government organisers in training on voter registration and the constitutional duties of ward officers.',
    category: 'Programmes',
    date: '2024-09-17',
    image: 'https://images.unsplash.com/photo-1521729839347-131a32f9abcb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 10,
    title: 'Rally in the south-east',
    caption: 'A constituency rally. The party’s structure is designed to keep these local meetings running, not only the national ones.',
    category: 'Rallies',
    date: '2025-02-21',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 11,
    title: 'Governors’ forum',
    caption: 'State governors and party officers at a working meeting on the platform and the national calendar.',
    category: 'Officers',
    date: '2023-08-10',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 12,
    title: 'Local congress delegates',
    caption: 'Delegates elected at local congresses, on their way to the National Convention.',
    category: 'Conventions',
    date: '2016-05-19',
    image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export const galleryCategories: Array<GalleryCategory | 'All'> = [
  'All',
  'Conventions',
  'Rallies',
  'Campaign',
  'Officers',
  'Constituency',
  'Programmes',
];

export function formatGalleryDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-NG', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
