const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      lg: { max: "1920px" },
      // => @media (max-width: 1920px) { ... }
      laptop: { max: "1600px" },
      // => @media (max-width: 1600px) { ... }
      md: { max: "1450px" },
      // => @media (max-width: 1450px) { ... }
      sm: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      xsm: { max: "1020px" },
      // => @media (max-width: 1020px) { ... }
      xs: { max: "980" },
      // => @media (max-width: 980px) { ... }
      mob: { max: "768px" },
      // => @media (max-width: 767px) { ... }
    },
    extend: {},
    colors: {
      textColor: "var(--textColor)",
      backgroundColor: "var(--bgColor)",
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("custom-group-child", ":merge(.custom-group) &");
      addVariant(
        "custom-group-name-first",
        ":merge(.custom-group-name):first-child &"
      );
      // :merge() is important to merge all variant pseudos on that selector and not the child
      // this is inspirted by the core .group plugin https://github.com/tailwindlabs/tailwindcss/blob/master/src/corePlugins.js#L107
    }),
  ],
};
