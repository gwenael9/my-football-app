import { Stade } from "./stade";
import { Team } from "./team";

export * from "./stade";
export * from "./team";

export interface TeamResponse {
  team: Team;
  venue: Stade;
}

export interface ApiResponse {
  get: string;
  parameters: {
    id: string;
  };
  errors: string[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: TeamResponse[];
}
