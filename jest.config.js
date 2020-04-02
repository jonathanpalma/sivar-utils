module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '\\.(ts)?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
};
