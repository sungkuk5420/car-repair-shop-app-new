<template>
  <q-page class="motores-page">
    <div class="row top-image">
      <img src="statics/images/motorservicecenter.png" class="mainImg" />
      <div class="content">
        <div class="title">착한 자동차 공업사</div>
        <div class="sub-title">부천시 원미구 원미동 777-30번지</div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style lang="scss" >
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
}
</style>