import { useEffect, useState } from "react";

const useApi = (url, cellphone = false) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchApi = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setLoading(false);
        setData(json);
      });
  };

  useEffect(() => {
    fetchApi();
  }, [cellphone]);

  return { loading, data };
};

export default useApi;
