import { sidebar } from "vuepress-theme-hope";

export const sidebarConfig = sidebar({
  "/": [
    "",
    "intro",
    {
        text: "编程随想",
        icon: "code",
        prefix: "thoughts/",
        children: "structure",
      }
  ],
});
