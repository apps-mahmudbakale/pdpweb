/**
 * Editorial content for the News section.
 *
 * Items marked `placeholder: true` are template copy standing in for real
 * announcements — replace them before launch. Everything else is historical
 * and evergreen material drawn from the party's documented record.
 */

export interface Article {
  slug: string;
  title: string;
  standfirst: string;
  date: string;
  category: 'History' | 'Party' | 'Policy' | 'Organization' | 'Announcement';
  readMinutes: number;
  placeholder?: boolean;
  /** Paragraphs of body copy, rendered in order. */
  body: string[];
}

export const articles: Article[] = [
  {
    slug: 'thirty-days-that-founded-a-party',
    title: 'The thirty days that founded a party',
    standfirst:
      'Between a meeting in late July 1998 and a launch in Abuja on 31 August, twenty-five political associations became the Peoples Democratic Party.',
    date: '2026-08-31',
    category: 'History',
    readMinutes: 6,
    body: [
      'The Peoples Democratic Party did not begin with a convention. It began with a refusal. In 1997 a group of elder statesmen, veterans of the Second Republic and people who had spent the years of military rule in business, the courts and the universities, concluded that a military establishment which had lost a war and won a peace was preparing to keep the country without the responsibility of winning the people’s consent.',
      'The movement that formed in response passed through three stages. The first was a small group of seven. It grew to eighteen under the leadership of Abubakar Rimi, and then to thirty-four, chaired by Alex Ekwueme, a former Vice President of the Federation. The name G-34 would later become the shorthand for the movement that became the PDP.',
      'On 28 July 1998 the leaders of the like-minded associations assembled in Abuja. On 19 August, with the transition to civilian rule under General Abdulsalami Abubakar already under way, twenty-five political associations resolved to form a single party: the All Nigerian Congress, the Peoples Consultative Forum, the Social Political Party, the Peoples Democratic Movement, the Peoples National Forum and twenty others.',
      'Twelve days later, on 31 August, the party was launched at the International Conference Centre in Abuja. Dr. Alex Ekwueme was Chairman of the Steering Committee. Professor Jerry Gana was Secretary. The application went to the Independent National Electoral Commission, and the PDP was registered as a national party.',
      'The overriding goal, as the founders put it, was to bring together all patriotic and like-minded Nigerians into a single formidable political party capable of organising and advancing the cause of Nigeria — and to restore democracy through national reconciliation, economic and social reconstruction, and respect for human rights and the rule of law.',
    ],
  },
  {
    slug: 'what-the-constitution-says',
    title: 'What the party constitution actually says',
    standfirst:
      'The motto, the slogan, the flag, the emblem and the five national organs — the founding document is more specific than most campaign material admits.',
    date: '2026-07-18',
    category: 'Party',
    readMinutes: 5,
    body: [
      'The party constitution is short on slogans and long on structure. It provides that the motto of the party shall be Justice, Unity and Progress, and that the slogan shall be PDP — Power to the People, demonstrated by a raised and clenched right fist.',
      'The flag of the party is a horizontal tricolour comprising, from top to bottom, equal stripes of green, white and red, and the emblem is an umbrella in the party colour. The umbrella is not incidental decoration. It is a statement about the shape of the party: one thing held over everyone.',
      'Structurally the party recognises five national organs. The National Convention is the highest decision-making organ; it ratifies the constitution, approves the budget, elects national officers and nominates presidential candidates. The Board of Trustees is the supreme ethical organ, restricted to members of at least fifty years of age who have held or are holding an elective capacity, together with designated women and zone representatives. The National Executive Committee organises the convention and supervises the other organs. The National Working Committee is the administrative engine, and the National Caucus maintains the relationship between the executive and legislative arms.',
      'The constitution also states the test against which every party official should be measured: to build a country in which all Nigerians are equal, where each contributes according to his ability, where no one person dominates, and where no political party belongs to one individual.',
    ],
  },
  {
    slug: 'sixteen-years-of-military-rule-answered',
    title: 'Sixteen years of military rule, answered',
    standfirst:
      'The party’s founding grievance was concrete. Understanding it explains most of what the PDP has stood for since.',
    date: '2026-06-09',
    category: 'History',
    readMinutes: 7,
    body: [
      'When the G-34 group met, Nigeria had been under military rule since 1983, interrupted only by the brief return to civilian government in 1999. The immediate context was General Sani Abacha, who had refused to step down on the expiry of his term, dissolved the existing legislature and had prepared to contest a civilian presidency while remaining the army’s commander.',
      'The human rights record of that period was appalling, and the economy was on a steep slide. There was near hopelessness in many quarters about whether the country would ever see an honest transfer of power.',
      'Abacha died in June 1998. The government that succeeded announced elections would be held, ending sixteen years of military rule. What followed was not a return to business as usual but a scramble to build the parties that would contest the transition — and the PDP was the largest and most deliberately constructed of them.',
      'The founding objectives written into the party’s constitution in 1998 read like a list of everything the military years had destroyed: the rule of law, social equality and justice, an independent judiciary, national reconciliation, the eradication of illiteracy, true political and fiscal federalism, and the equitable distribution of power, wealth and opportunity.',
      'That list has proved remarkably durable. Almost every plank of it — functional education, national health insurance, integrated rural development, the rotation of office, an independent judiciary — has reappeared in the party’s platform in every subsequent decade.',
    ],
  },
  {
    slug: 'four-presidential-wins',
    title: 'Four presidential wins, three presidents',
    standfirst:
      'Between 1999 and 2015 the PDP won every presidential election it contested. The record is not only a record of victory.',
    date: '2026-05-04',
    category: 'History',
    readMinutes: 6,
    body: [
      'The PDP’s electoral record in its first sixteen years is without parallel in modern Nigerian politics. It won the 1999, 2003, 2007 and 2011 presidential elections, and produced three presidents: Olusegun Obasanjo, who returned the country to civilian rule; Umaru Musa Yar’Adua, sworn in on 29 May 2007; and Goodluck Ebele Jonathan, who succeeded to the presidency in 2010 and was returned in 2011.',
      'In the 2003 legislative elections the party took 54.5 per cent of the popular vote, 223 of 360 seats in the House of Representatives and 76 of 109 in the Senate, and Obasanjo was returned with 61.9 per cent. In 2007 it took 260 of 360 seats in the lower house and 85 of 109 in the upper house.',
      'But a record of victory is not the same as a record of stability, and the party knows it. Eleven national chairmen served between 1999 and 2015 and most left office in contested circumstances. A party that produced the government for sixteen consecutive years faced a harder task than winning elections: holding a governing coalition together while the argument about what the party was for continued.',
      'That tension is the party’s central internal political fact, and any honest account of the PDP has to hold both halves of it at once: a party with a genuinely national origin and a record unmatched in Nigerian electoral history, and a big tent broad enough to contain serious contradictions.',
    ],
  },
  {
    slug: 'the-nine-marks',
    title: 'The National Convention and the five organs',
    standfirst:
      'A walk through the party’s constitutional machinery, from the convention hall down to the ward.',
    date: '2026-04-27',
    category: 'Organization',
    readMinutes: 5,
    placeholder: true,
    body: [
      'The National Convention is where the party’s authority comes from. It is not a rally in front of cameras; it is the body that ratifies the constitution, approves the budget, elects the national officers and nominates the presidential candidate. Everything above it is delegated from that room.',
      'The Board of Trustees stands behind it as the ethical check. Its membership rules are unusual and deliberate: members must be at least fifty years of age and must have served or be serving in an elective capacity, alongside designated women and zone representatives. The intent is that the party’s conscience is kept by people who have already lived with the consequences of power.',
      'The National Executive Committee organises the convention and supervises the organs beneath it. The National Working Committee is the administrative engine, with nineteen members under the 2017 constitution as amended. The National Caucus links the party to the executive and legislative arms and streamlines national policy.',
      'Below the national level the same pattern repeats: zonal, state and local government working committees, then chapters and wards, with a delegate elected to the National Convention from each local congress. A party of this size is a machine, and the machine only works if the members trust that it belongs to them.',
    ],
  },
  {
    slug: 'twenty-eight-years-on',
    title: 'Twenty-eight years on: what the party is for',
    standfirst:
      'A note from the National Secretariat on the party’s founding purpose and the standard we intend to be held to.',
    date: '2026-03-09',
    category: 'Announcement',
    readMinutes: 4,
    placeholder: true,
    body: [
      'On 31 August 2026 the Peoples Democratic Party will mark twenty-eight years since it was launched at the International Conference Centre in Abuja. The occasion is not a celebration of the past. It is a statement about what we intend to do next.',
      'The party was founded by people who had concluded that Nigeria deserved better than a politics of permanent exclusion — that a country of our size and diversity could only be governed competently as a genuine national project, not as a contest between regions and blocs.',
      'That remains our standard. It means internal democracy that is real, not decorative. It means discipline, and the subordination of personal ambition to the collective interest. It means a party that belongs to its members, in the exact sense written into our constitution, and not to any individual or family.',
      'Members are urged to read the constitution, attend their congresses, hold their officers to account, and report honestly on what is not working. A party that belongs to no one is not a party at all.',
    ],
  },
];

export const categories = ['All', 'History', 'Party', 'Policy', 'Organization', 'Announcement'] as const;

export type Category = (typeof categories)[number];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-NG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
