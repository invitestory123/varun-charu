/**
 * All copy for the Varun & Charu wedding invitation.
 */

export interface EventItem {
  id: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  address?: string;
  description: string;
  dateISO: string;
  mapsQuery: string;
}

export const invitation = {
  invocations: [
    "॥ श्री महावीराय नमः ॥",
    "॥ जय श्री बाबा गज्जा जी ॥",
  ],
  tagline: "The Beginning of Our Forever",
  subTagline: "Until We Say Forever",
  couple: {
    groom: "Varun",
    bride: "Charu",
    initials: "V & C",
    title: "Varun Weds Charu",
  },
  heavenlyBlessings: {
    title: "With the Heavenly Blessings of",
    elders: [
      "Late Smt. Shanti Devi & Late Lala Kasturi Lal Jain",
      "Smt. Tarsem Kumari & Sh. Jagdish Kumar Jain",
    ],
  },
  inviteLead:
    "Together with their families, we cordially invite you to grace the wedding of their beloved grandson",
  story: {
    title: "Varun & Charu",
    subtitle: "Two souls, two families, one sacred journey",
    groom: {
      name: "Varun",
      role: "The Groom",
      parentage: "S/o Mrs. Ritu & Mr. Vinay Jain",
      text: "Beloved grandson of Late Smt. Shanti Devi & Late Lala Kasturi Lal Jain, and Smt. Tarsem Kumari & Sh. Jagdish Kumar Jain. Walking towards forever with grace and love.",
    },
    bride: {
      name: "Charu",
      role: "The Bride",
      parentage: "D/o Mrs. Nidhi & Mr. Manoj Jain, Ludhiana",
      text: "Cherished daughter of Mrs. Nidhi & Mr. Manoj Jain, Ludhiana. Bringing warmth, smiles, and grace as we begin our new chapter together.",
    },
  },
  shloka: {
    sanskrit: "मंगलम् भगवान वीरो, मंगलं गौतमो गणी।\nमंगलम् कुन्दकुन्दार्यो, जैन धर्मोऽस्तु मंगलम्॥",
    meaning: "Auspicious is Bhagwan Mahavira, auspicious is Ganadhara Gautama. Auspicious is Acharya Kundakunda, and auspicious is the Jain Dharma.",
  },
  /** ISO date-time of the main wedding ceremony, used by the countdown and calendar file. */
  dateISO: "2026-11-24T20:30:00+05:30",
  dateLabel: "Tuesday, 24 November 2026",
  timeLabel: "8:30 PM onwards",
  venue: {
    name: "Haveli Heritage",
    address: "Haveli Heritage",
    mapsQuery: "Haveli Heritage",
  },
  dressCode: "Traditional & Festive Indian Elegance",
  hero: {
    kicker: "The Beginning of Our Forever",
    eyebrow: "Save the Date",
    blessing: "Until We Say Forever",
  },
  celebrations: [
    {
      id: "hathpara",
      name: "Hathpara",
      date: "23 November 2026",
      time: "10:00 AM onwards",
      venue: "Rangla Punjab, Haveli",
      address: "Rangla Punjab, Haveli",
      description: "Auspicious pre-wedding ritual celebrating sweet beginnings and warm traditions.",
      dateISO: "2026-11-23T10:00:00+05:30",
      mapsQuery: "Rangla Punjab Haveli",
    },
    {
      id: "haldi",
      name: "Haldi",
      date: "23 November 2026",
      time: "11:30 AM onwards",
      venue: "Rangla Punjab, Haveli",
      address: "Rangla Punjab, Haveli",
      description: "A cheerful morning drenched in turmeric, golden sunlight, and hearty laughter.",
      dateISO: "2026-11-23T11:30:00+05:30",
      mapsQuery: "Rangla Punjab Haveli",
    },
    {
      id: "sangeet",
      name: "Sangeet",
      date: "23 November 2026",
      time: "8:30 PM onwards",
      venue: "Courtyard, Haveli",
      address: "Courtyard, Haveli",
      description: "An evening filled with melody, dancing, glittering celebrations, and family joy.",
      dateISO: "2026-11-23T20:30:00+05:30",
      mapsQuery: "Courtyard Haveli",
    },
    {
      id: "sehrabandi",
      name: "Sehrabandi",
      date: "24 November 2026",
      time: "5:30 PM",
      venue: "Our Home, 180, Adarsh Nagar",
      address: "180, Adarsh Nagar",
      description: "The traditional ceremony of tying the sehra and showering heartfelt family blessings.",
      dateISO: "2026-11-24T17:30:00+05:30",
      mapsQuery: "180 Adarsh Nagar",
    },
    {
      id: "wedding",
      name: "Wedding",
      date: "24 November 2026",
      time: "8:30 PM onwards",
      venue: "Haveli Heritage",
      address: "Haveli Heritage",
      description: "The sacred nuptials, the pheras, and the beginning of our forever.",
      dateISO: "2026-11-24T20:30:00+05:30",
      mapsQuery: "Haveli Heritage",
    },
  ] as EventItem[],
  /** For backwards compatibility with timeline component if needed */
  chapters: [
    {
      no: "I",
      title: "Hathpara & Haldi",
      when: "23 November 2026 · 10:00 AM & 11:30 AM",
      text: "Rangla Punjab, Haveli — A joyous start soaked in auspicious rituals, turmeric glows, and shared laughter.",
    },
    {
      no: "II",
      title: "Sangeet Night",
      when: "23 November 2026 · 8:30 PM onwards",
      text: "Courtyard, Haveli — Starlit courtyard, lively beats, and dance celebrations under the night sky.",
    },
    {
      no: "III",
      title: "Sehrabandi",
      when: "24 November 2026 · 5:30 PM",
      text: "Our Home, 180, Adarsh Nagar — Tying the ceremonial sehra, blessed by elders and surrounded by loved ones.",
    },
    {
      no: "IV",
      title: "The Wedding (Varmala & Pheras)",
      when: "24 November 2026 · 8:30 PM onwards",
      text: "Haveli Heritage — Two souls unite in sacred harmony as Varun and Charu embark on forever.",
    },
  ],
  note: {
    heading: "NO GIFTS, NO SHAGUN",
    subheading: "ONLY BLESSINGS",
  },
  compliments: {
    regards: "With Love and Regards,",
    family: "JAIN FAMILY",
    firm: "(GUJRANWALA JEWELLERS)",
  },
  footer: {
    line1: "Come with your blessings, stay for the joy.",
    line2: "Celebrate the beginning of our forever.",
    signoff: "With Love & Regards, Jain Family (Gujranwala Jewellers)",
  },
} as const;

export const wishes = [
  {
    from: "With Heavenly Blessings",
    text: "Late Smt. Shanti Devi & Late Lala Kasturi Lal Jain",
  },
  {
    from: "Grandparents' Blessings",
    text: "Smt. Tarsem Kumari & Sh. Jagdish Kumar Jain",
  },
  {
    from: "Parents' Love",
    text: "Mrs. Ritu & Mr. Vinay Jain · Mrs. Nidhi & Mr. Manoj Jain",
  },
] as const;
