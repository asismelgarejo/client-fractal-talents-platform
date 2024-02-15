import { TalentModel } from "@/types/talent";
import { createModel } from "@rematch/core";

const INITIAL_STATE: TalentModel = {
  salaryRange: [0, 0],
};

export const talentModel = createModel()({
  state: INITIAL_STATE,
  reducers: {
    LOAD_TALENT(state, product) {
      return state;
    },
  },

  effects: (dispatch) => ({
    async: (_, store) => {},
  }),
});
