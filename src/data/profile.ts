export interface ProfileLink {
  name: string;
  url: string;
}

export interface ProfileData {
  name: {
    ja: string;
    en: string;
  };
  title: string;
  affiliations: {
    mainJa: string;
    mainEn?: string;
    lab?: {
      name: string;
      url: string;
    };
  };
  bio: string;
  avatar: string;
  interests?: string[];
  email?: string;
  location?: string;
  links: ProfileLink[];
}

export const profileData: ProfileData = {
  name: {
    ja: "木下 真帆",
    en: "Kinoshita Maho",
  },
  title: "博士前期課程 / 大学院生 (Master`s Student)",
  affiliations: {
    mainJa: "兵庫県立大学 大学院情報科学研究科",
    mainEn: "Graduate School of Information Science, University of Hyogo",
    lab: {
      name: "大島研究室 (Ohshima Lab.)",
      url: "https://ohshimalab.github.io/",
    },
  },
  bio: "とりあえず作ってみました",
  location: "Kobe, Japan",
  interests: [
    "おにく",
    "おさかな"
  ],
  links: [
    {
      name: "ORCID",
      url: "https://orcid.org/0009-0007-9914-7609",
    },
    {
      name: "researchmap",
      url: "https://researchmap.jp/maho_kinoshita",
    },
    {
      name: "GitHub",
      url: "https://github.com/whip27",
    },
    // {
    //   name: "X (Twitter)",
    //   url: "https://x.com/",
    // },
  ],
};

