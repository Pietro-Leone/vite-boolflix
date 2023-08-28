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
    console.log(store.list);
    store.search = "";
  });
}