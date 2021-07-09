<template>
  <div>
    <button @click="goHome" class="img_block flex justify-center items-center">
      <img src="@/assets/img/home.png" />
    </button>
  </div>
</template>

<script>
export default {
  name: "LeftTopBlock",
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.img_block {
  width: 70px;
  height: 70px;
  background-color: white;
  border-radius: 50%;
  transition: 0.3s;
  &:hover {
    background-color: rgb(223, 223, 223);
  }
  & img {
    width: 40px;
    height: 40px;
  }
}
</style>