module.exports={
  "title": "OpenBCI Documentation",
  "tagline": "OpenBCI Docs",
  "url": "https://openbci.github.io",
  "baseUrl": "/",
  "organizationName": "OpenBCI",
  "projectName": "Documentation",
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "favicon": "img/favicon_large.ico",
  "customFields": {
    "gaGtag": true
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "trailingSlash": true,
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": false,
          "showLastUpdateTime": true,
          "editUrl": "https://github.com/OpenBCI/Documentation/edit/master/websitev2/",
          "path": "docs",
          "sidebarPath": require.resolve('./sidebars.json'),
          "routeBasePath": '/'
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": [require.resolve('./src/css/customTheme.css')],
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "OpenBCI Documentation",
      "logo": {
        "src": "img/openbci-logo.svg"
      },
      "items": [
        {
          "href": "https://openbci.com",
          "label": "Main Site",
          "position": "left"
        },
        {
          "href": "https://shop.openbci.com",
          "label": "Shop",
          "position": "right"
        },
        {
          "href": "https://openbci.com/forum/",
          "label": "Forum",
          "position": "right"
        },
        {
          "to": "/",
          "label": "Documentation",
          "position": "right"
        },
        {
          "href": "https://github.com/OpenBCI",
          "label": "Github",
          "position": "right"
        },
        {
          "to": "/citations",
          "label": "Citations",
          "position": "right"
        }
      ]
    },
    "image": "https://openbci.github.io/Documentationimg/UC-production-1140x424.jpg",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2021 OpenBCI",
      "logo": {
        "src": "img/openbci-logo.svg"
      }
    },
    "algolia": {
      "apiKey": "19411ba246745c95db0bff87cfed97b0",
      "indexName": "openbci",
      "placeholder": "Search Docs",
      "algoliaOptions": {}
    },
    "gtag": {
      "trackingID": "UA-42419007-3"
    }
  }
}