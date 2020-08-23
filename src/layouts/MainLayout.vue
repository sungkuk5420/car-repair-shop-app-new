<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal>
      <q-tabs v-model="tab" indicator-color="transparent" active-color="transparent">
        <q-tab class="home" name @click="function(){changeActiveTab('')}">
          <img src="statics/images/home_off.png" v-show="activeTab!=''" />
          <img src="statics/images/home_on.png" v-show="activeTab==''" />
        </q-tab>
        <q-tab class="event" name="event" @click="function(){changeActiveTab('event')}">
          <img src="statics/images/event_off.png" v-show="activeTab!='event'" />
          <img src="statics/images/event_on.png" v-show="activeTab=='event'" />
        </q-tab>
        <q-tab class="estimate" name="estimate" @click="function(){changeActiveTab('estimate')}">
          <img src="statics/images/estimate_off.png" v-show="activeTab!='estimate'" />
          <img src="statics/images/estimate_on.png" v-show="activeTab=='estimate'" />
        </q-tab>
        <q-tab class="motores" name="motores" @click="function(){changeActiveTab('motores')}">
          <img src="statics/images/service_center_off.png" v-show="activeTab!='motores'" />
          <img src="statics/images/service_center_on.png" v-show="activeTab=='motores'" />
        </q-tab>
        <q-tab class="mypage" name="mypage" @click="function(){changeActiveTab('mypage')}">
          <img src="statics/images/my_off.png" v-show="activeTab!='mypage'" />
          <img src="statics/images/my_on.png" v-show="activeTab=='mypage'" />
        </q-tab>
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";
export default {
  data() {
    return {
      tab: "home",
    };
  },
  computed: {
    ...mapGetters({
      activeTab: "getActiveTab",
    }),
  },
  methods: {
    changeActiveTab(activeTab) {
      this.$router.push(`/${activeTab}`);
      this.$store.dispatch(T.CHANGE_ACTIVE_TAB, { data: { activeTab } });
    },
  },
};
</script>

<style lang="scss">
#q-app .q-footer {
  background: white;
  .q-tab {
    border-top: 1px solid #ddd;
    width: 20%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5px;
    padding-bottom: 5px;
    &:not(:last-child) {
      border-right: 1px solid #ddd;
    }
    &__content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      padding-bottom: 5px;
    }
    &.home {
      padding-bottom: 6px;
      img {
        width: 57%;
      }
    }

    &.event {
      padding-bottom: 4px;
      img {
        width: 61%;
      }
    }
    &.estimate {
      padding-bottom: 4px;
      img {
        width: 80%;
      }
    }

    &.motores {
      padding-bottom: 4px;
      img {
        width: 60%;
      }
    }
    &.mypage {
      padding-bottom: 2px;
      img {
        width: 97%;
      }
    }
  }
}
</style>
