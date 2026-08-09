import React, { useEffect } from "react";
import useGetData from "./Data/useGetData";

const Module1 = () => {
  const [data, Error, , getData] = useGetData();

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("data fetched", data);
  console.log("error", Error);

  return <div>Module1</div>;
};

export default Module1;
