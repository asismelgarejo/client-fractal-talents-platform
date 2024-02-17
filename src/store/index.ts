import { init } from "@rematch/core";
import { talentModel } from "./models/talent";
import { Talent } from "@/types/Talent";

const store = init({
  name: "talent_pool",
  models: { talent: talentModel },
});

export default store;
export type IRootState = {
  talent: Talent;
};
