import { getTeamById } from "../api/teams";
import { TeamResponse } from "../types";

export const recupTeam = async (id: number): Promise<TeamResponse | undefined> => {
  try {
    const data = await getTeamById(id);
    return data.response[0];
  } catch (error) {
    console.error("Erreur lors de la récupération des données", error);
  }
};
