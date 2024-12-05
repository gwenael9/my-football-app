import { recupTeam } from "./services/team.service";

const displayTeam = async () => {
  const arsenal = await recupTeam(42);
  console.log(arsenal?.venue);
};

displayTeam();
