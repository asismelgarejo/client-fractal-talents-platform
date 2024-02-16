import { TalentModel } from "@/types/talent";
import { createModel } from "@rematch/core";

const INITIAL_STATE: TalentModel = {
  salary: {
    maximum: 3000,
    minimum: 2500,
    currency: "PEN",
  },
};

export const talentModel = createModel()({
  state: INITIAL_STATE,
  reducers: {
    UPDATE_SALARY(state, salary) {
      return { ...state, salary };
    },
  },

  effects: (dispatch) => ({
    async: (_, store) => {},
  }),
});
