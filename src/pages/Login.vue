<template>
  <q-page class="login-page">
    <div class="row label">로그인</div>
    <div class="row email">
      <q-input outlined placeholder="이메일" v-model="email" v-on:keyup.enter="login" />
    </div>
    <div class="row password">
      <q-input
        type="password"
        outlined
        placeholder="비밀번호"
        v-model="password"
        v-on:keyup.enter="login"
      />
    </div>
    <div class="row checkbox">
      <q-checkbox v-model="checkbox" label="자동로그인" />
    </div>
    <div class="row button" @click="login">
      <q-btn label="로그인" />
    </div>
    <div class="row button" @click="$router.push('/register')">
      <q-btn label="회원가입" />
    </div>
  </q-page>
</template>

<script>
import { Notify } from "quasar";
import firebase from "firebase";
import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";
export default {
  data() {
    return {
      checkbox: false,
      email: "",
      password: "",
    };
  },
  mounted() {
    const emailStringIntoPath = this.$route.fullPath.split("email=")[1];
    if (emailStringIntoPath) {
      this.email = emailStringIntoPath.replace("%40", "@");
    }
    if (this.loginUser) {
      this.$router.push(`/main`);
    }
  },
  computed: {
    ...mapGetters({
      loginUser: "getLoginUser",
    }),
  },
  methods: {
    login() {
      const email = this.email;
      const password = this.password;
      const thisObj = this;
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res);
          if (res.operationType == "signIn") {
            thisObj.$store
              .dispatch(T.SET_LOGIN_USER, {
                data: {
                  userId: res.user.uid,
                },
              })
              .then(() => {
                thisObj.$router.push(`/`);
              });
          }
        })
        .catch(function (error) {
          Notify.create({
            color: "white",
            textColor: "black",
            message: error.message,
            position: "top",
            timeout: 3000,
          });
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
    },
  },
};
</script>

<style lang="scss" >
#q-app .login-page {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  & > .row {
    width: 100%;
    padding: 0.5rem 1.5rem;
    &.label {
      padding: 2rem 1.5rem 1rem 1.5rem;
      font-family: Noto Sans KR;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 35px;
      color: #3c3c3c;
    }
    & > label {
      padding: 0;
      width: 100%;
    }
    &.button {
      display: flex;
      padding: 0.25rem 1.5rem;
      button {
        width: 100%;
        font-size: 1rem;
        color: #fff;
        background: #585abd;
        border: 0;
        padding: 3px 0;
      }
    }
  }
}
</style>