module.exports = {
  name: 'projects-feature-listing',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/projects/feature-listing',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
