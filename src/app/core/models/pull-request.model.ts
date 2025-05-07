export interface PullRequest {
  id: number;
  repoName: string;
  pullRequest: string;
  files: number;
  rules: number;
  passed: number;
  failed: number;
  status: string;
}
