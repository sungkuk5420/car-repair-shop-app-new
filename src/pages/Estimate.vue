<template>
  <q-page class="estimate-page">
    <div class="row top-image">
      <img src="statics/images/motorservicecenter.png" class="mainImg" />
      <div class="content">
        <div class="title">착한 자동차 공업사</div>
        <div class="sub-title">부천시 원미구 원미동 777-30번지</div>
      </div>
    </div>
    <div class="row label">
      <span>차종</span>
    </div>
    <div class="row content" v-if="!loginUser">로그인이 필요합니다.</div>
    <div class="row content" v-if="loginUser">{{loginUser.carType}}</div>
    <div class="row label">
      <span>정보</span>
    </div>
    <div class="row content" v-if="!loginUser">로그인이 필요합니다.</div>
    <div class="row content" v-if="loginUser">{{loginUser.name}}님 어서오세요!</div>
    <div class="row label">
      <span>선택 요청사항</span>
    </div>
    <div class="row content">
      <q-select outlined v-model="model" :options="options" label="요청사항을 선택하세요" />
    </div>
    <div class="row label">
      <span>요구사항</span>
    </div>
    <div class="row content">
      <q-input v-model="textarea" outlined type="textarea" rows="4" />
    </div>
    <div class="row label">
      <span>프로모션 참여코드</span>
      <span class="sub-text">이벤트 코드를 입력해주세요.</span>
    </div>
    <div class="row content">
      <q-input v-model="text" outlined />
    </div>
    <div class="row button">
      <q-btn label="견적 요청" />
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";
export default {
  data() {
    return {
      model: null,
      options: [
        "견적만 부탁드립니다.",
        "전화로 상담하고 싶습니다.",
        "방문해서 수리받고 싶습니다.",
        "정비받고 싶습니다.",
      ],
      text: "",
      textarea: "",
    };
  },
  computed: {
    ...mapGetters({
      loginUser: "getLoginUser",
    }),
  },
};
</script>

<style lang="scss" >
#q-app .estimate-page {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  .top-image {
    width: 100%;
    position: relative;
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
  .label {
    padding: 1rem;
    background: #f6f7fa;
    font-weight: 700;
    color: #3b3743;
    width: 100%;
    border-top: 1px solid #cdcdcd;
  }
  .content {
    padding: 1rem 1.5rem;
    color: #b5b5b5;
    width: 100%;
    .q-input,
    .q-textarea {
      width: 100%;
    }
    .q-field--filled .q-field__control {
      background: white;
      border: 1px solid rgba(0, 0, 0, 0.24);
    }
    .q-field--filled .q-field__control:hover:before {
      background: none;
    }
  }
  .row.button {
    width: 100%;
    display: flex;
    padding: 1rem 1.5rem;
    border-top: 1px solid #cdcdcd;
    button {
      width: 100%;
      font-size: 1rem;
      color: #fff;
      background: #585abd;
      border: 0;
      padding: 3px 0;
    }
  }

  .q-select {
    width: 100%;
    height: 100%;
    .q-field__control {
      min-height: 0;
      border-radius: 0;
    }
    .q-field__label {
      top: 16px;
    }
    .q-field__control-container {
      padding-top: 5px;
    }
  }
  .q-field--float .q-field__label.no-pointer-events.absolute.ellipsis {
    display: none;
  }
  .q-field__marginal,
  .q-field--auto-height .q-field__control,
  .q-field--auto-height .q-field__native {
    min-height: 48px;
    height: 48px;
  }
}
</style>