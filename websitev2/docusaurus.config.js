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
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "editUrl": "https://github.com/OpenBCI/Documentation/edit/master/docs/",
          "path": "../docs",
          "sidebarPath": "../websitev2/sidebars.json"
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": "../src/css/customTheme.css"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "OpenBCI Documentation",
      "logo": {
        "src": "img/favicon_large.ico"
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
          "position": "left"
        },
        {
          "href": "https://openbci.com/forum/",
          "label": "Forum",
          "position": "left"
        },
        {
          "to": "docs/",
          "label": "Documentation",
          "position": "left"
        },
        {
          "href": "https://github.com/OpenBCI",
          "label": "Github",
          "position": "left"
        },
        {
          "to": "/citations",
          "label": "Citations",
          "position": "left"
        }
      ]
    },
    "image": "img/undraw_online.svg",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2021 OpenBCI",
      "logo": {
        "src": "img/favicon_large.ico"
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