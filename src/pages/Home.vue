<template>
  <q-page class="home-page">
    <div class="container">

      <div id="main_container" class="column no-wrap">
        <div class="main_inner_wrap">
          <div class="back_image_wrap">
            <div class="back_image_content"></div>
          </div>
          <div class="main_content">
            <div class="car_name_wrap">
              <div class="car_name">폭스바겐 파사트 프리미엄</div>
            </div>

            <div class="car_info">
              <div class="inner">
                <img class="carImage" src="statics/images/car_image_sample.png">
              </div>
              <div class="empty"></div>

              <div class="row">
                <div class="inline_block1" id="item1">연식</div>
                <div class="inline_block2">2018.05.05</div>
              </div>

              <div class="row">
                <div class="inline_block1" id="item2">주행거리</div>
                <div class="inline_block2">25,000km</div>
              </div>
            </div>

            <div class="reservation_wrap">
              <h1>예약현황</h1>
              <div class="reservation_inner">
                <div id="reservation1">
                  <div class="reservation_content">
                    <div class="left_side">
                      <div class="row">
                        <div class="reservation_status">접수대기</div>
                        <div class="reservation_car_name">모델명</div>
                      </div>
                      <div class="row">
                        <div class="reservation_status2">보험접수</div>
                      </div>
                      <div class="row">
                        <div class="reservation_text">보조석 문짝이 찌그러졌습니다.</div>
                      </div>
                      <div class="row">
                        <div class="reservation_date">2018.09.10</div>
                      </div>
                    </div>
                    <div class="right_side">
                      <img class="reservation_car_image" src="statics/images/car_image_sample.png" alt>
                    </div>
                  </div>
                  <div class="reservation_button_wrap">
                    <a href="tel:+81-70-4385-3533">
                      <div class="left_button">전화하기</div>
                    </a>
                    <div class="right_button">공업소 위치</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="event_wrap">
              <h1>이벤트</h1>
              <EventCard :cardType="1" :title="'무상점검'" :disType="'100% 할인'" :disContent="'오일류,패드류, 등 기본 정비 10개 항목'" />
              <EventCard :cardType="2" :title="'엔진오일 할인권'" :disType="'20,000원'" :disContent="'ZIC 및 동급 엔진오일기준'" />
            </div>
          </div>
        </div>
        <footer-comp></footer-comp>
      </div>
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

  .event-card-wrapper {
    padding: 0;
  }

  .event-card {
    width: 100%;
  }
}
</style>


<style lang="scss" scoped>
.home-page {
  width: 100%;

  h1 {
    line-height: 1;
  }

  .container {
    width: 100%;
  }

  #main_container {
    .main_inner_wrap {
      background: #eee;

      .back_image_wrap {
        position: relative;
        width: 100%;
        height: 0;
      }

      .back_image_content {
        z-index: 0;
        position: absolute;
        width: 100%;
        height: 175px;
        background: #575eb9;
      }
    }
  }

  .main_content {
    position: relative;
    z-index: 0;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .car_info,
  .reservation_inner,
  .event_inner {
    background-color: white;
  }

  .car_name_wrap {
    width: 100%;
    height: 40px;
    padding-top: 30px;

    .car_name {
      word-break: keep-all;
      font-size: 0.8em;
      text-align: center;
      margin: 30px auto;
      margin-top: 0px;
      width: 60%;
      color: #fff;
    }
  }

  .car_info {
    width: 100%;
    padding: 20px 20px;
    margin-top: 60px;
    margin-bottom: 10px;

    .carImage {
      position: absolute;
      top: -80px;
      left: 0;
      right: 0;
      margin: auto;
      width: 200px;
      height: auto;
    }

    .inner {
      position: relative;
      left: 0;
      right: 0;
      margin: auto;
      width: 100%;
      display: block;
      height: 10px;
    }

    .empty {
      width: 100%;
      height: 25px;
    }
  }

  .inline_block1,
  .inline_block2 {
    font-size: 0.5em;
    display: inline-block;
  }

  .inline_block1 {
    width: 30%;
    font-size: 0.5em;
    font-weight: bold;
  }

  .inline_block2 {
    text-align: right;
    width: 65%;
  }

  .car_info,
  .reservation_wrap,
  .event_wrap {
    margin-bottom: 30px;
  }

  .reservation_wrap h1,
  .event_wrap h1 {
    font-size: 0.5em;
    color: #575eb9;
    margin-bottom: 15px;
  }

  .reservation_wrap .reservation_inner {
    width: 100%;
  }

  .estimate .es_inner_a {
    display: block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: black;
    background-color: white;
    border: 1px solid #888;
    box-shadow: 2px 2px #888888;
  }

  .reservation_wrap {
    .reservation_content {
      height: 110px;
    }

    #reservation1::after {
      content: " ";
      display: block;
      clear: both;
    }

    .reservation_content {
      .left_side {
        float: left;
        height: 100%;
        width: 50%;
        padding: 5px;
        padding-top: 10px;
      }

      .right_side {
        float: right;
        height: 100%;
        width: 50%;
        text-align: center;
      }

      .row {
        font-size: 0.5em;
        margin-bottom: 7px;
      }

      .reservation_status {
        display: inline-block;
        padding: 2px;
        font-size: 0.7em;
        background: #575eb9;
        color: white;
      }

      .reservation_car_name {
        display: inline-block;
        font-weight: bold;
        vertical-align: bottom;
      }

      .reservation_status2 {
        font-size: 0.7em;
      }

      .reservation_text {
        color: #aaa;
        font-size: 0.7em;
      }

      .reservation_car_image {
        height: 100%;
      }
    }

    .reservation_button_wrap {
      width: 100%;
      height: 40px;
      background: white;
      border-top: 1px solid #eee;
    }

    .left_button,
    .right_button {
      text-align: center;
      font-size: 0.5em;
      line-height: 40px;
      color: #575eb9;
      width: 50%;
    }

    .left_button {
      float: left;
    }

    .right_button {
      float: right;
    }
  }

  .event_wrap .event_inner {
    width: 100%;
    height: 100px;
  }
}
</style>
