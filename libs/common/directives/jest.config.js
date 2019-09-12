module.exports = {
  name: 'common-directives',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common/directives',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
