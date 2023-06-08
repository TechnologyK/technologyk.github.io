import { defineUserConfig, defaultTheme } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  lang: "zh-CN",
  title: "TechnologyK个人博客",
  theme: defaultTheme({
    lastUpdated: false,
    contributors: false,
  }),
  plugins: [searchPlugin({})],
});
