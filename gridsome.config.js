// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// Configure plugins here
let plugins = [
  {
    use: 'gridsome-plugin-tailwindcss',
    options: {
      tailwindConfig: './tailwind.config.js',
      /* These are the default options. You don't need to set any options to get going.
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      */
    },
  },
]

module.exports = {
  siteName: 'History of Nigeria',
  // Default titleTemplate is '%s - <siteName>'
  // Overrided here to avoid having 'My Site Name - My Site Name' on homepage
  titleTemplate: '%s',
  // Default is './src/favicon.png'
  icon: './src/assets/img/flag.svg',
  plugins,
}
// All configuration options: https://gridsome.org/docs/config
