const { defaultTheme, viteBundler } = require("vuepress");
const { path } = require("@vuepress/utils");
const {
  registerComponentsPlugin,
} = require("@vuepress/plugin-register-components");

module.exports = {
  title: "Yartu UI Kit",
  description: "Powered by Tailwind & Vue 3",
  base: 'docs-ui-kit',
  head: [
    ["link", { rel: "icon", sizes: "32x32", href: "/docs-ui-kit/images/logos/logo.png" }],
    ["link", { rel: "stylesheet", type: "text/css", href: "/docs-ui-kit/input.css" }],
    ["link", { rel: "stylesheet", type: "text/css", href: "/docs-ui-kit/reset.css" }],
    ["script", { src: "https://cdn.tailwindcss.com" }],
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/docs-ui-kit/icons/colored-icons/yartu-colored-icons.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/docs-ui-kit/icons/font-icons/yartu-icons.css",
      },
    ],
  ],
  theme: defaultTheme({
    logo: "/images/logos/yartu-logo-horizontal.svg",
    logoDark: "/images/logos/yartu-logo-horizontal-dark.svg",
    navbar: [
      // NavbarItem
      {
        text: "Guide",
        link: "/guide/",
      },
      // {
      //   text: "Languages",
      //   children: [
      //     {
      //       text: "English",
      //       link: "/",
      //     },
      //     {
      //       text: "Turkçe",
      //       link: "/tr",
      //     },
      //   ],
      // },
      {
        text: "GitHub",
        link: "https://github.com/yartu/yartu-uikit",
      },
    ],
    sidebar: {
      "/": [],
      "/guide/": [
        {
          text: "Guide",
          collapsible: false,
          children: [
            {
              text: "Accordion",
              link: "accordion.md",
            },
            
            {
              text: "Avatar Group",
              link: "avatar-group.md",
            },
            {
              text: "Avatar",
              link: "avatar.md",
            },
            {
              text: "Badge",
              link: "badge.md",
            },
            {
              text: "Bread Crumb",
              link: "bread-crumb.md",
            },
            {
              text: "Button",
              link: "button.md",
            },
            {
              text: "Card",
              link: "card.md",
            },
            {
              text: "Checkbox",
              link: "checkbox.md",
            },
            {
              text: "Collapsible Panel",
              link: "collapsible-panel.md",
            },
            {
              text: "Curtain Menu",
              link: "curtain-menu.md",
            },
            {
              text: "Dropdown",
              link: "dropdown.md",
            },
            {
              text: "Dropdown Drawer",
              link: "dropdown-drawer.md",
            },
            {
              text: "Icon",
              link: "icon.md",
            },
            {
              text: "Input",
              link: "input.md",
            },
            {
              text: "Loading",
              link: "loading.md",
            },
            {
              text: "Modal",
              link: "modal.md",
            },
            {
              text: "Navigation Drawer",
              link: "navigation-drawer.md",
            },
            {
              text: "Note Card",
              link: "note-card.md",
            },
            {
              text: "Pagination",
              link: "pagination.md",
            },
            {
              text: "Progress Bar",
              link: "progress-bar.md",
            },
            {
              text: "Progress Ring",
              link: "progress-ring.md",
            },
            {
              text: "Radio Button",
              link: "radio.md",
            },
            {
              text: "Shaped Card",
              link: "shaped-card.md",
            },
            {
              text: "Simple Table",
              link: "simple-table.md",
            },
            {
              text: "Snackbar",
              link: "snackbar.md",
            },
            {
              text: "Switch",
              link: "switch.md",
            },
            {
              text: "Tag",
              link: "tag.md",
            },
            {
              text: "Textarea",
              link: "textarea.md",
            },
            {
              text: "Toast",
              link: "toast.md",
            },
            {
              text: "Tooltip",
              link: "tooltip.md",
            },
          ],
        },
      ],
      "/reference/": [
        {
          text: "Reference",
          children: ["/reference/cli.md", "/reference/config.md"],
        },
      ],
    },
    locales: {
      "/": {
        lang: "en-US",
        title: "VuePress",
        description: "Yartu UI Kit",
      },
      "/tr/": {
        lang: "tr-TR",
        title: "VuePress",
        description: "Yartu UI Kit",
      },
    },
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components/"),
      componentsPatterns: "**/*",
    }),
  ],
  bundlerConfig: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  bundler: viteBundler({
    postcssOptions: {
      plugins: {
        tailwindcss: {
          config: "./tailwind.config.js",
        },
        autoprefixer: {},
      },
    },
  }),
};
