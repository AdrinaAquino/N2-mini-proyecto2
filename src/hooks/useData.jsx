import { useEffect, useState } from "react";
import axios from "axios";

export default function useData(url) {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function getData() {
    try {
      setLoading(true);
      const { data } = await axios.get(url);
      setResponse(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getData();
  }, [url]);
  return {
    response,
    error,
    loading,
  };
}
