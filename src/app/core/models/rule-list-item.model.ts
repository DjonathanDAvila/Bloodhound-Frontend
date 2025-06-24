import { Repository } from "./repository.model";

export interface RuleListItem {
  id: number;
  repositoryId: number;
  repositoru: Repository,
  text: string;
  title: string;
  userId: number;
}
