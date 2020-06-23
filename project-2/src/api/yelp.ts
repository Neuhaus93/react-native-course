import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 0JdcnoyqXk_O-L0LMwRJ91LjpE10zoJgS7wG6YKAM7pBxbVabIb5N2DQ8WjtW75f7eBKlMbkJTnG8Ux9c0FyHChh3gLyA6GvhksqoM0noFdtQ8NVRI8UCb7uKILvXnYx",
  },
});
