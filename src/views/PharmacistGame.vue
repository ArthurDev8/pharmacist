<template>
  <div class="pharmacist flex min-h-screen">
    <LeftBlock :resultSale="resultSale" :clients="clients" :cur="cur" />
    <RightBlock :client="currentClient" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Pharmacist",
  components: {
    LeftBlock: () => import("@/components/leftBlock/LeftBlock"),
    RightBlock: () => import("@/components/rightBlock/RightBlock"),
  },
  data() {
    return {
      clientName: "",
    };
  },
  watch: {
    clientName() {
      window.history.pushState(
        null,
        document.title,
        `${window.location.pathname}?clientName=${this.clientName}`
      );
    },
    currentClient() {
      this.clientName = this.currentClient.name;
    },
  },
  methods: {
    ...mapActions({ getClient: "pharmacist/getClient" }),
  },
  computed: {
    ...mapGetters({
      currentClient: "pharmacist/currentClient",
      cur: "pharmacist/cur",
      resultSale: "pharmacist/resultSale",
      clients: "pharmacist/clients",
    }),
  },

  mounted() {
    this.getClient(this.cur);
  },
};
</script>

<style lang="scss" scoped>
</style>