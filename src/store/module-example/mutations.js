import { T } from "./types";

export const mutations = {
  [T.SET_LOGIN_USER](state, loginUser) {
    console.log(loginUser)
    state.loginUser = loginUser;
  }
};
