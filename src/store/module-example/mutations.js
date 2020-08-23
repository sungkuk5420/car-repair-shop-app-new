import { T } from "./types";

export const mutations = {
  [T.SET_LOGIN_USER](state, loginUser) {
    console.log(loginUser)
    state.loginUser = loginUser;
  },
  [T.CHANGE_ACTIVE_TAB](state, activeTab) {
    console.log(activeTab)
    state.activeTab = activeTab;
  }
};
