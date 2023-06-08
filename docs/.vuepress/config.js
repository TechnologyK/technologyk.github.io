import { defineUserConfig, defaultTheme } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "TechnologyK个人博客",
  head: [["link", { rel: "icon", href: "/images/k.svg" }]],
  theme: defaultTheme({
    navbar: [
      { text: "Home", link: "/" },
      { text: "关于", link: "/about/" },
      { text: "GitHub", link: "https://github.com/TechnologyK" },
    ],
    logo: "/images/k.svg",
    lastUpdated: false,
    contributors: false,
  }),
  plugins: [searchPlugin({})],
});
