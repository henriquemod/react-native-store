module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "@babel/preset-typescript"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            src: "./src",
            screens: "./src/presentation/screens",
            components: "./src/presentation/components",
            hooks: "./src/presentation/hooks",
          },
        },
      ],
      "react-native-reanimated/plugin"
    ],
  };
};
