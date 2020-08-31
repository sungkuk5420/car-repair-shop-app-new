<template>
  <q-page class="home-page">
    <div class="container">
      <div class="main">
        <div class="main-content">
          <label for>폭스바겐 파사트</label>
          <label for>프리미엄</label>
        </div>
        <div class="main-center">
          <div class="car-card">
            <div class="top">
              <img src="statics/images/car.jpg" alt />
            </div>
            <div class="bottom">
              <div class="left">
                <label for>연식</label>
                <label for>주행거리</label>
              </div>
              <div class="right">
                <label for>2018.07</label>
                <label for>25,000km</label>
              </div>
            </div>
          </div>
        </div>
        <div class="main-center-footer">
          <label for>예약현황</label>
        </div>
        <div class="main-bottom">
          <div class="content">
            <div class="left">
              <div class="first-line">
                <div class="left-txt">접수대기</div>
                <div class="right">파사트GT</div>
              </div>
              <div class="second-line">보험접수</div>
              <div class="third-line">보조석 문짝이 찌그러졌습니다.</div>
              <div class="fourth-line">2018.09.10</div>
            </div>

            <div class="right-img">
              <img src="icons\car.jpg" alt />
            </div>
          </div>

          <div class="last-line">
            <div class="left">
              <label for>전화하기</label>
            </div>
            <div class="right">
              <label for>공업소 위치</label>
            </div>
          </div>
        </div>
      </div>

      <div class="event">이벤트(임시)</div>
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
    </div>
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
#q-app .home-page {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>