import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const AddNewsForm = ({
  handleNewsFormVisible,
  handleSubmitNews,
  formData,
  setFormData,
}) => {
  // const handleChange = (e)=>{
  //   setFormData(formData[e.target.name] =[e.target.value])
  // }

  // const handleChange = (e) => {
  //   const { name, value, files } = e.target;
  //   if (name === "image1" || "image2") {
  //     // Handle multiple files
  //     setFormData({
  //       ...formData,
  //       [name]: files, // store the FileList object
  //     });
  //   } else {
  //     setFormData({
  //       ...formData,
  //       [name]: value,
  //     });
  //   }
  // };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image1: URL.createObjectURL(e.target.files[0]),
    });
  };
 
  return (
    <div className="bg-white w-[700px]  h-[500px]  mx-auto  rounded-sm px-5 py-1">
      <button onClick={handleNewsFormVisible} className="pt-2" title="Go back">
        <IoMdArrowRoundBack />
      </button>
      <h1 className="ml-48 font-semibold text-2xl ">Add News Details</h1>

      <form
        action=""
        className="space-y-5 text-sm py-7"
        onSubmit={handleSubmitNews}
      >
        <input
          value={formData.brand}
          type="text"
          name="brand"
          onChange={handleChange}
          placeholder="please enter mobile brand name"
          className="w-full h-12 capitalize text px-3 text-gray-700 outline-none border-[1px] border-gray-400 rounded-sm bg-white"
        />

        <input
          value={formData.title}
          type="text"
          name="title"
          onChange={handleChange}
          className="w-full h-12 px-3 text-gray-700 outline-none border-[1px] border-gray-400 rounded-sm bg-white"
        />

        <textarea
          value={formData.description}
          type="text"
          name="description"
          rows={4}
          onChange={handleChange}
          placeholder="Please add description about news"
          className="resize-none w-full  px-3 pt-2 text-gray-700 outline-none border-[1px] border-gray-400 rounded-sm bg-white"
        />

        <input
          onChange={handleFileChange}
          type="file"
          multiple
          name="image1"
          placeholder="please enter publisher "
          className=" text-sm text-gray-700 outline-none  rounded-sm "
        />

        <button
          type="submit"
          className="w-full h-12 mt-4 text-sm border-gray-400 rounded-sm bg-gray-800 text-white hover:bg-gray-900 duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewsForm;
