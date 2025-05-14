export interface Repository {
  id: number;
  name: string;
  url: string;
  ownerId: number;
  context: string;
  avatarUrl?: string; // opcional, pois não vem da API, mas podemos mockar
  selected?: boolean;
}
