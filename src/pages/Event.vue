<template>
  <q-page class="event-page">
    <div class="row search">
      <q-input v-model="text" outlined placeholder="쿠폰번호를 입력해 주세요." />
      <q-btn label="등록" />
    </div>
    <hr />

    <div class="row event-card">
      <img src="statics/images/back_img1.jpg" alt="auto 이미지" />
      <div class="content">
        <img src="statics/images/auto.png" alt="auto 이미지" />
        <div class="title">무상점검</div>
        <div class="dis-type">100% 할인</div>
        <div class="dis-content">오일류,패드류, 등 기본 정비 10개 항목</div>
      </div>
    </div>
    <div class="row event-card">
      <img src="statics/images/back_img2.jpg" alt="auto 이미지" />
      <div class="content">
        <img src="statics/images/auto.png" alt="auto 이미지" />
        <div class="title">엔진오일 할인권</div>
        <div class="dis-type">20,000원</div>
        <div class="dis-content">ZIC 및 동급 엔진오일기준</div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
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
  padding: 20px 30px;
  .row {
    width: 100%;
    &.search {
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
  .event-card {
    position: relative;
    margin-bottom: 30px;
    & > img {
      display: table;
      width: 100%;
      height: 170px;
    }
    .content {
      padding: 20px;
      width: 100%;
      position: absolute;
      & > img {
        width: 100%;
        height: auto;
      }
      .title {
        width: 100%;
        position: absolute;
        top: 20%;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        padding-right: 10%;
        color: #ad0c0c;
        font-weight: 700;
        font-size: 20px;
        margin-top: 0;
      }
      .dis-type {
        position: absolute;
        top: 35%;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        padding-right: 10%;
        font-size: 28px;
        font-weight: 800;
        color: #000;
      }
      .dis-content {
        position: absolute;
        top: 60%;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        padding-right: 10%;
        font-size: 12px;
        color: #9b9fa0;
      }
    }
  }
}
</style>