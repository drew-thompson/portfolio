module.exports = {
  name: 'portfolio',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/portfolio',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
