<template>
  <div>
    <div class="parametru text-left sm440:hidden">Параметри:</div>
    <div class="flex justify-between flex-wrap">
      <div
        v-for="(smile, index) in 2"
        :key="index"
        class="
          smile_block
          flex
          justify-between
          items-center
          w-5/12
          lg:w-full
          p-2
          my-2
        "
      >
        <div><img :src="require(`@/assets/img/${index + 1}icon.png`)" /></div>
        <div class="smile_block__number pr-5 xl:pr-1">
          {{ resultSale[index].count }}
        </div>
      </div>
    </div>
    <div class="flex justify-center flex-wrap">
      <div
        class="
          smile_block
          flex
          justify-between
          items-center
          w-5/12
          lg:w-full
          p-2
          my-2
        "
      >
        <div><img src="@/assets/img/heart_icon.png" /></div>
        <div class="smile_block__number pr-5 xl:pr-1">
          {{ resultSale[2].count }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmileListsComponent",
  props: {
    resultSale: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.parametru {
  font-size: 36px;
  line-height: 44px;
  color: #ffffff;
  margin-bottom: 30px;
}
.smile_block {
  background: #ffffff;
  box-shadow: 0px 0px 50px rgba(131, 42, 64, 0.4);
  border-radius: 40px;
  .smile_block__number {
    font-size: 48px;
    line-height: 59px;
    color: #424242;
  }
}
@media only screen and (max-width: 1150px) {
  .parametru {
    font-size: 22px;
    line-height: 32px;
    color: #ffffff;
    margin-bottom: 10px;
  }
  .smile_block {
    border-radius: 40px;
    & div > img {
      width: 30px;
    }
    .smile_block__number {
      font-size: 24px;
      line-height: 28px;
      color: #424242;
    }
  }
}
</style>