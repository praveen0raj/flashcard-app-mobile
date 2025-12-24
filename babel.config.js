module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@': './src',
            '@components': './src/components',
            '@services': './src/services',
            '@store': './src/store',
            '@hooks': './src/hooks',
            '@types': './src/types',
            '@utils': './src/utils',
            '@config': './src/config',
            '@assets': './src/assets',
          },
        },
      ],
      'react-native-reanimated/plugin', // Must be last
    ],
  };
};
