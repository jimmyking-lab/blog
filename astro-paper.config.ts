import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://aixming.com/",
    title: "MJ的博客",
    description: "Personal blog of MJ.",
    author: "Ming.Jin",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "mail", url: "mailto:jimmyking329@qq.com" },
  ],
  // shareLinks: [
  //   { name: "x", url: "https://x.com/intent/post?url=" },
  //   { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  // ],
});