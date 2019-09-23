module.exports = {
  name: 'blog-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/blog/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
