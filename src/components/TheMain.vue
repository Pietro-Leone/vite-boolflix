<script>
import { } from "../store";
import List from "./List.vue"
export default {
  components: {
    List,
  }
}
</script>

<template>

  <div class="container mt-5" style="color: white;">
    <div class="row">
      <h1 style="font-size: 5rem;">Films and Series </h1>
    </div>
  </div>

  <div class="container my-slider my-5">
    <List />
  </div>
</template>

<style lang="scss" scoped>
.my-slider{
  padding: 2rem 0;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  height: 400px;
}
</style>