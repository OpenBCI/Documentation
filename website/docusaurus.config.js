module.exports = {
  title: "OpenBCI Documentation",
  tagline: "OpenBCI Docs",
  url: "https://openbci.github.io",
  baseUrl: "/",
  organizationName: "OpenBCI",
  projectName: "Documentation",
  deploymentBranch: "gh-pages",
  scripts: ["https://buttons.github.io/buttons.js"],
  favicon: "img/favicon_large.ico",
  customFields: {
    gaGtag: true,
  },
  noIndex: false,
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  trailingSlash: true,
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          editUrl:
            "https://github.com/OpenBCI/Documentation/edit/master/website/",
          path: "docs",
          sidebarPath: require.resolve("./sidebars.json"),
          routeBasePath: "/",
        },
        blog: {
          path: "blog",
        },
        theme: {
          customCss: [require.resolve("./src/css/customTheme.css")],
        },
        googleTagManager: {
          containerId: "GTM-5MNP6L3Q",
        },
      },
    ],
  ],
  plugins: [],
  themeConfig: {
    navbar: {
      title: "OpenBCI Documentation",
      logo: {
        src: "img/open-bci-gear.svg",
      },
      items: [
        {
          href: "https://openbci.com",
          label: "Main Site",
          position: "right",
        },
        {
          href: "https://shop.openbci.com/collections/frontpage",
          label: "Shop",
          position: "right",
        },
        {
          href: "https://openbci.com/forum/",
          label: "Forum",
          position: "right",
        },
        {
          to: "/",
          label: "Documentation",
          position: "right",
        },
        {
          href: "https://github.com/OpenBCI",
          label: "Github",
          position: "right",
        },
        {
          to: "/citations",
          label: "Citations",
          position: "right",
        },
      ],
    },
    image:
      "https://openbci.github.io/Documentation/img/UC-production-1140x424.jpg",
    metadata: [
      {
        name: "thumbnail",
        content: "https://docs.openbci.com/img/openbci-logo-web.png",
      },
    ],
    footer: {
      links: [],
      copyright: "Copyright © 2025 OpenBCI",
      logo: {
        src: "img/open-bci-gear-blue.png",
      },
    },
    algolia: {
      appId: "BH4D9OD16A",
      apiKey: "19411ba246745c95db0bff87cfed97b0",
      indexName: "openbci",
      placeholder: "Search Docs",
      algoliaOptions: {},
    },
  },
}
