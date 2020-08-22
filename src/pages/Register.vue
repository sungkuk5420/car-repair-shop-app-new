<template>
  <q-page class="register-page">
    <div class="row label">회원가입</div>
    <div class="row email">
      <a-auto-complete
        v-on:keyup.enter="register"
        :data-source="dataSource"
        placeholder="이메일을을 입력해주세요 입력해주세요"
        @change="handleChange"
        v-model="email"
      />
    </div>
    <div class="row password">
      <q-input
        type="password"
        outlined
        placeholder="비밀번호를 입력해주세요"
        v-model="password"
        v-on:keyup.enter="register"
      />
    </div>
    <div class="row password">
      <q-input
        type="password"
        outlined
        placeholder="비밀번호 확인"
        v-model="password2"
        v-on:keyup.enter="register"
      />
    </div>
    <div class="row name">
      <q-input outlined placeholder="이름을 입력해주세요" v-model="name" v-on:keyup.enter="register" />
    </div>
    <div class="row car-type">
      <a-input
        @change="formatNumber"
        v-on:keyup.enter="register"
        v-model="phone"
        :max-length="13"
        placeholder="핸드폰번호을 입력해주세요"
      ></a-input>
    </div>
    <div class="row car-type">
      <q-input outlined placeholder="차종을 입력해주세요" v-model="carType" v-on:keyup.enter="register" />
    </div>
    <div class="row car-number">
      <q-input outlined placeholder="차번호를 입력해주세요" v-model="carNumber" v-on:keyup.enter="register" />
    </div>
    <div class="row button" @click="register">
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
      email: "",
      password: "",
      password2: "",
      name: "",
      phone: "",
      carType: "",
      carNumber: "",
      dataSource: [],
    };
  },
  mounted() {},
  methods: {
    handleChange(value) {
      this.dataSource =
        !value || value.indexOf("@") >= 0
          ? []
          : [
              `${value}@gmail.com`,
              `${value}@naver.com`,
              `${value}@hanmail.net`,
              `${value}@hotmail.com`,
              `${value}@nate.com`,
              `${value}@daum.net`,
            ];
    },
    formatNumber(f) {
      let f_val = f.target.value.replace(/-/gi, "").replace(/\D[^\.]/g, "");
      this.phone =
        f_val == ""
          ? ""
          : f_val.slice(0, 3) + "-" + f_val.slice(3, 7) + "-" + f_val.slice(7);
      if (this.phone[this.phone.length - 1] == "-") {
        this.phone = this.phone.slice(0, this.phone.length - 1);
      }
      if (this.phone[this.phone.length - 1] == "-") {
        this.phone = this.phone.slice(0, this.phone.length - 1);
      }
    },
    successMessage(text) {
      this.$message.success(text);
    },
    errorMessage(text) {
      this.$message.error(text);
    },
    checkForms() {
      if (this.email == "") {
        this.errorMessage("이메일을 입력해주세요.");
        return true;
      } else if (this.password == "") {
        this.errorMessage("패스워드를 입력해주세요.");
        return true;
      } else if (this.password !== this.password2) {
        this.errorMessage("패스워드 1,2가 다릅니다.");
        return true;
      } else if (this.name == "") {
        this.errorMessage("이름을 입력해주세요.");
        return true;
      } else if (this.phone == "" || this.phone.length != 13) {
        this.errorMessage("핸드폰번호를 입력해주세요.");
        return true;
      }
      return false;
    },
    register() {
      console.log("register!");
      const thisObj = this;
      const email = this.email;
      const password = this.password;
      const password2 = this.password2;
      const name = this.name;
      const phone = this.phone;
      const carType = this.carType;
      const carNumber = this.carNumber;
      if (this.checkForms()) {
        this.loading = false;
        return false;
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          if (res.user) {
            let user = {
              name,
              phone,
              carType,
              carNumber,
              email: res.user.email,
              profileImage: res.user.photoURL || "",
              comment: "",
              age: "",
              height: "",
              chats: "",
              voteHistories: "",
              uid: res.user.uid,
            };
            console.log(user);

            this.$store
              .dispatch(T.ADD_USER_DATA, {
                data: {
                  user,
                },
              })
              .then(() => {
                thisObj.successMessage("회원가입 완료");
                thisObj.$router.push(`/login?email=${email}`);
              });
          }
        })
        .catch(function (error) {
          console.log(error);
          thisObj.errorMessage(error.message);
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
#q-app .register-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > .row {
    width: 100%;
    padding: 0.25rem 1.5rem;
    .ant-select,
    .ant-input {
      width: 100%;
    }
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
      padding: 1rem 1.5rem;
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