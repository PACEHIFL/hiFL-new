import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const baseURL = process.env.BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      await axios(`${baseURL}${url}`)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.response.data);
          setLoading(false);
        });
    };

    fetchData();
  }, [url]);

  return { loading, error, data };
};

export default useFetch;
