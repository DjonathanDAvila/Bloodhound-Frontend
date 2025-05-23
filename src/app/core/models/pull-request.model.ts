export interface PullRequest {
  id: number;
  repositoryId: number;
  userId: number;
  url: string; // API URL do GitHub
  html_url?: string; // Será preenchido após requisição
  number: number;
  branch: string;
  status: string;
}
