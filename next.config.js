const withPreact = require("next-plugin-preact");

module.exports = withPreact({
  experimental: {
    outputStandalone: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
