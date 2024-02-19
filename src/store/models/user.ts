import { User } from "@/types/User";
import { createModel } from "@rematch/core";
import { Reducer } from "react";

const INITIAL_STATE: User | null = null;

export type USER_ACTIONS = "LOAD_USER";

export const userReducers: Record<USER_ACTIONS, Reducer<User | null, User>> = {
  LOAD_USER(_, user) {
    return user;
  },
};

export const userModel = createModel()({
  state: INITIAL_STATE,
  reducers: userReducers as any,
  effects: (dispatch) => ({
    async: (_, store) => {},
  }),
});
