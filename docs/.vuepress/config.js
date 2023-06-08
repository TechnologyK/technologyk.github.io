import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "TechnologyK个人博客",
  theme: defaultTheme({
    lastUpdated: false,
    contributors: false,
  }),
});
