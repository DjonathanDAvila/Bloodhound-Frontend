export interface Rule {
  id: string;
  name: string;
  description: string;
  repositories: string[];
  createdBy: string;
  createdAt: Date;
  updatedBy?: string;
  updatedAt?: Date;
}
