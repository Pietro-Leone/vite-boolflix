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
    resultsList("https://api.themoviedb.org/3/discover/movie")
  }
}
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <a class="navbar-brand" href="../../index.html"><img src="../assets/img/Boolflix-logo.png" height="50" alt=""></a>
      <div class="d-flex" role="search">
        <input type="search" class="form-control me-2 search-area" rows="1" placeholder="Cerca" aria-label="Search"
          v-model="store.search" @keyup.enter="resultsList('https://api.themoviedb.org/3/search/movie')">
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav{
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  background-color: black;

}
.search-area {
  resize: none;
  height: 2rem;
  overflow: hidden;
  line-height: 2rem;
}
</style>