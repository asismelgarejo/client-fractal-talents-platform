import { init } from "@rematch/core";
import { TalentState, talentModel } from "./models/talent";

const store = init({ 
    name: "talent_pool",
    models: { talent: talentModel } });

export default store;

export type IRootState = {
  talent: TalentState;
};
