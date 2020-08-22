<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal>
      <q-tabs v-model="tab" indicator-color="transparent" active-color="transparent">
        <q-tab class="home" name="home">
          <router-link to="/">
            <img src="statics/images/home_off.png" />
          </router-link>
        </q-tab>
        <q-tab class="event" name="event">
          <router-link to="/event">
            <img src="statics/images/event_off.png" />
          </router-link>
        </q-tab>
        <q-tab class="estimate" name="estimate">
          <router-link to="/estimate">
            <img src="statics/images/estimate_off.png" />
          </router-link>
        </q-tab>
        <q-tab class="motores" name="motores">
          <router-link to="/motores">
            <img src="statics/images/service_center_off.png" />
          </router-link>
        </q-tab>
        <q-tab class="mypage" name="mypage">
          <router-link to="/mypage">
            <img src="statics/images/my_off.png" />
          </router-link>
        </q-tab>
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      tab: "home",
    };
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
