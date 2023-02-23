const {
  utils: { getProjects },
} = require('@commitlint/config-nx-scopes');

module.exports = {
  extends: ['@commitlint/config-conventional', '@commitlint/config-nx-scopes'],
  rules: {
    'scope-empty': [
      2,
      'never'
    ],
    'scope-enum': async (ctx) => [
      2,
      'always',
      [
        // Custom scopes
        'all',

        // Pacakges scopes
        ...(await getProjects(ctx)),
      ],
    ],
    'type-empty': [
      2,
      'never'
    ],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test'
      ],
    ],
  }
};
