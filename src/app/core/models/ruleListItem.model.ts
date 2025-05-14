export interface RuleListItem {
  id: string;
  name: string;
  description: string;
  createdBy: string;
  createdAt: string;
  updatedBy?: string;
  updatedAt?: string;
  reposCount: number;
}
