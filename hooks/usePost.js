import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, header, payload) => {
  const [data1, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const baseURL = process.env.BASE_URL;

  useEffect(() => {
    const postData = async () => {
      setLoading(true);

      await axios
        .post(`${baseURL}${url}`, payload)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.response.data);
          setLoading(false);
        });
    };

    postData();
  }, [url, payload]);

  return { loading, error, data1 };
};

export default useFetch;
