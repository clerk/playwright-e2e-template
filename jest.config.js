module.exports = {
    preset: 'jest-playwright-preset',
    setupFiles: ['dotenv/config'],
    globals: {
      'ts-jest': {
        diagnostics: false,
      },
    },
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
  };
  