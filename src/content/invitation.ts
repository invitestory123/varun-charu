/**
 * All copy for the Subahu & Yashika wedding invitation.
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
  mapsUrl?: string;
}

export const invitation = {
  invocations: [
    "॥ श्री महावीराय नमः ॥",
    "॥ जय श्री बाबा गज्जा जी ॥",
  ],
  tagline: "The Beginning of Our Forever",
  subTagline: "Until We Say Forever",
  couple: {
    groom: "Subahu",
    bride: "Yashika",
    initials: "S & Y",
    title: "Subahu Weds Yashika",
    hashtag: "#SYforever",
  },
  heavenlyBlessings: {
    title: "With Heavenly Blessings of",
    elders: [
      "Late Smt. Mahimawanti Jain & Late Sh. Dev Raj Jain",
      "Smt. Usha Jain & Sh. Surinder Kumar Jain",
    ],
  },
  inviteLead:
    "Together with their families, cordially invite you to celebrate the wedding celebrations of their beloved",
  story: {
    title: "Subahu & Yashika",
    subtitle: "Two souls, two families, one sacred journey",
    groom: {
      name: "Subahu",
      role: "The Groom",
      parentage: "",
      text: "Beloved son of Mrs. Mukta Jain & Mr. Atul Jain. Walking towards forever with grace, love, and devotion.",
    },
    bride: {
      name: "Yashika",
      role: "The Bride",
      parentage: "",
      text: "Cherished daughter of Mrs. Rashmi & Mr. Nilesh Jain, Samana. Bringing warmth, smiles, and grace as we begin our new chapter together.",
    },
  },
  shloka: {
    sanskrit: "मंगलम् भगवान वीरो, मंगलं गौतमो गणी।\nमंगलम् कुन्दकुन्दार्यो, जैन धर्मोऽस्तु मंगलम्॥",
    meaning: "Auspicious is Bhagwan Mahavira, auspicious is Ganadhara Gautama. Auspicious is Acharya Kundakunda, and auspicious is the Jain Dharma.",
  },
  /** ISO date-time of the main wedding ceremony, used by the countdown and calendar file. */
  dateISO: "2026-11-21T20:00:00+05:30",
  dateLabel: "Saturday, 21 November 2026",
  timeLabel: "8:00 PM onwards",
  venue: {
    name: "The Elysium Grand",
    address: "Arabia hall, the Elysium Grand",
    mapsQuery: "The Elysium Grand",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Elysium+Grand",
  },
  dressCode: "Traditional & Festive Indian Elegance",
  hero: {
    kicker: "The Beginning of Our Forever",
    eyebrow: "Save the Date",
    blessing: "Until We Say Forever",
  },
  celebrations: [
    {
      id: "haldi",
      name: "Haldi",
      date: "20 November 2026",
      time: "1:00 PM onwards",
      venue: "De javu manor, Khambra",
      address: "De javu manor, Khambra",
      description: "A cheerful afternoon drenched in golden turmeric, vibrant marigolds, and hearty laughter.",
      dateISO: "2026-11-20T13:00:00+05:30",
      mapsQuery: "DE JAVU MANOR Khambra",
      mapsUrl: "https://share.google/WFuhhoaC4PZTGFSc7",
    },
    {
      id: "hathbhara",
      name: "Hathbhara",
      date: "21 November 2026",
      time: "10:00 AM onwards",
      venue: "Shree Baba Gajja Ji Tomri",
      address: "Shree Baba Gajja Ji Tomri",
      description: "Auspicious morning ceremony invoking the sacred blessings of Shree Baba Gajja Ji.",
      dateISO: "2026-11-21T10:00:00+05:30",
      mapsQuery: "Shree baba Gajja ji Tomri",
      mapsUrl: "https://share.google/i50JimyqBeYSuNOxO",
    },
    {
      id: "sehrabandi",
      name: "Sehra Bandi",
      date: "21 November 2026",
      time: "5:30 PM onwards",
      venue: "Ramada by Wyndham Jalandhar City Centre",
      address: "Ramada by Wyndham Jalandhar City Centre",
      description: "The traditional ceremony of tying the sehra and showering heartfelt family blessings.",
      dateISO: "2026-11-21T17:30:00+05:30",
      mapsQuery: "Ramada by Wyndham Jalandhar City Centre",
      mapsUrl: "https://share.google/V9kQ3juWQuJzMXs4j",
    },
    {
      id: "wedding",
      name: "Wedding",
      date: "21 November 2026",
      time: "8:00 PM onwards",
      venue: "Arabia hall, the Elysium Grand",
      address: "Arabia hall, the Elysium Grand",
      description: "The sacred nuptials and joyous wedding celebrations as two souls unite for a lifetime of love and joy.",
      dateISO: "2026-11-21T20:00:00+05:30",
      mapsQuery: "The Elysium Grand",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Elysium+Grand",
    },
  ] as EventItem[],
  /** For backwards compatibility with timeline component if needed */
  chapters: [
    {
      no: "I",
      title: "Haldi Ceremony",
      when: "20 November 2026 · 1:00 PM onwards",
      text: "De javu manor, Khambra — A joyous celebration drenched in sunshine, golden turmeric, and love.",
    },
    {
      no: "II",
      title: "Hathbhara",
      when: "21 November 2026 · 10:00 AM onwards",
      text: "Shree Baba Gajja Ji Tomri — Auspicious rituals and sacred blessings for a blissful future.",
    },
    {
      no: "III",
      title: "Sehra Bandi",
      when: "21 November 2026 · 5:30 PM onwards",
      text: "Ramada by Wyndham Jalandhar City Centre — Tying the ceremonial sehra blessed by elders and loved ones.",
    },
    {
      no: "IV",
      title: "Wedding",
      when: "21 November 2026 · 8:00 PM onwards",
      text: "Arabia hall, the Elysium Grand — Auspicious wedding ceremony and celebration.",
    },
  ],
  note: {
    heading: "",
    subheading: "",
  },
  compliments: {
    regards: "With Love and Regards,",
    family: "JAIN FAMILY",
    firm: "",
  },
  footer: {
    line1: "Come with your blessings, stay for the joy.",
    line2: "Celebrate the beginning of our forever.",
    signoff: "With Love & Regards, Jain Family",
  },
} as const;

export const wishes = [
  {
    from: "With Heavenly Blessings",
    text: "Late Smt. Mahimawanti Jain & Late Sh. Dev Raj Jain",
  },
  {
    from: "Blessings of Elders",
    text: "Smt. Usha Jain & Sh. Surinder Kumar Jain",
  },
  {
    from: "Parents' Love",
    text: "Mrs. Mukta Jain & Mr. Atul Jain · Mr. Nilesh Jain & Mrs. Rashmi Jain, Samana",
  },
] as const;
