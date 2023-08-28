<script>
import LangFlag from 'vue-lang-code-flags';
export default {
  components: {
    LangFlag,
  },
  props: {
    card: {
      type: Object,
      required: true,
    }
  }
}
</script>

<template>
  <div class="card h-100" style="width: 18rem;">
    <img :src="card.poster_path === null ? `` : `http://image.tmdb.org/t/p/w500/${card.poster_path}`" class="card-img-top"
      :alt="card.title">
    <div class="card-body">
      <h5 class="card-title">{{ card.title }}</h5>
      <p class="card-title">{{ card.original_title }}</p>
      <lang-flag :iso="card.original_language" />
      <p class="card-text">{{ card.vote_average }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  min-height: 429px;
  background-color: black;
  color: white;
  font-size: x-large;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>