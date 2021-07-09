<template>
  <div class="content flex flex-col">
    <div class="sm440:hidden">Залишилось у черзі:</div>
    <div>
      <span class="font-bold">{{ queue }}</span
      >/{{ clients.length }}
    </div>
  </div>
</template>

<script>
export default {
  name: "QueueBottomBlock",
  props: {
    clients: {
      type: Array,
      default: () => [],
    },
    cur: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    queue() {
      return this.clients.length - this.cur;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  font-size: 32px;
  line-height: 42px;
  letter-spacing: 0.02em;
  color: #ffffff;
}
@media only screen and (max-width: 1150px) {
  .content {
    font-size: 18px;
    line-height: 28px;
  }
}
</style>