module.exports = {
  trailingComma: "all",
  importOrder: [
    "^react(.*)",
    "^vite$",
    "<THIRD_PARTY_MODULES>",
    "@/(.*)",
    "^[./]",
  ],
  importOrderSortSpecifiers: true,
};
