<template>
  <div class="row event-card-wrapper">
    <div class="row event-card">
      <img
        :src="cardType==1?'statics/images/back_img1.jpg':'statics/images/back_img2.jpg'"
        alt="auto 이미지"
      />
      <div class="content">
        <img src="statics/images/auto.png" alt="auto 이미지" />
        <div class="title">{{title}}</div>
        <div class="dis-type">{{disType}}</div>
        <div class="dis-content">{{disContent}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardType", "title", "disType", "disContent"],
};
</script>

<style lang="scss" scoped>
.event-card-wrapper {
  padding: 0 20px;
}
.event-card {
  position: relative;
  margin-bottom: 20px;
  & > img {
    display: table;
    width: 100%;
    height: 180px;
    flex: none;
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
      top: 22%;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      padding-right: 10%;
      color: #ad0c0c;
      font-weight: 700;
      font-size: 20px;
      margin-top: 0;
      flex: none;
    }
    .dis-type {
      position: absolute;
      top: 37%;
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
      top: 62%;
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
</style>