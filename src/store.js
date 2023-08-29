import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  list: [],
  search: ""
});

export function resultsList(url) {

  axios.get(url, {
    params: {
      api_key: "e5bd0deb3f973aab2c862f02b32a80f4",
      query: store.search,
    }
  }).then((response) => {
    store.list = response.data.results;
    store.search = "";
  });
}

export function starVote(x) {
  const xFloat = parseFloat(x);
  const ratings = xFloat / 2;

  const starTotal = 5;

  const starPercentage = (ratings / starTotal) * 100;

  const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;

  return starPercentageRounded;
}