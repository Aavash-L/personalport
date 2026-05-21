export interface Project {
  id: string;
  name: string;
  tagline: string;
  stack: string[];
  metric: string;
  status: "LIVE" | "BETA" | "DEVELOPMENT";
  url: string;
  screenshotPath: string;
  /** Set true for sites that block iframe embedding — card opens URL in a new tab instead */
  openExternal?: boolean;
}

export interface ExperienceItem {
  id: string;
  dateRange: string;
  role: string;
  company: string;
  location: string;
  description: string;
  bullets?: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface ContactLink {
  platform: string;
  value: string;
  href: string;
}
