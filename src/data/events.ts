/**
 * Party calendar. These are illustrative entries standing in for the real
 * schedule — replace `date`, `venue` and `body` with confirmed details before
 * launch. Dates are ISO `YYYY-MM-DD`; the past/upcoming split is derived from
 * the current date, so you never have to re-sort by hand.
 */

export type EventType =
  | 'Convention'
  | 'Campaign'
  | 'Chapter meeting'
  | 'Training'
  | 'Public forum'
  | 'Programme';

export interface PartyEvent {
  slug: string;
  title: string;
  type: EventType;
  date: string;
  /** End date when the event runs for more than a day. */
  endDate?: string;
  time: string;
  venue: string;
  state: string;
  summary: string;
  body: string[];
  /** What a member should bring or do. */
  agenda: string[];
  /** True once the event's date has passed. */
  past: boolean;
  featured?: boolean;
}

const raw: Omit<PartyEvent, 'past'>[] = [
  {
    slug: 'national-convention-2026',
    title: 'National Convention 2026',
    type: 'Convention',
    date: '2026-11-20',
    endDate: '2026-11-22',
    time: '09:00 daily',
    venue: 'Wuse Zone 5 civic grounds',
    state: 'FCT — Abuja',
    featured: true,
    summary:
      'The party’s highest decision-making organ convenes to ratify officers, approve the budget and nominate the presidential candidate.',
    body: [
      'The National Convention is the single most consequential gathering the party holds. Under the constitution it is the body that ratifies the party constitution, approves the budget, elects the national officers and nominates the presidential candidate. Everything above the convention is delegated from that room.',
      'Delegates arrive through the state structures, which in turn are elected at ward and chapter congresses. A delegate therefore carries the decisions of thousands of members, not a personal choice.',
      'Members who wish to observe may do so from the public gallery. The party has historically streamed proceedings, and members are encouraged to follow the official party channels for live updates.',
    ],
    agenda: [
      'Accreditation of delegates and submission of nomination forms',
      'Presentation of the convention report and the party’s audited accounts',
      'Election of national officers of the National Working Committee',
      'Nominations for the presidential candidate',
      'Ratification of the constitution and any amendments',
    ],
  },
  {
    slug: 'ward-congress-2026',
    title: 'Ward congresses across all 774 local government areas',
    type: 'Chapter meeting',
    date: '2026-10-10',
    endDate: '2026-10-14',
    time: '08:00 – 17:00',
    venue: 'Ward halls, every local government area',
    state: 'Nationwide',
    featured: true,
    summary:
      'The foundation of the party’s structure. Ward congresses elect ward and local government officers and send delegates upward.',
    body: [
      'Everything above the ward is delegated from the ward. Ward congresses elect the ward executives and the local government working committee, approve the ward’s report and accounts, and elect the delegate who will represent the ward at the local congress and, through it, at the National Convention.',
      'Congresses are open to party members in good standing. Carry your membership card, and be prepared to show proof of the two-member recommendation required at registration.',
      'If you are not yet a member, this is the moment to join. See the membership guidance on the Leadership page before the congress opens.',
    ],
    agenda: [
      'Verification of member credentials and accreditation',
      'Election of ward executive committee and LGA officers',
      'Election of ward delegates to the local congress',
      'Review of ward finances and the outgoing committee’s report',
    ],
  },
  {
    slug: 'manifesto-briefing-ikwerre',
    title: 'Manifesto briefing: Ikwerre east',
    type: 'Public forum',
    date: '2026-10-24',
    time: '11:00 – 14:00',
    venue: 'Owerri Road community hall',
    state: 'Rivers',
    summary:
      'An open session on the party platform: rule of law, the economy, power devolution and what each commitment means locally.',
    body: [
      'The platform is only meaningful if people can interrogate it. This session is an open forum rather than a rally: the national team will present each of the ten policy pillars, and there will be time for questions from the floor.',
      'Attendance is open to all, member or not. The party’s position is that the argument about policy should happen in public.',
    ],
    agenda: [
      'Presentation of the ten policy pillars',
      'Panel response on the economy and devolution of powers',
      'Open questions from the floor',
    ],
  },
  {
    slug: 'organiser-training-abuja',
    title: 'National training for state and LGA organisers',
    type: 'Training',
    date: '2026-11-06',
    endDate: '2026-11-07',
    time: '09:00 – 16:00',
    venue: 'Party national training centre',
    state: 'FCT — Abuja',
    summary:
      'Two days of training for organisers on voter registration, party discipline and the constitutional responsibilities of ward officers.',
    body: [
      'Organisers carry the practical weight of the party at every level below the convention. This training covers the mechanics of voter registration and INEC processes, the constitutional duties of ward and chapter officers, and the disciplinary procedures of the party constitution.',
      'Attendance is by nomination from state chapters. Delegates are expected to attend both full days.',
    ],
    agenda: [
      'Voter registration, INEC processes and timelines',
      'The ward officer’s constitutional responsibilities',
      'Party discipline, due process and the Disciplinary Committee',
      'Financial reporting obligations for every level',
    ],
  },
  {
    slug: 'national-convention-2008',
    title: 'National Convention, Abuja 2008',
    type: 'Convention',
    date: '2008-03-08',
    time: '09:00',
    venue: 'International Conference Centre',
    state: 'FCT — Abuja',
    summary:
      'The convention that produced a single consensus candidate from a crowded field of twenty-six nominees.',
    body: [
      'Prince Vincent Ogbulafor was chosen as National Chairman at this convention, which drew twenty-six other candidates. All twenty-six withdrew in favour of him, making the outcome a consensus rather than a contest.',
      'The convention is remembered for demonstrating that a divided party could still produce a unified decision — an achievement that is considerably harder than winning an election.',
    ],
    agenda: [
      'Adoption of the convention report',
      'Election of the National Chairman and other national officers',
    ],
  },
  {
    slug: 'port-harcourt-convention-2016',
    title: 'National Convention, Port Harcourt 2016',
    type: 'Convention',
    date: '2016-05-21',
    time: '09:00',
    venue: 'Port Harcourt International Conference Centre',
    state: 'Rivers',
    summary:
      'The convention at which David Mark, a former President of the Senate, introduced “Change the change” for the 2019 general elections.',
    body: [
      'David Mark, a former President of the Senate of Nigeria, introduced “Change the change” as the party’s campaign slogan for the 2019 general elections. The umbrella symbol was retained, and the party’s founding slogan of “Power to the People” was not displaced.',
      'The 2016 convention is the last national convention whose outcome has not been the subject of subsequent litigation or competing claims to the party’s leadership.',
    ],
    agenda: [
      'Adoption of the convention report',
      'Review of the party’s performance at the 2015 general elections',
      'Introduction of the campaign slogan for 2019',
    ],
  },
  {
    slug: 'slogan-2019-campaign',
    title: 'Launch of the “Change the change” campaign',
    type: 'Campaign',
    date: '2019-02-01',
    time: '10:00',
    venue: 'National campaign launch',
    state: 'Nationwide',
    summary:
      'The formal launch of the party’s 2019 presidential campaign under the slogan introduced at the Port Harcourt convention.',
    body: [
      'The campaign opened under the slogan “Change the change”, adopted at the Port Harcourt convention in 2016. The party contested the 2019 general elections on the platform of continuity of its established programme.',
    ],
    agenda: ['Formal campaign launch', 'Presentation of the campaign timetable'],
  },
  {
    slug: 'peoples-democratic-institute-symposium',
    title: 'Peoples Democratic Institute policy symposium',
    type: 'Public forum',
    date: '2025-11-14',
    time: '10:00 – 16:00',
    venue: 'PDI annual symposium',
    state: 'FCT — Abuja',
    summary:
      'The annual symposium of the party’s intellectual arm, established to give the platform a research and policy foundation.',
    body: [
      'The Peoples Democratic Institute was established during the tenure of Chief Barnabas Gemade as the party’s intellectual arm — the body tasked with giving the platform a research and policy foundation rather than leaving it to rhetoric alone.',
      'The symposium brings together academics, practitioners and policymakers. Proceedings are published.',
    ],
    agenda: [
      'Paper: fiscal federalism twenty years on',
      'Paper: the 2027 census and the distribution formula',
      'Panel: economic liberalism and the social contract',
    ],
  },
];

const today = new Date().toISOString().slice(0, 10);

export const events: PartyEvent[] = raw
  .map((e) => ({ ...e, past: e.date < today }))
  .sort((a, b) => a.date.localeCompare(b.date));

export const upcomingEvents = events.filter((e) => !e.past).reverse();
export const pastEvents = events.filter((e) => e.past).reverse();

export const eventTypes: Array<EventType | 'All'> = [
  'All',
  'Convention',
  'Campaign',
  'Chapter meeting',
  'Training',
  'Public forum',
  'Programme',
];

export function getEvent(slug: string): PartyEvent | undefined {
  return events.find((e) => e.slug === slug);
}

export function formatEventDate(iso: string, endDate?: string): string {
  const start = new Date(`${iso}T00:00:00Z`);
  const opts: Intl.DateTimeFormatOptions = { timeZone: 'UTC' };

  if (!endDate) {
    return start.toLocaleDateString('en-NG', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      ...opts,
    });
  }

  const end = new Date(`${endDate}T00:00:00Z`);
  const sameMonth =
    start.getUTCMonth() === end.getUTCMonth() && start.getUTCFullYear() === end.getUTCFullYear();

  const startLabel = start.toLocaleDateString('en-NG', {
    day: 'numeric',
    month: 'short',
    year: sameMonth ? undefined : 'numeric',
    ...opts,
  });
  const endLabel = end.toLocaleDateString('en-NG', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    ...opts,
  });

  return `${startLabel} – ${endLabel} ${end.getUTCFullYear()}`;
}
