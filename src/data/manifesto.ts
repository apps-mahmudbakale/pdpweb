/**
 * Policy themes drawn from the party's founding objectives and its
 * published manifesto. These are the party platform's stated commitments,
 * not a campaign promise for any particular year.
 */

export interface Pillar {
  id: string;
  title: string;
  summary: string;
  commitments: string[];
}

export const pillars: Pillar[] = [
  {
    id: 'rule-of-law',
    title: 'Rule of law and democracy',
    summary:
      'The party was founded to restore and defend constitutional government. That work is unfinished.',
    commitments: [
      'Strengthen the independence of the judiciary and the enforcement of court judgments.',
      'Guarantee freedom of speech, of the press and of association as constitutional rights, not favours.',
      'Institutionalise the principle that no political party belongs to one individual.',
      'Strengthen electoral administration by an independent and adequately resourced INEC.',
      'Protect the rights of every Nigerian irrespective of state of origin, creed or language.',
    ],
  },
  {
    id: 'governance',
    title: 'Good governance and institutional reform',
    summary:
      'Service delivery, transparency and the professionalisation of the civil service are the test of government.',
    commitments: [
      'Reform the civil service to attract and retain skilled personnel on merit and competitive terms.',
      'Institutionalise open budget, transparency and procurement standards across all tiers of government.',
      'Strengthen the autonomy of local governments and properly fund them from the federation account.',
      'Establish a framework for national service that is neither militarised nor a route to patronage.',
      'Build effective anti-corruption institutions that operate with genuine independence.',
    ],
  },
  {
    id: 'economy',
    title: 'A dynamic national economy',
    summary:
      'Economic liberalism at the core, with the state active in guaranteeing the conditions in which people can thrive.',
    commitments: [
      'Pursue fiscal discipline and prudent public spending in a still fragile global economy.',
      'Deregulate and privatise state enterprises while protecting workers’ rights and public interest.',
      'Grow domestic investment, industrialisation and manufacturing rather than dependent on a single commodity.',
      'Expand access to credit and support for small and medium enterprises across every state.',
      'Maintain a stable, non-discriminatory investment environment for foreign capital.',
    ],
  },
  {
    id: 'human-capital',
    title: 'Education, health and human capital',
    summary:
      'A nation is only as strong as the health and learning of its people.',
    commitments: [
      'Fund universal, free and compulsory primary education as originally intended, and make it genuinely functional.',
      'Rebuild and equip tertiary institutions and remove the barricade of overstaffing without destroying academic standards.',
      'Revitalise the National Health Insurance Scheme so that basic healthcare is within reach of ordinary Nigerians.',
      'Invest in vocational, technical and skills training to match the demands of the modern economy.',
      'Eradicate illiteracy through adult education and functional literacy programmes.',
    ],
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure and power',
    summary: 'Roads, rails, ports and electricity — the physical economy of a country that works.',
    commitments: [
      'Deliver on the constitutional target of national power generation sufficient for industry and household use.',
      'Complete and maintain the national road network, prioritising federal–state links and rural access.',
      'Modernise railways, ports and airports and connect the producing regions to markets.',
      'Guarantee a minimum allocation of the federation account to the states that need it most.',
      'Provide reliable water, sanitation and housing for ordinary citizens.',
    ],
  },
  {
    id: 'agriculture',
    title: 'Agriculture, food security and rural development',
    summary: 'Integrated rural development as a deliberate strategy, not an afterthought.',
    commitments: [
      'Modernise agriculture and move the country from subsistence farming to commercial production.',
      'Guarantee food security through strategic reserves, irrigation and support for local farmers.',
      'Build rural roads, storage, processing and cold chain so that farmers earn a fair price.',
      'Provide credit and extension services that reach the smallholder, not only the large operator.',
      'Create rural employment to stem the drift of unchecked migration to the cities.',
    ],
  },
  {
    id: 'federalism',
    title: 'Unity, federalism and power sharing',
    summary:
      'True political and fiscal federalism: the structure that holds a diverse country together.',
    commitments: [
      'Devolve genuine powers and resources to the states and local governments as the constitution intends.',
      'Enforce the principles of power-shift and power-sharing so that no zone is permanently excluded.',
      'Promote the rotation of key political offices to renew the leadership and refresh the party’s ideas.',
      'Settle the question of the police, the courts and the electoral commission firmly in the constitution.',
      'Build a politics of inclusion that gives every region a genuine stake in national power.',
    ],
  },
  {
    id: 'social-justice',
    title: 'Social justice, equality and human rights',
    summary:
      'Build an egalitarian society in which each contributes according to ability and no one dominates.',
    commitments: [
      'Guarantee equal rights to life, liberty, property and the pursuit of happiness for every Nigerian.',
      'Protect the rights of women, children and persons with disabilities and ensure real representation.',
      'Uphold religious freedom and protect every Nigerian’s right to follow their faith in peace.',
      'Give special attention to the north-east and other regions scarred by conflict, with reconstruction first.',
      'Pursue poverty reduction as an explicit, measured national objective rather than a slogan.',
    ],
  },
  {
    id: 'security',
    title: 'Security, peace and national cohesion',
    summary: 'Nigerians must be able to go about their lives without fear.',
    commitments: [
      'Reform the security architecture so that the armed forces protect the constitution and the people.',
      'Address the immediate causes of conflict — poverty, inequality, impunity and the manipulation of religion.',
      'Disarm, demobilise and rehabilitate anyone willing to lay down arms.',
      'Build a national early-warning and response mechanism with resources proportionate to the threat.',
      'Protect the lives and property of farmers in the pastoral and farming communities of the north.',
    ],
  },
  {
    id: 'foreign-policy',
    title: 'Nigeria’s place in the world',
    summary: 'A continental leader, respected abroad and confident at home.',
    commitments: [
      'Uphold Nigeria’s leadership of the African Union and of regional bodies such as ECOWAS and the Commonwealth.',
      'Maintain a foreign policy of equality among nations and non-alignment, free of colonial dependencies.',
      'Pursue a peaceful resolution of conflicts and a robust, well-equipped defence of the borders.',
      'Attract quality foreign investment in infrastructure, health, agriculture and technology.',
      'Project Nigerian culture, values and talent as assets to be traded on the world stage.',
    ],
  },
];

export const preamble = [
  'A country in which all Nigerians are equal, where each contributes according to his ability, where no one person dominates and where no political party belongs to one individual.',
];

export const manifestoPrinciples = [
  {
    title: 'People-centred governance',
    body: 'A free and democratic society built on the foundations of social justice, with government designed around the citizen rather than the elite.',
  },
  {
    title: 'A dynamic national economy',
    body: 'Economic reform, deregulation and industrialisation pursued with the state guaranteeing the welfare of those the market leaves behind.',
  },
  {
    title: 'A war against poverty',
    body: 'Integrated rural development, advancement in education, science and technology, and the provision of basic infrastructure.',
  },
  {
    title: 'One indivisible Nigeria',
    body: 'National reconciliation and unity, with the integrity and sovereignty of the federation upheld as one indivisible whole.',
  },
];
