<template>
  <div class="card text-left">
    <div class="img">
      <img :src="require(`@/assets/img/${client.foto}`)" />
    </div>
    <div class="px-24 py-6 lg-md:px-12 sm-:px-6">
      <div class="info pb-4 font-bold">
        {{ client.name }}, {{ client.age }} років
      </div>
      <div class="description pb-8">{{ client.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    client: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 500px;
  box-shadow: 0px 0px 40px rgba(127, 127, 127, 0.4);
  border-radius: 40px;
  .img > img {
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
  }
  .info {
    font-size: 32px;
    line-height: 39px;
    color: #8e9ad5;
  }
  .description {
    font-size: 18px;
    line-height: 20px;
    color: #888888;
  }
}
</style>