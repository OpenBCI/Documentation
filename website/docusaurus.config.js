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
      // The application ID provided by Algolia
      appId: "T4RYDUBT8W",

      // Public API key: it is safe to commit it
      apiKey: "a76eb38acd08673522c818bdb7b97feb",

      indexName: "openbci",

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //externalUrlRegex: "external\\.com|domain\\.com",

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: "/docs/", // or as RegExp: /\/docs\//
        to: "/",
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: "search",

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      //... other Algolia params
    },
  },
}
