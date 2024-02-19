import { init } from "@rematch/core";
import { talentModel } from "./models/talent";
import { Talent } from "@/types/Talent";
import { userModel, userReducers } from "./models/user";
import { User } from "@/types/User";

const store = init({
  name: "talent_pool",
  models: { talent: talentModel, user: userModel },
});

export default store;

export type IReducers = typeof userReducers;

export type IRootState = {
  talent: Talent;
  user: User | null;
};
