<template>
  <q-page class="my-page">
    <div class="contents">
      <div class="myinfo-header" @click="$router.go(-1)">
        <div>
          <i class="fas fa-angle-left"></i>
        </div>
        <div class="header-text">내 정보</div>
        <div></div>
      </div>
      <div class="title">내 정보</div>
      <div class="content">
        <div class="my-info" @click="$router.push('/profile')">
          all new k3
          <input type="button" value="수정" />
        </div>
      </div>

      <div class="title">내 쿠폰</div>
      <div class="content">
        <div class="coupon">
          내 쿠폰
          <input type="button" value="3개" />
        </div>
      </div>

      <div class="title">서비스 정보</div>
      <div class="content">
        <div class="service-terms">
          서비스 이용약관
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
      <div class="content">
        <div class="location-service-terms">
          위치기반 서비스 이용약관
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
      <div class="content">
        <div class="privacy">
          개인정보 취급방침
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
      <div class="content">
        <div class="service-politics">
          서비스 이용정책
          <i class="fas fa-angle-right"></i>
        </div>
      </div>

      <div class="title">마케팅 수신 동의</div>
      <div class="content">
        <div class="marketing">
          <div class="email">이메일</div>
          <div class="toggle">
            <q-toggle v-model="toggle1" />
          </div>
        </div>
      </div>
      <div class="content">
        <div class="marketing">
          <div class="sms">SMS</div>
          <div class="toggle">
            <q-toggle v-model="toggle2" />
          </div>
        </div>
      </div>
      <div class="content">
        <div class="marketing">
          <div class="app-push">앱 푸쉬</div>
          <div class="toggle">
            <q-toggle v-model="toggle3" />
          </div>
        </div>
      </div>

      <div class="content">
        <div class="logout-btn">로그아웃</div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      toggle1: false,
      toggle2: false,
      toggle3: false,
    };
  },
};
</script>

<style lang="scss" >
#q-app .my-page {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 60px;

  .contents {
    width: 100%;
  }

  .myinfo-header {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #9e9e9e;
    margin-bottom: 10px;
  }
  .myinfo-header i {
    padding-left: 10px;
  }
  .myinfo-header div {
    flex: 1;
    color: #9e9e9e;
  }
  .header-text {
    text-align: center;
    font-size: 20px;
    color: #9e9e9e;
  }
  .title {
    height: 50px;
    padding: 0 30px 5px 30px;
    display: flex;
    align-items: flex-end;
    font-size: 20px;
    color: #9e9e9e;
  }
  .content {
    padding: 0 30px;
    color: #9e9e9e;
  }
  .content .my-info,
  .content .coupon {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #a9a9a9;
    padding: 0 15px;
  }
  .content input {
    border: 0;
    background-color: white;
    color: #9e9e9e;
  }
  .service-terms,
  .location-service-terms,
  .privacy,
  .service-politics {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #a9a9a9;
    padding: 0 15px;
    margin-bottom: 10px;
  }
  .marketing {
    height: 50px;
    display: flex;
    justify-content: space-between;
    border: 1px solid #a9a9a9;
    padding: 0 15px;
    margin-bottom: 10px;
  }
  .email,
  .sms,
  .app-push {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .toggle {
    display: flex;
    align-items: center;
  }
  .q-toggle {
    &__inner {
      padding: 0.185em 0.1em;
      color: #6d00dd;
    }
    &__track {
      border-radius: 15px;
      height: 0.65em;
    }
  }
  .logout-btn {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #a9a9a9;
    margin-top: 50px;
  }
}
</style>
