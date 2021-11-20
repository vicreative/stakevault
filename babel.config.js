module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'inline-dotenv',
      [
        'module-resolver',
        {
          alias: {
            features: './src/features',
            shared: './src/shared',
          },
        },
      ],
    ],
  };
};
