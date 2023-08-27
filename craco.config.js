// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              hack: `true; @import "${__dirname}/src/app/styles/antCustomStyles.less";`,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
