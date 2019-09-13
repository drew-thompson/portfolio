module.exports = {
  name: 'common-services',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common/services',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
