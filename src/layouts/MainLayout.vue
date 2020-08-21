<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal>
      <q-tabs v-model="tab" indicator-color="transparent" active-color="transparent">
        <q-tab class="home" name="home">
          <img src="statics/images/home_off.png" />
        </q-tab>
        <q-tab class="event" name="event">
          <img src="statics/images/event_off.png" />
        </q-tab>
        <q-tab class="estimate" name="estimate">
          <img src="statics/images/estimate_off.png" />
        </q-tab>
        <q-tab class="motores" name="motores">
          <img src="statics/images/service_center_off.png" />
        </q-tab>
        <q-tab class="mypage" name="mypage">
          <img src="statics/images/my_off.png" />
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
