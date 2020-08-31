<template>
  <q-page class="event-page">
    <div class="row search">
      <q-input v-model="text" outlined placeholder="쿠폰번호를 입력해 주세요." />
      <q-btn label="등록" />
    </div>
    <hr />
    <EventCard
      :cardType="1"
      :title="'무상점검'"
      :disType="'100% 할인'"
      :disContent="'오일류,패드류, 등 기본 정비 10개 항목'"
    />
    <EventCard
      :cardType="2"
      :title="'엔진오일 할인권'"
      :disType="'20,000원'"
      :disContent="'ZIC 및 동급 엔진오일기준'"
    />
  </q-page>
</template>

<script>
import EventCard from "../components/EventCard";
export default {
  components: { EventCard },
  data() {
    return {
      text: "",
    };
  },
};
</script>

<style lang="scss" >
#q-app .event-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .row {
    width: 100%;
    &.search {
      padding: 20px 20px 0 20px;
      display: flex;
      .q-input {
        flex: 1;
        margin-right: 10px;
      }
      .q-btn {
        background: #431dad;
        color: white;
      }
    }
  }
  hr {
    width: 100%;
    height: 0;
    margin: 1.5rem 0;
    border-top: 1px solid rgba(0, 0, 0, 0.65);
  }
}
</style>