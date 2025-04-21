export type SitemMapItemType = {
  title: string
  items: Array<{
    name: string
    link: string
  }>
}

export type SiteMapType = Array<SitemMapItemType>

export const siteMap = [
  {
    title: "Service",
    items: [
      { name: "Documentation", link: "/docs" },
      { name: "Showcase", link: "/showcase" },
      { name: "Blog", link: "/blog" },
      { name: "Playground", link: "https://play.tailwindcss.com/" },
    ],
  },
  {
    title: "Product",
    items: [
      { name: "Documentation", link: "/docs" },
      { name: "Showcase", link: "/showcase" },
      { name: "Blog", link: "/blog" },
      { name: "Playground", link: "https://play.tailwindcss.com/" },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "About", link: "/about" },
      { name: "Showcase", link: "/showcase" },
      { name: "Blog", link: "/blog" },
      { name: "Playground", link: "https://play.tailwindcss.com/" },
    ],
  },
  {
    title: "Connect",
    items: [
      { name: "Documentation", link: "/docs" },
      { name: "Showcase", link: "/showcase" },
      { name: "Blog", link: "/blog" },
      { name: "Playground", link: "https://play.tailwindcss.com/" },
    ],
  },
]
