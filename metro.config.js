/* eslint-disable @typescript-eslint/no-var-requires */
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true,
});

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = config;

  const modifiedConfig = {
    ...config,
    transformer: {
      ...config.transformer,
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      ...config.resolver,
      // Remove svg from assetExts and add it to sourceExts
      assetExts: assetExts.filter(ext => ext !== "svg").concat(["ttf"]), 
      sourceExts: [...sourceExts, "svg", "mjs"],
    },
  };

  return withNativeWind(modifiedConfig, {
    input: "./global.css",
    inlineRem: 16,
  });
})();
