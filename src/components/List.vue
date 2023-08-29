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
  <div class="row gy-5 justify-content-between align-items-center">
    <div class="my-col position-relative" v-for="element in store.lists">
      <div class="d-flex justify-content-center" style="min-width: 280px; min-height: 159px;">
        <Card :card="element" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-col{
  flex-basis: min-content;
  padding: 0;
}
</style>