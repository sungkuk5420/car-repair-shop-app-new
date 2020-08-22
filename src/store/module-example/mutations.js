import { T } from "./types";

export const mutations = {
  [T.TYPE](state, data) {
    state.data = data;
  }
};
