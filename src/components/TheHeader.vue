<script>
import { store , resultsList } from "../store";
export default {
  components: {
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    resultsList,
  },
  mounted() {
    resultsList()
  }
}
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">Boolflix</a>
      <div class="d-flex" role="search">
        <input type="search" class="form-control me-2 search-area" rows="1" placeholder="Cerca" aria-label="Search"
          v-model="store.search" @keyup.enter="resultsList">
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.search-area {
  resize: none;
  height: 2rem;
  overflow: hidden;
  line-height: 2rem;
}
</style>