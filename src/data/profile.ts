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
  links: ProfileLink[];
}

export const profileData: ProfileData = {
  name: {
    ja: "木下 真帆",
    en: "Kinoshita Maho",
  },
  title: "博士前期課程 / 大学院生 (Master`s Student)",
  affiliations: {
    mainJa: "兵庫県立大学 大学院〇〇研究科",
    mainEn: "Graduate School of Information Science, University of Hyogo",
    lab: {
      name: "大島研究室 (Ohshima Lab.)",
      url: "https://ohshimalab.github.io/",
    },
  },
  bio: "こんにちは",
  avatar: "/profile.jpg",
  links: [
    {
      name: "ORCID",
      url: "https://orcid.org/",
    },
    {
      name: "researchmap",
      url: "https://researchmap.jp/",
    },
    {
      name: "GitHub",
      url: "https://github.com/kinoshita",
    },
    {
      name: "Google Scholar",
      url: "https://scholar.google.com/",
    },
    // {
    //   name: "X (Twitter)",
    //   url: "https://x.com/",
    // },
  ],
};

