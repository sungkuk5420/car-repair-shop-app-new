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
  html,
  body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .container {
    background: white;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }
  .container .main {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .container .main-content {
    background-color: #7278c6;
    display: flex;
    flex: 1;
    height: 100%;
    color: #f0f0f6;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    font-weight: bold;
    font-size: 20px;
  }
  .container .main-center {
    display: flex;
    background-color: #f7f7f7;
    flex: 1;
    height: 100%;
    justify-content: center;

    position: relative;
  }
  .main-center .car-card {
    display: flex;
    flex-direction: column;
    width: 70%;
    background-color: #ffffff;
    justify-content: center;
    padding: 10px 30px;
    position: absolute;
    top: -100px;
  }
  .main-center .car-card .top {
    display: flex;
    justify-content: center;
  }
  .main-center .car-card .bottom {
    display: flex;
  }

  .main-center .car-card .bottom .left {
    display: flex;
    flex-direction: column;
    flex: 1;
    font-weight: bold;
  }

  .main-center .car-card .bottom .right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex: 1;
  }

  .container .main-center-footer {
    display: flex;
    color: #5c63b9;
    align-items: flex-end;
    justify-content: start;
    background-color: #f7f7f7;
    font-weight: bold;
    padding: 10px 30px;
  }

  .container .main-bottom {
    display: flex;
    flex: 1;
    height: 100%;
    flex-direction: column;
  }

  .main-bottom .content {
    display: flex;
    height: 100%;
  }
  .main-bottom .content .left {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
  }

  .main-bottom .content .right-img {
    display: flex;
    flex: 1;
    align-items: flex-start;
    justify-content: center;
  }
  .main-bottom .content .right-img img {
    width: 200px;
    height: 120px;
  }

  .main-bottom .first-line {
    display: flex;
    padding-left: 30px;
    margin: 10px 0px;
  }

  .main-bottom .first-line .left-txt {
    display: flex;
    justify-content: center;
    background-color: #565db7;
    flex: 1;
    font-size: 12px;
    color: #f6f7fb;
    padding: 3px;
  }

  .main-bottom .first-line .right {
    display: flex;
    padding-left: 10px;
    flex: 3;
    font-weight: bold;
  }

  .main-bottom .second-line {
    display: flex;
    padding-left: 30px;
    font-size: 15px;
    color: #5e5e5e;
  }

  .main-bottom .third-line {
    display: flex;
    padding-left: 30px;
    font-size: 15px;
    color: #c6c6d1;
  }
  .main-bottom .fourth-line {
    display: flex;
    padding-left: 30px;
    color: #555555;
    font-weight: bold;
  }

  .main-bottom .last-line {
    display: flex;
    padding: 10px;
    border-top: solid 1px #f7f7f7;
  }
  .main-bottom .last-line .left {
    display: flex;
    justify-content: center;
    flex: 1;
    color: #575cb5;
    font-weight: bold;
  }
  .main-bottom .last-line .right {
    display: flex;
    justify-content: center;
    flex: 1;
    color: #575cb5;
    font-weight: bold;
  }

  .container .event {
    display: flex;
    flex: 1;
    background-color: #f7f7f7;
  }
}
</style>