import axios from "axios";

const KEY = "AIzaSyDIgOEv_gwQlwrGh0TZAXwJKVQFWg1dXZE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
