module.exports = {
  name: 'projects-feature-detail',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/projects/feature-detail',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
