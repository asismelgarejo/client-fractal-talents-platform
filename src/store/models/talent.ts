import { Talent } from "@/types/Talent";
import { createModel } from "@rematch/core";

const INITIAL_STATE: Talent = {
  salary: {
    maximum: 3000,
    minimum: 2500,
    currency: "PEN",
  },
  languages: [
    {
      language: {
        id: 1,
        name: "English",
      },
      level: {
        id: 1,
        name: "Advanced",
      },
    },
    {
      language: { id: 2, name: "Spanish" },
      level: {
        id: 1,
        name: "Advanced",
      },
    },
  ],
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
