export interface ProfileLink {
  name: string;
  url: string;
  description?: string;
}

export interface PublicationItem {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  award?: string;
  url?: string;
  doi?: string;
}

export interface AcademicActivity {
  role: string;
  organization: string;
  period?: string;
}

export interface EducationItem {
  period: string;
  institution: string;
  description: string;
}

export interface ProfileData {
  name: {
    ja: string;
    en: string;
  };
  siteName: string;
  siteDescription: string;
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
  aboutParagraphs: string[];
  avatar: string;
  coverImage: string;
  interests?: string[];
  education?: EducationItem[];
  email?: string;
  location?: string;
  publications: {
    international: PublicationItem[];
    domestic: PublicationItem[];
  };
  activities?: AcademicActivity[];
  links: ProfileLink[];
}

export const profileData: ProfileData = {
  name: {
    ja: "木下 真帆",
    en: "Maho Kinoshita",
  },
  siteName: "木下 真帆",
  siteDescription: "兵庫県立大学 大学院情報科学研究科 大島研究室",
  title: "博士前期課程 / 大学院生 (Master's Student)",
  affiliations: {
    mainJa: "兵庫県立大学 大学院情報科学研究科",
    mainEn: "Graduate School of Information Science, University of Hyogo",
    lab: {
      name: "大島研究室 (Ohshima Lab.)",
      url: "https://ohshimalab.github.io/",
    },
  },
  bio: "兵庫県立大学 大学院情報科学研究科 博士前期課程 大島研究室の木下真帆です。情報系の研究を行っています。",
  aboutParagraphs: [
    "兵庫県立大学 大学院情報科学研究科 博士前期課程、大島研究室所属の木下真帆です。",
    // "データ工学や情報統合、展示物の意外性分析（画像インペインティングや類似度・外れ値検出を用いた展示物の形状・外観分析）に関する研究を行っています。",
    // "このWebサイトでは、研究の進捗や論文・学会発表などの実績、各種プロフィールリンクを掲載しています。"
  ],
  avatar: "avatar.svg",
  coverImage: "cover.svg",
  location: "兵庫県 神戸市 (Hyogo, Japan)",
  interests: [
    "画像認識",
    "自然言語処理",
    "意外性",
  ],
  education: [
    {
      period: "2025年 4月 - 現在",
      institution: "兵庫県立大学 大学院情報科学研究科",
      description: "博士前期課程 在学（大島研究室）",
    },
    {
      period: "2021年 4月 - 2025年 3月",
      institution: "兵庫県立大学",
      description: "卒業（学士）",
    }
  ],
  publications: {
    international: [],
    domestic: []
  },
  activities: [],
  links: [
    {
      name: "researchmap",
      url: "https://researchmap.jp/maho_kinoshita",
      description: "研究者データベース（業績・経歴）"
    },
    {
      name: "ORCID",
      url: "https://orcid.org/0009-0007-9914-7609",
      description: "国際研究者識別子 (0009-0007-9914-7609)"
    },
    {
      name: "GitHub",
      url: "https://github.com/whip27",
      description: "コード・リポジトリ (@whip27)"
    },
    {
      name: "大島研究室 (Ohshima Lab.)",
      url: "https://ohshimalab.github.io/",
      description: "兵庫県立大学 大島研究室 公式Webサイト"
    }
  ]
};



