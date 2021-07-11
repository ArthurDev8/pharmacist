<template>
  <div
    class="
      right
      w-8/12
      md:w-full
      flex flex-col
      justify-around
      px-16
      md:px-4
      sm440:px-2
    "
  >
    <div class="flex justify-center items-center h-8/12 pt-4">
      <CardItem :client="client" />
    </div>
    <ButtonsGroup />
  </div>
</template>

<script>
export default {
  name: "RightBlock",
  components: {
    CardItem: () => import("@/components/rightBlock/CardItem"),
    ButtonsGroup: () => import("@/components/rightBlock/ButtonsGroup"),
  },
  props: {
    client: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    // console.log(this.client);
  },
};
</script>

<style lang="scss" scoped>
</style>