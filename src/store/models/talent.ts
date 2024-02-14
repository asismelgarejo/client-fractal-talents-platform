import { createModel } from "@rematch/core";

export type TalentState = {
  salaryRange: [number, number];
};

const INITIAL_STATE: TalentState = {
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
