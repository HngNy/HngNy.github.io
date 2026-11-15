// Content for the web /en/cv page
export const resumeConfig = {
  name: "Cao Vu Hang Ny",
  title: "E-commerce Operations · Digital Marketing",
  summary:
    "Management Information Systems student with hands-on experience running TikTok Shop and Shopee stores and in direct sales, where I reached 130% of my sales target. Short term, I want to apply my Meta Ads and e-commerce foundation to help launch, monitor and evaluate Facebook ad campaigns; long term, I aim to become a Digital Marketing specialist who builds and optimises campaigns and proposes ways to grow revenue.",
  contacts: [
    { icon: "address", value: "Tan Phu, Ho Chi Minh City" },
    { icon: "mail", value: "Hangny479@gmail.com", href: "mailto:Hangny479@gmail.com" },
  ],
  links: [
    { icon: "github", label: "GitHub", value: "github.com/HngNy", href: "https://github.com/HngNy" },
  ],
  work: [
    {
      company: "TVT BPO Co., Ltd.",
      role: "E-commerce Operations Intern",
      stack: "",
      period: "Jun 2026 – Sep 2026",
      location: "Ho Chi Minh City",
      summary: "",
      responsibilities: [
        "Helped run TikTok Shop and Shopee stores: listed products and updated details, images and prices.",
        "Advised customers, collected their feedback and proposed suitable care solutions.",
        "Tracked orders and stock levels, and worked with the warehouse on complaints and returns.",
        "Maintained SKU, price, inventory and order-status data in Google Sheets.",
      ],
      selected: [] as string[],
    },
    {
      company: "Kash Vietnam Co., Ltd.",
      role: "Sales Executive",
      stack: "",
      period: "Oct 2023 – Feb 2025",
      location: "Ho Chi Minh City",
      summary: "",
      responsibilities: [
        "Advised customers on products and helped them choose, improving conversion.",
        "Handled customer care, questions and complaints to ensure a great shopping experience.",
        "Tracked goods and coordinated with distribution partners to keep supply stable.",
        "Controlled inventory and planned purchase orders for points of sale.",
        "Result: hit 90%+ of the monthly sales target; reached 130% of target in January 2025.",
      ],
      selected: [] as string[],
    },
  ],
  projects: [] as { name: string; link: { label: string; href: string }; role: string; stack: string; period: string; summary: string; responsibilities: string[] }[],
  skills: [
    { group: "E-commerce", items: "TikTok Shop, Shopee, product listing, inventory control, orders & returns" },
    { group: "Marketing", items: "Meta Ads (fundamentals), Facebook" },
    { group: "Data & Office", items: "Google Sheets, MS Office, sales reporting" },
    { group: "Soft skills", items: "Communication & listening, customer care, teamwork, time management" },
  ],
  education: [
    { school: "Banking University of Ho Chi Minh City", degree: "Management Information Systems, GPA 3.2/4.0", period: "2022 – 2026" },
  ],
  languages: ["Vietnamese (native)", "Chinese (HSK 2)"],
};
