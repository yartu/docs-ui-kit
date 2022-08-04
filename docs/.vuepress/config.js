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
        text: "Documentation",
        link: "/documentation/getstarted/installation.md",
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
      "/getstarted/": [
        {
          text: "Get Started",
          collapsible: false,
          children: [
            {
              text: "Installation",
              link: "installation.md",
            },
          ],
        },
      ],
      "/documentation/": [
        {
          text: "Get Started",
          collapsible: false,
          children: [
            {
              text: "Installation",
              link: "../getstarted/installation.md",
            },
          ],
        },
        {
          text: "Components",
          collapsible: false,
          children: [
            {
              text: "Accordion",
              link: "../components/accordion.md",
            },
            
            {
              text: "Avatar Group",
              link: "../components/avatar-group.md",
            },
            {
              text: "Avatar",
              link: "../components/avatar.md",
            },
            {
              text: "Badge",
              link: "../components/badge.md",
            },
            {
              text: "Bread Crumb",
              link: "../components/bread-crumb.md",
            },
            {
              text: "Button",
              link: "../components/button.md",
            },
            {
              text: "Card",
              link: "../components/card.md",
            },
            {
              text: "Checkbox",
              link: "../components/checkbox.md",
            },
            {
              text: "Chip",
              link: "../components/chip.md",
            },
            {
              text: "Collapsible Panel",
              link: "../components/collapsible-panel.md",
            },
            {
              text: "Color Picker",
              link: "../components/color-picker.md",
            },
            {
              text: "Curtain Menu",
              link: "../components/curtain-menu.md",
            },
            {
              text: "Dropdown",
              link: "../components/dropdown.md",
            },
            {
              text: "Dropdown Drawer",
              link: "../components/dropdown-drawer.md",
            },
            {
              text: "Form",
              link: "../components/form.md",
            },
            {
              text: "Icon",
              link: "../components/icon.md",
            },
            {
              text: "Input",
              link: "../components/input.md",
            },
            {
              text: "Loading",
              link: "../components/loading.md",
            },
            {
              text: "Modal",
              link: "../components/modal.md",
            },
            {
              text: "Navigation Drawer",
              link: "../components/navigation-drawer.md",
            },
            {
              text: "Note Card",
              link: "../components/note-card.md",
            },
            {
              text: "Pagination",
              link: "../components/pagination.md",
            },
            {
              text: "Progress Bar",
              link: "../components/progress-bar.md",
            },
            {
              text: "Progress Ring",
              link: "../components/progress-ring.md",
            },
            {
              text: "Radio Button",
              link: "../components/radio.md",
            },
            {
              text: "Shaped Card",
              link: "../components/shaped-card.md",
            },
            {
              text: "Simple Table",
              link: "../components/simple-table.md",
            },
            {
              text: "Snackbar",
              link: "../components/snackbar.md",
            },
            {
              text: "Switch",
              link: "../components/switch.md",
            },
            {
              text: "Tag",
              link: "../components/tag.md",
            },
            {
              text: "Textarea",
              link: "../components/textarea.md",
            },
            {
              text: "Toast",
              link: "../components/toast.md",
            },
            {
              text: "Tooltip",
              link: "../components/tooltip.md",
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
      componentsDir: path.resolve(__dirname, "./ComponentsUsage/"),
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
