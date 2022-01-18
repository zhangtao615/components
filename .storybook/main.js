module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/preset-scss",
    // {
    //   name: '@storybook/preset-scss',
    //   options: {
    //     cssLoaderOptions: {
    //        modules: true,
    //        localIdentName: '[name]__[local]--[hash:base64:5]',
    //     }
    //   }
    // },
  ],
  "framework": "@storybook/react"
}