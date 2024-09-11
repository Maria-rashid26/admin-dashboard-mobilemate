import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Brands from "./Brands";

const MainMobileComp = () => {
  const [mobiles, setMobiles] = useState([]);
  const apiURL = "https://6283.mobilemate.io/brands";
  const dipatch = useDispatch();
  const [Loading, setLoading] = useState(true);

  const fetchApi = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMobiles(data);
      setLoading(false);
    } catch (error) {
      console.log("something wend wrong");
    }
  };

  useEffect(() => {
    fetchApi(apiURL);
  }, [apiURL]);

  return (
    <div>
      <Brands mobiles={mobiles} Loading={Loading} />
    </div>
  );
};

export default MainMobileComp;
