<script>
import { store } from "../store";
import Card from "./Card.vue"
export default {
  components: {
    Card,
  },
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <div class="row gy-4">
    <div class="col-3" v-for="element in store.list">
      <Card :card="element" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>