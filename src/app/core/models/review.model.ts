export interface Review {
  id: number;
  repo: string;
  pullRequest: string;
  files: number;
  rules: number;
  passed: number;
  failed: number;
  status: string;
  createdAt: Date;
}
