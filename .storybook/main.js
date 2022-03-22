const path = require('path');

module.exports = {
  stories: [
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@hoc': path.resolve(__dirname, '../components/hoc'),
      '@hooks': path.resolve(__dirname, '../components/hooks'),
      '@layouts': path.resolve(__dirname, '../components/layouts'),
      '@ui': path.resolve(__dirname, '../components/ui'),
      '@util': path.resolve(__dirname, '../util'),
      '@views': path.resolve(__dirname, '../components/views'),
    }

    return config
  },
}
