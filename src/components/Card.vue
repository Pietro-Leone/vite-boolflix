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
  },
  data() {
    return {
      hover: false,
    }
  },
  methods: {
    hoverFN() {
      setTimeout(() => {
        this.hover = true;
      }, 1000);
    }
  }
}
</script>

<template>
  <div class="card h-100" @mouseover="hover = true" @mouseleave="hover = false">
    <img :src="card.poster_path === null ? `` : `http://image.tmdb.org/t/p/w500/${card.poster_path}`" class="card-img-top"
      :alt="card.title">
    <div class="card-body" v-if="hover">
      <h5 class="card-title">{{ card.title }}</h5>
      <p class="card-title">{{ card.original_title }}</p>
      <lang-flag :iso="card.original_language" />
      <p class="card-text">{{ card.vote_average }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  min-height: 159px;
  max-height: 159px;
  background-color: black;
  color: white;
  font-size: x-large;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
}

.card {
  max-width: 330px;
  min-width: 240px;
  aspect-ratio: 16/9;
  cursor: pointer;

  .card-body {
    background-color: black;
    border-radius: var(--bs-card-border-radius);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    color: white;
    width: 100%;
  }

  &:hover {
    transition: transform .5s;
    transform: scale(1.2);
    position: absolute;
    z-index: 1;
    top: -114px;
    height: fit-content !important;

  }

}
</style>