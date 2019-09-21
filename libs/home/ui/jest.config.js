module.exports = {
  name: 'home-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/home/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
