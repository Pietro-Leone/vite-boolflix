import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  list: [],
  lists: [],
  search: ""
});

export function resultsList(urls) {
  store.lists = [];

  const requests = urls.map((url) => axios.get(url, {
    params: {
      api_key: "e5bd0deb3f973aab2c862f02b32a80f4",
      query: store.search
    }
  }));
  axios.all(requests).then((responses) => {
    responses.forEach((response) => {
      store.list = response.data.results;
      store.lists.push(...store.list)
      store.search = "";
    })
    console.log(store.lists);
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