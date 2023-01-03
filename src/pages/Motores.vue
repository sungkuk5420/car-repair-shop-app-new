<template>
  <q-page class="motores-page">
    <div class="row top-image">
      <img src="statics/images/motorservicecenter.png" class="mainImg" />
      <div class="content">
        <div class="title">착한 자동차 공업사</div>
        <div class="sub-title">부천시 원미구 원미동 777-30번지</div>
      </div>
    </div>
    <div class="estimate-ask-btn">견적요청</div>
    <div class="boss-info">
      <div class="boss-image">
        <img src="statics/images/motorImage2.png" alt />
      </div>
      <div class="detail-info">
        <div class="name">이광현 공업사</div>
        <div class="address">부천시 원미구 원미동 777-30번지</div>
        <div class="phone">070 1010 1010</div>
      </div>
    </div>
    <div class="operation-time">운영시간</div>
    <div class="operation-time-detail">
      월,화,수,목,금 : 09:00 ~ 20:00
      <br />토 : 09:00 ~ 18:00
      <br />일,공휴일 : 휴무
    </div>
    <div class="basic-info">기본정보</div>
    <div class="basic-info-detail">
      <div class="row">
        <div class="left">
          <i class="fas fa-check"></i>오일류 교환
        </div>
        <div class="right">
          <i class="fas fa-check"></i>차량 튜닝
        </div>
      </div>
      <div class="row">
        <div class="left">
          <i class="fas fa-check"></i>타이어 교체
        </div>
        <div class="right">
          <i class="fas fa-check"></i>무료세차
        </div>
      </div>
      <div class="row">
        <div class="left">
          <i class="fas fa-check"></i>외부 수리
        </div>
        <div class="right">
          <i class="fas fa-check"></i>열처리 부스 자체 보유
        </div>
      </div>
    </div>
    <div class="review">
      <div class="title">고객 후기</div>
      <div class="review-write">리뷰 작성</div>
    </div>
    <div class="review-detail">
      <div class="row">
        <div class="image">
          <img src="../statics/images/good.png" alt />
        </div>
        <div class="detail">
          <div class="content">매우 만족스럽습니다.</div>
          <div class="car-info">
            아우디 a4
            <div>/</div>2014년 오너
          </div>
          <div class="write-date">2018년 8월 2일 2:10</div>
        </div>
      </div>
      <div class="row">
        <div class="image">
          <img src="../statics/images/good.png" alt />
        </div>
        <div class="detail">
          <div class="content">
            제가 원했던 날짜에 받아볼 수 있어서 좋았구요. 세심하게
            신경써주시는거 같아서 믿음이 갔습니다. 주변 지인들에게 소개 꼭
            할게요
          </div>
          <div class="car-info">
            아우디 a4
            <div>/</div>2014년 오너
          </div>
          <div class="write-date">2018년 8월 2일 2:10</div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style lang="scss">
#q-app .motores-page {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  .top-image {
    position: relative;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      display: table;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 0;
      margin: auto;

      .title,
      .sub-title {
        text-align: center;
        font-weight: 500;
        color: #fff;
      }

      .title {
        font-weight: 500;
        font-size: 32px;
        margin-bottom: 10px;
      }

      .sub-title {
        font-size: 20px;
      }
    }
  }

  .estimate-ask-btn {
    height: 50px;
    width: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #585abe;
  }

  .boss-info {
    width: 100%;
    display: flex;

    .boss-image {
      margin: 30px 0 30px 15px;
      width: 120px;

      img {
        height: 100px;
        border-radius: 50%;
      }
    }

    .detail-info {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;

      .name {
        color: #585abe;
        font-weight: bold;
        font-size: 15px;
      }

      .address,
      .phone {
        font-weight: bold;
        font-size: 13px;
      }
    }
  }

  .map {
    height: 170px;
    width: 100%;
  }

  .operation-time,
  .basic-info {
    padding: 0px 15px 15px 15px;
    color: #585abe;
    font-weight: bold;
    font-size: 17px;
  }

  .operation-time-detail {
    padding: 0 0 15px 15px;
    font-weight: bold;
  }

  .basic-info-detail {
    width: 100%;

    .row {
      display: flex;
      justify-content: space-between;
      font-weight: bold;

      .left {
        padding-left: 20px;
        width: 170px;

        i {
          padding-right: 5px;
        }
      }

      .right {
        width: 170px;
        display: flex;
        justify-content: flex-start;

        i {
          padding-right: 5px;
        }
      }
    }
  }

  .review {
    padding: 40px 15px 15px 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #585abe;
    font-weight: bold;
    font-size: 17px;

    .review-write {
      color: #737373;
      font-size: 13px;
    }
  }

  .review-detail {
    .row {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 20px;

      .image {
        margin: 0 20px 20px 20px;

        img {
          width: 50px;
        }
      }

      .detail {
        flex: 1;
        padding-right: 20px;
      }
    }
  }

  .detail .content {
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 15px;
  }

  .detail .car-info,
  .detail .write-date {
    font-size: 12px;
    display: flex;
    flex: 1;

    div {
      margin: 0 5px;
    }
  }
}
</style>
