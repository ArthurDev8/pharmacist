<template>
  <div
    class="
      left
      w-4/12
      px-8
      pt-14
      flex flex-col
      justify-between
      lg:pt-4
      sm550:px-2
    "
  >
    <div class="top py-2">
      <LeftTopBlock />
    </div>
    <div class="center py-2">
      <SmileListsComponent :resultSale="resultSale" />
    </div>
    <div class="bottom py-2">
      <QueueBottomBlock :clients="clients" :cur="cur" />
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftBlock",
  components: {
    SmileListsComponent: () =>
      import("@/components/leftBlock/LeftTopSmileListsComponent"),
    QueueBottomBlock: () =>
      import("@/components/leftBlock/LeftTopQueueBottomBlock"),
    LeftTopBlock: () => import("@/components/leftBlock/LeftTopBlock"),
  },
  props: {
    resultSale: {
      type: Array,
      default: () => [],
    },
    clients: {
      type: Array,
      default: () => [],
    },
    cur: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style  lang="scss" scoped>
.left {
  background: linear-gradient(63.53deg, #2d8550 16.62%, #5e6ec2 83.38%);
  opacity: 0.7;
}
</style>