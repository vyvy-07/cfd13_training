import { useEffect, useState } from "react";

const useQuery = (promise, dependency = []) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});
  useEffect(() => {
    fetchData();
  }, dependency);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await promise();
      //console.log("res", res);
      setData(res?.data?.data || []);
    } catch (error) {
      setError(error);
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
  };
};
export default useQuery;
