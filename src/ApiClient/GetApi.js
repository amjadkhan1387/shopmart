// GetApi.js
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Utils/urls";

const GetApi = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    var header_config = {
      headers: {
        // accessToken: localStorage.getItem("accessToken"),
      },
    };
    setLoading(true);
    const fetchData = () => {
      axios.get(BASE_URL + url, header_config).then((dat) => {
        setData(dat.data);
      });
    };
    fetchData();
    setLoading(false);
  }, [url]);

  const reFetch = async () => {
    var header_config = {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    };
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL + url, header_config);
      setData(response.data);
    } catch (err) {
      // Handle errors as needed
      console.error("Error fetching data:", err);
    }
    setLoading(false);
  };

  return { data, loading, reFetch };
};

export default GetApi;
