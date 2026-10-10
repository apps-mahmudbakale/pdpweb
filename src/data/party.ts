/**
 * Core identity and history of the Peoples Democratic Party.
 * Facts sourced from the PDP Constitution, the party's official site
 * (peoplesdemocraticparty.com.ng) and the INEC-registered party record.
 */

export const party = {
  name: 'Peoples Democratic Party',
  shortName: 'PDP',
  legalName: 'PEOPLES DEMOCRATIC PARTY',
  tagline: 'Power to the People',
  motto: 'Justice, Unity and Progress',
  founded: '31 August 1998',
  foundedYear: 1998,
  hq: 'Wadata Plaza, Michael Okpara Way, Wuse Zone 5, Abuja',
  website: 'https://peoplesdemocraticparty.com.ng',
  symbol: 'Umbrella',
  /** Horizontal tricolour, top to bottom. */
  colours: ['Green', 'White', 'Red'] as const,
  ideology: ['Social conservatism', 'Economic liberalism', 'Big tent'],
  position: 'Centre-right',
  affiliation: 'Democrat Union of Africa',
} as const;

export const quickFacts = [
  { label: 'Year founded', value: '1998' },
  { label: 'Slogan', value: 'Power to the People' },
  { label: 'Party colours', value: 'Green · White · Red' },
  { label: 'Emblem', value: 'Umbrella' },
  { label: 'Presidents produced', value: '3' },
  { label: 'Years of continuous contesting', value: '1999 – 2015' },
] as const;

export interface Stat {
  value: string;
  label: string;
  hint?: string;
}

export const stats: Stat[] = [
  { value: '1998', label: 'Founded in Abuja', hint: 'Launched 31 August 1998' },
  { value: '25', label: 'Groups merged', hint: 'Associations resolved to form the PDP' },
  { value: '3', label: 'Presidents produced', hint: 'Obasanjo, Yar’Adua, Jonathan' },
  { value: '4', label: 'Presidential wins', hint: '1999, 2003, 2007, 2011' },
];

export interface Milestone {
  year: string;
  title: string;
  body: string;
}

export const history: Milestone[] = [
  {
    year: '1997',
    title: 'The idea takes shape',
    body: 'Elder statesmen across the political spectrum begin meeting to resist a plan to perpetuate military rule and to argue for a civilian, democratic Nigeria.',
  },
  {
    year: '1998',
    title: 'G-7, G-18, G-34',
    body: 'The resistance movement forms in stages. G-18 is led by Abubakar Rimi; its successor, G-34, is led by Alex Ekwueme. This is the stage at which the party later grew out of.',
  },
  {
    year: '19 Aug 1998',
    title: '25 associations resolve to merge',
    body: 'Following the death of General Sani Abacha and the start of the transition to civilian rule, twenty-five political associations — including the All Nigerian Congress, Peoples Consultative Forum, Social Political Party, Peoples Democratic Movement and Peoples National Forum — resolve to form a single party.',
  },
  {
    year: '31 Aug 1998',
    title: 'Launched in Abuja',
    body: 'The Peoples Democratic Party is launched at a colourful ceremony at the International Conference Centre, Abuja. Dr. Alex Ekwueme becomes Chairman of the Steering Committee and Professor Jerry Gana becomes Secretary.',
  },
  {
    year: '1999',
    title: 'Registration and first convention',
    body: 'The PDP is registered by the Independent National Electoral Commission. Congresses and a National Convention are held towards the end of the year; Chief Barnabas Gemade is elected National Chairman and the Peoples Democratic Institute is later established as the party’s intellectual arm.',
  },
  {
    year: '1999 – 2011',
    title: 'Unbroken at the polls',
    body: 'The PDP wins every presidential election it contests, producing three presidents: Olusegun Obasanjo, Umaru Musa Yar’Adua and Goodluck Jonathan.',
  },
  {
    year: '2001',
    title: 'Four-year tenure',
    body: 'The party amends its constitution to move elected executives from a two-year to a four-year tenure. Chief Audu Ogbeh is unanimously elected National Chairman.',
  },
  {
    year: '2011',
    title: 'Power to the people',
    body: 'At its national convention the party returns to its founding motto — Justice, Unity and Progress — and reaffirms the slogan “PDP – Power to the People”, demonstrated by a raised and clenched right fist.',
  },
  {
    year: '2016',
    title: 'Port Harcourt convention',
    body: 'David Mark, a former President of the Senate, introduces “Change the change” as the campaign slogan for the 2019 general elections. The umbrella symbol is retained.',
  },
];

export interface Value {
  title: string;
  body: string;
}

export const values: Value[] = [
  {
    title: 'Unity in diversity',
    body: 'Nigeria is many nations in one. The party was built as a national party — not a regional one — and its organising principle remains bringing patriotic, like-minded Nigerians into a single platform.',
  },
  {
    title: 'Power to the people',
    body: 'Governance exists to serve the people who give it power. The party’s founding text is explicit: no political party belongs to one individual.',
  },
  {
    title: 'Rule of law',
    body: 'The party was born out of a struggle against a regime that eroded fundamental rights. Institutionalising the rule of law, an independent judiciary and social justice remains central.',
  },
  {
    title: 'Equitable distribution',
    body: 'True political and fiscal federalism, power-sharing and an equitable devolution of authority to the zones, states and local governments.',
  },
  {
    title: 'Peaceful rotation',
    body: 'The promotion of the rotation of key political offices so that no region, group or individual is permanently locked out of national leadership.',
  },
  {
    title: 'Party discipline',
    body: 'Internal democracy, due process and the subordination of personal ambition to the collective interest of the party and the country.',
  },
];

export interface Organ {
  name: string;
  role: string;
  description: string;
}

/** The five national organs, as set out in the party constitution. */
export const organs: Organ[] = [
  {
    name: 'National Convention',
    role: 'Highest decision-making organ',
    description:
      'Designs and ratifies the party constitution, approves the budget, elects national officers and nominates presidential candidates. Comprises national and state office-holders, all members of the National Assembly, governors, delegates from the local congress and former national officers.',
  },
  {
    name: 'Board of Trustees',
    role: 'Custodian of party ethics',
    description:
      'The supreme ethical organ of the party. Ensures the highest standards, advises on policy and sources funds. Membership is restricted to members of at least fifty years of age who have held or are holding an elective capacity, plus designated women and zone representatives.',
  },
  {
    name: 'National Executive Committee',
    role: 'Organises the convention',
    description:
      'Organises the National Convention, implements its decisions and supervises other party organs at every level of the party.',
  },
  {
    name: 'National Working Committee',
    role: 'Routine administration',
    description:
      'The administrative organ, comprising the National Chairman, Deputy National Chairmen, the National Secretary and other elected officers. Under the 2017 constitution as amended it has nineteen members.',
  },
  {
    name: 'National Caucus',
    role: 'Policy and coordination',
    description:
      'Maintains the relationship between the executive and legislative arms and streamlines party policy at the national level.',
  },
];

export interface President {
  name: string;
  term: string;
  note: string;
}

export const presidents: President[] = [
  {
    name: 'Olusegun Obasanjo',
    term: '1999 – 2007',
    note: 'Restored civilian rule after sixteen years of military administration. Introduced the National Health Insurance Scheme in 2005.',
  },
  {
    name: 'Umaru Musa Yar’Adua',
    term: '2007 – 2010',
    note: 'Chosen as the party’s presidential candidate in December 2006 and sworn in on 29 May 2007.',
  },
  {
    name: 'Goodluck Ebele Jonathan',
    term: '2010 – 2015',
    note: 'Succeeded to the presidency in 2010 and was returned in the 2011 election.',
  },
];

export interface Chairman {
  name: string;
  period: string;
  note: string;
}

/** Documented holders of the office of National Chairman. */
export const chairmen: Chairman[] = [
  {
    name: 'Solomon Lar',
    period: '1998 – 1999',
    note: 'Foundation chairman of the party.',
  },
  {
    name: 'Barnabas Gemade',
    period: '1999 – 2001',
    note: 'First substantive chairman, elected at the post-1999 convention. A former Secretary of Works and Housing.',
  },
  {
    name: 'Audu Ogbeh',
    period: '2001 – 2005',
    note: 'Unanimously elected at the 2001 convention. Former Deputy Speaker of the Benue State House of Assembly.',
  },
  {
    name: 'Ahmadu Ali',
    period: '2005 – 2007',
    note: 'Appointed to replace Ogbeh.',
  },
  {
    name: 'Vincent Ogbulafor',
    period: '2008 – 2010',
    note: 'Consensus choice of the 2008 convention, which unified a crowded field of candidates.',
  },
  {
    name: 'Okwesilieze Nwodo',
    period: '2010',
    note: 'Resigned during the year.',
  },
  {
    name: 'Haliru Mohammed',
    period: '2010 – 2011',
    note: 'Acting national chairman.',
  },
  {
    name: 'Kawu Baraje',
    period: '2011 – 2012',
    note: 'Acting national chairman.',
  },
  {
    name: 'Bamanga Tukur',
    period: '2012 – 2014',
    note: 'Elected national chairman after the 2011 general elections.',
  },
  {
    name: 'Ahmed Adamu Mu’azu',
    period: '2014',
    note: 'Succeeded Bamanga Tukur.',
  },
  {
    name: 'Tanimu Turaki',
    period: '2022 – 2026',
    note: 'Elected National Chairman by the governors’ bloc convention held in Ibadan on 16 November 2025 — a convention later invalidated by the Supreme Court in April 2026, with the Board of Trustees assuming interim leadership pending a substantive convention.',
  },
];

export const founders = [
  'Alex Ekwueme',
  'Jerry Gana',
  'Tony Anenih',
  'Solomon Lar',
  'Abubakar Rimi',
  'Bola Ige',
  'Sule Lamido',
  'Adamu Ciroma',
  'Iyorchia Ayu',
  'Bamanga Tukur',
];
