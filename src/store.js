import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  risultati: [],
  search: ""
});

export function resultsList() {

  const url = "https://api.themoviedb.org/3/search/movie";

  axios.get(url, {
    params: {
      api_key: "e5bd0deb3f973aab2c862f02b32a80f4",
      query: store.search,
    }
  }).then((response) => {
    store.risultati = response.data.results;
    console.log(store.risultati);
    store.search = "";
  });
}