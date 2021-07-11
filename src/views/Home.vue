<template>
  <div class="home">
    <div class="circle_container flex justify-center items-center px-2">
      <div class="circle_content text-left">
        <div class="content">
          <div class="hello">Добро пожаловать в игру</div>
          <div class="main_text font-bold pt-10">Помоги</div>
          <div class="main_text font-bold uppercase">Фармацевту</div>
        </div>
        <div class="flex justify-center mt-20">
          <button class="btn_go py-2 px-16" @click="go">Начать</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions} from "vuex";
export default {
  name: "Home",
  methods: {
    ...mapActions({startGame: "pharmacist/resetGame"}),
    go() {
      this.startGame();
      this.$router.push("/pharmacist-game");
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  background-image: url("../assets/img/main-bg.jpg");
  background-size: cover;
  position: relative;
  .circle_container {
    position: absolute;
    width: 860px;
    height: 860px;
    border-radius: 50%;
    margin-left: 5%;
    margin-top: -5%;
    background: linear-gradient(63.53deg, #2d8550 16.62%, #5e6ec2 83.38%);
  }
  .circle_content {
    .hello {
      font-size: 35px;
      line-height: 41px;
      letter-spacing: 0.02em;
      color: #ffffff;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .main_text {
      font-size: 60px;
      line-height: 66px;
      letter-spacing: 0.02em;
      color: #ffffff;
    }
    .btn_go {
      font-weight: bold;
      font-size: 36px;
      line-height: 44px;
      text-align: center;
      color: #8e9ad5;
      border-radius: 100px;
      background-color: white;
      transition: 0.2s;
      &:hover {
        color: #677dee;
        background-color: rgb(247, 241, 241);
      }
    }
  }
}
@media only screen and (max-width: 991px) {
  .home {
    position: static;
    .circle_container {
      position: static;
      width: 100%;
      height: 100vh;
      border-radius: 0px;
      margin-left: 0%;
      margin-top: 0%;
      opacity: 0.8;
    }
  }
}
@media only screen and (max-width: 585px) {
  .hello {
    font-size: 30px !important;
    line-height: 15px;
  }
  .main_text {
    font-size: 45px !important;
  }
}
@media only screen and (max-width: 400px) {
  .hello {
    font-size: 23px !important;
    line-height: 15px;
  }
  .main_text {
    font-size: 35px !important;
  }

  .btn_go {
    font-size: 28px !important;
  }
}
</style>