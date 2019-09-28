module.exports = {
  name: 'styleguide-feature',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/styleguide/feature',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
