import { useEffect, useState } from "react";

const useApi = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      setLoading(false);
      setData(json);
    });

  return data;
};

export default useApi;
