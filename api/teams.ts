import apiClient from ".";
import { ApiResponse } from "../types";

export const getTeamById = async (teamId: number): Promise<ApiResponse> => {
  const response = await apiClient.get("/teams", {
    params: { id: teamId },
  });
  return response.data;
};
