<script>
import LangFlag from 'vue-lang-code-flags';
import { starVote } from '../store';
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
    starVote,
  }
}
</script>

<template>
  <div class="card h-100" @mouseover="hover = true" @mouseleave="hover = false">
    <img :src="card.poster_path === null ? `` : `http://image.tmdb.org/t/p/w500/${card.poster_path}`" class="card-img-top"
      :alt="card.title ? card.title : card.name">
    <div class="card-body h-100" v-if="hover">
      <h5 class="card-title">{{ card.title ? card.title : card.name }}</h5>
      <p class="card-title">{{ card.original_title ? card.original_title : card.original_name }}</p>
      <p class="card-title">{{ card.media_type ? card.media_type : "" }}</p>
      <lang-flag :iso="card.original_language" />
      <!-- <p class="card-text">{{ card.vote_average }}</p> -->
      <div>
        <div class="stars-outer">
          <div class="stars-inner" :style="`width: ${starVote(card.vote_average)};`"></div>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  background-color: black;
  color: white;
  font-size: x-large;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: fill;
  object-position: center;
  height: 345px;
}

.card {
  overflow: hidden;
  min-width: 230px;
  min-height: 345px;
  cursor: pointer;

  .card-body {
    background-color: black;
    opacity: .8;
    border-radius: var(--bs-card-border-radius);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    color: white;
    top: 0;
    width: 100%;
    position: absolute;
  }

  &:hover {
    z-index: 1;
    height: fit-content !important;

  }

  //
  .stars-outer {
    display: inline-block;
    position: relative;
    font-family: FontAwesome;
  }

  .stars-outer::before {
    content: "\f006 \f006 \f006 \f006 \f006";
  }

  .stars-inner {
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
  }

  .stars-inner::before {
    content: "\f005 \f005 \f005 \f005 \f005";
    color: #f8ce0b;
  }

  //

}
</style>