module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@util/(.*)$': '<rootDir>/src/util/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@controller/(.*)$': '<rootDir>/src/controller/$1'
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/']
}
