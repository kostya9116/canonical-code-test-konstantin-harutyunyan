module.exports = {
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
    preset: 'ts-jest/presets/js-with-ts',
    testEnvironment: 'jsdom',
    testRegex: '(/tests/jest/.*|(\\.|/)(test|spec))\\.(ts|tsx)$',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    "setupFilesAfterEnv": [
        "<rootDir>/src/setupTests.ts"
    ],
    transformIgnorePatterns: ["/node_modules/(?!axios).+\\.js$"],
};
