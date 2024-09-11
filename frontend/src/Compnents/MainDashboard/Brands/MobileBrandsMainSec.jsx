import React, { useEffect, useState } from "react";
import TotalMobileBrands from "./TotalMobileBrands";
import { useDispatch, useSelector } from "react-redux";
import { setMobileBrands } from "./MobileBrandsSlice";
import AddMobileBrand from "./AddMobileBrand";

const MobileBrandsMainSec = () => {
  const [addMobileForm, setAddMobileForm] = useState(false);
  const [formData, setFormData] = useState({
    brands: "",
    imageUrl: "",
    rating: "",
    quantity: "",
  });
  const MobileBrandsApi = "https://6283.mobilemate.io/brands";
  const mobileBrands = useSelector((state) => state.mobileBrands.mobileBrands);
  const dispatch = useDispatch();


  const fetchMobileBrands = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      dispatch(setMobileBrands(data));
    } catch (error) {
      console.log("no data is found");
    }
  };


  useEffect(() => {
    fetchMobileBrands(MobileBrandsApi);
  }, [dispatch]);
  

  
  const handleAddMobileFormVisible = () => {
    setAddMobileForm(!addMobileForm);
  };

  const handleSubmitform = (e) => {
    e.preventDefault();
    setAddMobileForm(!addMobileForm);
    const newBrand = {
      ...formData,
      imageUrl: formData.imageUrl, 
    };
    dispatch(setMobileBrands([newBrand , ...mobileBrands]));
    setFormData({
      brands: "",
      imageUrl: "",
      rating: "",
      quantity: "",
    });

    setAddMobileForm(false);
  };


  return (
    <div>
      {addMobileForm && (
        <AddMobileBrand
          handleAddMobileFormVisible={handleAddMobileFormVisible}
          handleSubmitform={handleSubmitform}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      <TotalMobileBrands
        handleAddMobileFormVisible={handleAddMobileFormVisible}
        mobileBrands={mobileBrands}
      />
    </div>
  );
};

export default MobileBrandsMainSec;




