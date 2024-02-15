import { init } from "@rematch/core";
import { talentModel } from "./models/talent";
import { TalentModel } from "@/types/talent";

const store = init({
  name: "talent_pool",
  models: { talent: talentModel },
});

export default store;

export type IRootState = {
  talent: TalentModel;
};
