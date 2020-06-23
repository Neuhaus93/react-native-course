import { useEffect, useState } from "react";
import yelp from "../api/yelp";

import { Result } from "../interfaces/Interfaces";

export default () => {
  const [results, setResults] = useState<Result[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm: string) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term: searchTerm,
          location: "san jose",
          limit: 50,
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong :(");
    }
  };

  useEffect(() => {
    searchApi("italiano");
  }, []);

  return [searchApi, results, errorMessage] as const;
};
