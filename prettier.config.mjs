/** @type {import('prettier').Config} */
const config = {
  // endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  printWidth: 120,
  jsxBracketSameLine: false, // Keep closing bracket on the next line (if applicable)
  proseWrap: "never",
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["clsx"],
}

export default config
