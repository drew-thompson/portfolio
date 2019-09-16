module.exports = {
  name: 'common-ui-sidenav',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/common/ui/sidenav',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
