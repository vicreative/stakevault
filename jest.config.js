module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/src/shared/tests/setup.ts',
  ],
  clearMocks: true,
};
