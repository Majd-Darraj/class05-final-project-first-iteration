module.exports = config =>
  require("react-app-rewire-postcss")(config, {
    plugins() {
      return [
        require("postcss-import")(),
        require("postcss-extend")(),
        require("postcss-nesting")(),
        require("postcss-nested")(),
        require("postcss-preset-env")({
          stage: 3
        }),
        require("postcss-pxtorem")({
          mediaQuery: false,
          minPixelValue: 0,
          propWhiteList: [],
          replace: true,
          rootValue: 16,
          selectorBlackList: ["html"],
          unitPrecision: 5
        }),
        require("cssnano")()
      ];
    }
  });

// module.exports = function override(config, env) {
//   //do stuff with the webpack config...
//   return config;
// }
