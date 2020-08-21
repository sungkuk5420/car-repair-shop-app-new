<template>
  <q-page class="profile-page">
    <div class="contents">
      <div class="myinfo-header" @click="$router.go(-1)">
        <div>
          <i class="fas fa-angle-left"></i>
        </div>
        <div class="header-text">내 정보 수정</div>
        <div></div>
      </div>
      <div class="title">
        <strong>차종</strong>(필수)
      </div>
      <div class="content">
        <div class="car-model">
          <q-select outlined v-model="model" :options="options" label="차종을 선택하세요" />
        </div>
      </div>

      <div class="title">
        <strong>연식</strong>(필수)
      </div>
      <div class="content">
        <div class="old">
          <input type="text" name id placeholder="ex) 20180101" />
        </div>
      </div>

      <div class="title">
        <strong>키로수</strong>(필수)
      </div>
      <div class="content">
        <div class="kmeter">
          <input type="text" name id placeholder="ex) 19500" />
        </div>
      </div>

      <div class="title optional">
        <strong>등급</strong>(선택)
      </div>
      <div class="content">
        <div class="grade">
          <input type="text" name id placeholder="ex) A" />
        </div>
      </div>

      <div class="content">
        <div class="modify-btn" @click="$router.go(-1)">수정하기</div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      model: null,
      options: ["all new k3", "The new AVANTE", "Volkswagen Golf"],
    };
  },
};
</script>

<style lang="scss" >
#q-app .profile-page {
  display: flex;
  align-items: flex-start;
  justify-content: center;

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
    color: black;
  }
  .header-text {
    text-align: center;
    font-size: 20px;
    color: black;
  }
  .title {
    height: 50px;
    padding: 0 20px 5px 20px;
    display: flex;
    align-items: flex-end;
    font-size: 17px;
    color: red;
  }
  .title strong {
    color: black;
    font-size: 20px;
  }
  .content {
    padding: 0 20px;
    color: #9e9e9e;
  }
  .content .car-model,
  .content .old,
  .content .kmeter,
  .content .grade {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #a9a9a9;
    padding: 0 15px;
    color: black;
  }

  .content .car-model {
    padding: 0;
    .q-select {
      border: 0;
      outline: none;
      width: 100%;
      height: 100%;
      .q-field__control {
        border: 0;
        outline: none;
        min-height: 0;
        border-radius: 0;
      }
      .q-field__label {
        top: 16px;
      }
      .q-field__control:before {
        border: 0;
        outline: none;
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
  .content select {
    width: 100%;
    height: 100%;
    border: 0;
    background-color: white;
    color: black;
  }
  .content input {
    width: 100%;
    height: 90%;
    border: 0;
  }
  .content input:focus {
    outline: none;
  }
  .optional {
    color: black;
  }
  .modify-btn {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    border: 1px solid #a9a9a9;
    margin-top: 50px;
  }
}
</style>
