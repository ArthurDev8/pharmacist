<template>
  <div class="flex">
    <div class="w-7/12 pt-12 pl-12 md:w-full md:px-4 min-h-screen">
      <div class="go-home">
        <button @click="goHome">
          <img class="p-4" src="@/assets/img/union-white.png" />
        </button>
      </div>
      <div class="pl-20 lg-md:pl-0">
        <div
          class="
            result
            flex
            justify-between
            mt-16
            flex-wrap
            pb-8
            sm550:justify-center
          "
        >
          <div class="flex flex-col p-4" v-for="d in result" :key="d.id">
            <div class="interest">{{ d.interest }}%</div>
            <div class="drug-name">{{ d.name }}</div>
          </div>
        </div>
        <div class="text-left my-8">
          <div class="res1">Ваш результат:</div>
          <div class="res2 font-bold"><<Что я сдесь делаю? >></div>
          <div class="descr py-2">
            Это тестовое задание, так что не будем углубляться в глубины проблем
            фармацевтов.
          </div>
        </div>
        <div class="flex flex-start mt-24 mb-12 md:justify-center">
          <button @click="go" class="btn button py-4 px-12">Попробовать ещё</button>
        </div>
      </div>
    </div>
    <div class="right w-5/12 bg-white"><img class="bg-white" src="@/assets/img/result.jpg"/></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Result",
  data() {
    return {
      result: [],
    };
  },
  methods: {
    ...mapActions({ startGame: "pharmacist/resetGame" }),
    go() {
      this.startGame();
      this.$router.push("/pharmacist-game");
    },
    goHome() {
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters({
      resultSale: "pharmacist/resultSale",
      clients: "pharmacist/clients",
    }),
  },
  mounted() {
    this.resultSale.map((el, index) => {
      let procent = (100 / this.clients.length) * el.count;
      let obj = {
        id: index,
        name: `Препарат ${index + 1}`,
        interest: procent,
      };
      this.result.push(obj);
    });
  },
};
</script>

<style lang="scss" scoped>
.go-home {
  background: linear-gradient(63.53deg, #2d8550 16.62%, #5e6ec2 83.38%);
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.result {
  border-bottom: 2px solid #d9d9d9;

  .interest {
    font-size: 48px;
    line-height: 59px;
    color: #424242;
  }
  .drug-name {
    font-size: 16px;
    line-height: 20px;
    color: #424242;
  }
}
.res1 {
  font-size: 28px;
  line-height: 32px;
  color: #8e9ad5;
}
.res2 {
  font-size: 32px;
  line-height: 35px;
  letter-spacing: 0.02em;
  color: #8e9ad5;
}
.descr {
  font-size: 20px;
  line-height: 29px;
  color: #424242;
}
.btn {
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  background: linear-gradient(90deg, #d9d9d9 0%, #a1a1a1 100%);
  border-radius: 100px;
  transition: 0.2s;
  &:hover {
    background: linear-gradient(63.53deg, #2d8550 16.62%, #5e6ec2 83.38%);
  }
}
@media only screen and (max-width: 767px) {
  .right {
    display: none;
  }
}
</style>