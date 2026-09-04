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
    "兵庫県立大学 大学院情報科学研究科 博士前期課程、大島研究室所属の木下真帆です。"
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
      institution: "兵庫県立大学 大学院情報科学研究科 データ計算科学専攻",
      description: "博士前期課程 在学（大島研究室）",
    },
    {
      period: "2021年 4月 - 2025年 3月",
      institution: "兵庫県立大学 社会情報科学部 社会情報科学科",
      description: "卒業（学士）",
    }
  ],
  publications: {
    international: [
      {
        title: "Analyzing Atypical Local Features in Museum Artifacts using Generative Image Inpainting",
        authors: ["Maho Kinoshita", "Wakana Kuwata", "Ryota Mibayashi", "Hiroaki Ohshima"],
        venue: "Proceedings of the 13th International Conference on Behavioural and Social Computing (BESC 2026)",
        year: "2026年10月"
      },
      {
        title: "Measuring Shape Unexpectedness of Exhibits Based on Similarity and Outlier Detection",
        authors: ["Maho Kinoshita", "Wakana Kuwata", "Hiroaki Ohshima"],
        venue: "Proceedings of the 27th International Conference on Information Integration and Web Intelligence (iiWAS 2025), pp. 383-389",
        year: "2025年12月",
        doi: "10.1007/978-3-032-11976-6_29",
        url: "https://doi.org/10.1007/978-3-032-11976-6_29"
      }
    ],
    domestic: [
      {
        title: "画像インペインティングを用いた展示物外観の意外性分析",
        authors: ["木下 真帆", "桑田 若菜", "三林 亮太", "大島 裕明"],
        venue: "第18回データ工学と情報マネジメントに関するフォーラム (DEIM2026), 6H-03",
        year: "2026年3月",
        award: "DEIM2026 学生プレゼンテーション賞",
        url: "https://pub.confit.atlas.jp/ja/event/deim2026/presentation/6H-03"
      },
      {
        title: "線画特徴の自己教師あり学習による意外な形状の展示物発見",
        authors: ["木下 真帆", "桑田 若菜", "大島 裕明"],
        venue: "第17回データ工学と情報マネジメントに関するフォーラム (DEIM2025), 7G-01",
        year: "2025年3月",
        url: "https://pub.confit.atlas.jp/ja/event/deim2025/presentation/7G-01"
      }
    ]
  },
  activities: [
    {
      role: "リサーチ・アシスタント (RA)",
      organization: "国立情報学研究所 (NII) 情報社会相関研究系",
      period: "2025年 6月 - 現在"
    },
    {
      role: "会員",
      organization: "日本データベース学会 (DBSJ)",
      period: "2025年 1月 - 現在"
    }
  ],
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
      name: "大島研究室 (Ohshima Lab.)",
      url: "https://ohshimalab.github.io/",
      description: "兵庫県立大学 大島研究室 公式Webサイト"
    }
  ]
};



