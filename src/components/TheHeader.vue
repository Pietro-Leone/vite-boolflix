<script>
import { store, resultsList } from "../store";
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
        <input type="search" class="form-control search-area rounded-0" rows="1" placeholder="Cerca" aria-label="Search"
          v-model="store.search" @keyup.enter="resultsList('https://api.themoviedb.org/3/search/movie')">
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  background-color: black;

}

.form-control {
  background-color: black !important;
  color: white !important;

  &:focus {
    box-shadow: 0 0 0 0.08rem #DA1927;
    border-color: #DA1927;
  }
  &::placeholder{
    color: white;
  }
}

.search-area {
  resize: none;
  height: 2rem;
  overflow: hidden;
  line-height: 2rem;
}
</style>