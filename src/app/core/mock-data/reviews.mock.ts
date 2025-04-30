export const MOCK_REVIEWS = [
  {
    id: 1,
    repo: 'imersao-alura',
    pullRequest: '#1',
    files: 1,
    rules: 0,
    passed: 0,
    failed: 0,
    status: 'success',
    createdAt: new Date('2024-04-28T14:23:00')
  },
  {
    id: 2,
    repo: 'angular-dashboard',
    pullRequest: '#12',
    files: 5,
    rules: 2,
    passed: 1,
    failed: 1,
    status: 'warning',
    createdAt: new Date('2024-04-29T10:12:00')
  },
  {
    id: 3,
    repo: 'nestjs-api',
    pullRequest: '#33',
    files: 3,
    rules: 4,
    passed: 4,
    failed: 0,
    status: 'success',
    createdAt: new Date('2024-04-30T09:00:00')
  }
];
