<template>
  <div class="h-4/12 flex justify-between mt-8 mb-8 lg-md:flex-col">
    <div class="but1">
      <button
        class="
          px-12
          py-4
          xlLg:py-2
          xl-lg:px-6
          lg-md:px-12 lg-md:my-2
          sm440:px-4
        "
        name="1"
        @click="sellDrug"
      >
        Препарат 1
      </button>
    </div>
    <div class="but2">
      <button
        class="
          px-12
          py-4
          xlLg:py-2
          xl-lg:px-6
          lg-md:px-12 lg-md:my-2
          sm440:px-4
        "
        name="2"
        @click="sellDrug"
      >
        Препарат 2
      </button>
    </div>
    <div class="but3">
      <button
        class="
          px-12
          py-4
          xlLg:py-2
          xl-lg:px-6
          lg-md:px-12 lg-md:my-2
          sm440:px-4
        "
        name="3"
        @click="sellDrug"
      >
        Препарат 3
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions({
      updateCurClient: "pharmacist/updateCurClient",
      updateResultSaleAndCur: "pharmacist/updateResultSaleAndCur",
    }),
    sellDrug(event) {
      if (this.cur < this.clients.length - 1) {
        this.updateResultSaleAndCur(event.target.name);
        this.updateCurClient();
      } else {
        this.updateResultSaleAndCur(event.target.name);
        this.$router.push("/result");
      }
    },
  },
  computed: {
    ...mapGetters({
      clients: "pharmacist/clients",
      cur: "pharmacist/cur",
    }),
  },
};
</script>

<style lang="scss" scoped>
.but1 > button,
.but2 > button,
.but3 > button {
  border-radius: 100px;
  font-size: 22px;
  line-height: 34px;
  color: #ffffff;
}
.but1 > button {
  background: linear-gradient(266.19deg, #8049c7 0%, #ca57fd 100%);
  &:hover {
    background: linear-gradient(63.53deg, #2d8550 16.62%, #5e6ec2 83.38%);
  }
}
.but2 > button {
  background: linear-gradient(266.19deg, #169ae4 0%, #0cc4fa 100%);
  &:hover {
    background: linear-gradient(63.53deg, #2d8550 16.62%, #5e6ec2 83.38%);
  }
}
.but3 > button {
  background: linear-gradient(
    90deg,
    #ffd748 0.02%,
    rgba(195, 199, 11, 0.96) 99.97%,
    #cac6ab 99.98%,
    #d3e9e1 99.99%
  );
  &:hover {
    background: linear-gradient(63.53deg, #2d8550 16.62%, #5e6ec2 83.38%);
  }
}
</style>