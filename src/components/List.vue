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
  <div class="row gy-5 justify-content-center align-items-center">
    <div class="d-flex">
      <div class="my-col position-relative" v-for="element in store.list">
        <div class="d-flex justify-content-center">
          <Card :card="element" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-col {
  flex-basis: min-content;
  padding: .5rem;
}
</style>