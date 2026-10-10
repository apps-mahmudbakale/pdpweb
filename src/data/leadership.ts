/**
 * Constitutional offices of the party, as provided in the party constitution.
 * NOTE: office-holders are elected or ratified at the National Convention and
 * change over time. This file deliberately describes the offices rather than
 * asserting current incumbents, who must be confirmed against official party
 * notices. See src/pages/Leadership.tsx for the caveat shown to visitors.
 */

import type { LucideIcon } from 'lucide-react';
import {
  Landmark,
  ScrollText,
  ShieldCheck,
  Users,
  Vote,
  Gavel,
  Megaphone,
  BadgeCheck,
  UserCog,
  Handshake,
} from 'lucide-react';

export interface Office {
  title: string;
  duty: string;
  icon: LucideIcon;
  group: 'Convention' | 'Oversight' | 'Executive' | 'Administrative';
}

export const offices: Office[] = [
  {
    title: 'National Chairman',
    duty: 'Chief executive of the party. Chairs the National Working Committee and presides over the party’s executive direction.',
    icon: Landmark,
    group: 'Executive',
  },
  {
    title: 'Deputy National Chairman (South)',
    duty: 'Two deputy national chairmen are provided for by the constitution, one each for the southern and northern zones.',
    icon: UserCog,
    group: 'Executive',
  },
  {
    title: 'Deputy National Chairman (North)',
    duty: 'Shares the executive burden of the party and is elected to reflect the northern zone of the federation.',
    icon: UserCog,
    group: 'Executive',
  },
  {
    title: 'National Secretary',
    duty: 'Chief administrative and accounting officer of the party. Secretary to the National Caucus.',
    icon: ScrollText,
    group: 'Administrative',
  },
  {
    title: 'Deputy National Secretary',
    duty: 'Assists the National Secretary in the administration and financial accountability of the party.',
    icon: ScrollText,
    group: 'Administrative',
  },
  {
    title: 'National Treasurer',
    duty: 'Custodian of the party’s funds, working with the National Financial Secretary on receipts, disbursement and audit.',
    icon: Landmark,
    group: 'Administrative',
  },
  {
    title: 'National Organising Secretary',
    duty: 'Runs the party’s organisation across the states, chapters and wards, and mobilises for congresses and conventions.',
    icon: Vote,
    group: 'Administrative',
  },
  {
    title: 'National Publicity Secretary',
    duty: 'Communicates the party’s decisions and platform to members and to the Nigerian public.',
    icon: Megaphone,
    group: 'Administrative',
  },
  {
    title: 'National Legal Adviser',
    duty: 'Chief legal officer of the party, with a deputy, responsible for its legal affairs and compliance.',
    icon: Gavel,
    group: 'Oversight',
  },
  {
    title: 'National Auditor',
    duty: 'Examines the party’s books and reports to the National Working Committee and the National Convention.',
    icon: ShieldCheck,
    group: 'Oversight',
  },
  {
    title: 'National Woman Leader',
    duty: 'Mobilises and represents the women of the party at every level of the structure.',
    icon: Users,
    group: 'Executive',
  },
  {
    title: 'National Youth Leader',
    duty: 'Mobilises the youth wing of the party and coordinates youth representation in the organs of the party.',
    icon: BadgeCheck,
    group: 'Executive',
  },
];

export const officeGroups: Office['group'][] = [
  'Convention',
  'Oversight',
  'Executive',
  'Administrative',
];

export const membership = [
  {
    title: 'Join in your ward',
    body: 'Party membership begins in the ward. Ward congresses are the foundation on which every other organ of the party is built.',
    icon: Vote,
  },
  {
    title: 'Register as a member',
    body: 'Membership is open to every Nigerian of the age required by the party constitution and the Electoral Act, on the recommendation of two members of your ward.',
    icon: BadgeCheck,
  },
  {
    title: 'Contribute and take part',
    body: 'Members elect their own officers, deliberate on party policy at congresses and hold the party accountable through the National Convention.',
    icon: Handshake,
  },
];
