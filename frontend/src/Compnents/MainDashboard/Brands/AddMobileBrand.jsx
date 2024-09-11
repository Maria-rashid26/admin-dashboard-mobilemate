import React from "react";

const AddMobileBrand = ({
  handleAddMobileFormVisible,
  handleSubmitform,
  formData,
  setFormData,
}) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      imageUrl: URL.createObjectURL(e.target.files[0]),
    });
  };
  return (
    <div className="absolute flex py-2 inset-0 border-gray-900 bg-gray-900/90 px-80">
      <div className="bg-gray-200 w-[400px] h-[440px] mx-auto mt-5 rounded-sm border px-9 space-y-4 py-4">
        <div>
          <h1 className="text-center font-bold text-2xl text-gray-600 ">
            Add Brand Details
          </h1>
        </div>
        <form
          action=""
          onSubmit={handleSubmitform}
          className="space-y-5 text-sm"
        >
          <input
            type="text"
            name="brands"
            id=""
            placeholder="please enter mobile brand name"
            onChange={handleChange}
            value={formData.brands}
            className="w-full h-12 capitalize text px-3 text-gray-700 outline-none border-[1px] border-gray-400 rounded-sm bg-white"
          />

          <input
            type="text"
            name="rating"
            placeholder="ratings"
            value={formData.rating}
            onChange={handleChange}
            className="w-full h-12 px-3 text-gray-700 outline-none border-[1px] border-gray-400 rounded-sm bg-white"
          />

          <input
            type="text"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full h-12 px-3 text-gray-700 outline-none border-[1px] border-gray-400 rounded-sm bg-white"
          />

          <input
            type="file"
            name="imageUrl"
            onChange={handleFileChange}
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
      <div>
        <button
          onClick={handleAddMobileFormVisible}
          className=" font-bold w-full bg-white text-gray-800 px-2 py-1 text-sm rounded-sm mt-11"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default AddMobileBrand;
