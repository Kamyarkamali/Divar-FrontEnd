import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/admin";
import React, { useState } from "react";
import { getCookie } from "../../utils/cookies";
import axios from "axios";

function AddDashboard() {
  const [form, setForm] = useState<object>({
    title: "",
    content: "",
    category: "",
    city: "",
    amount: null,
    images: null,
  });

  const { data } = useQuery(["getcategories"], getCategory);

  // /clickHandeler and submitForm
  const clickHandeler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i in form) {
      formData.append(i, form[i]);
      const token = getCookie("accessToken");
      axios
        .post("http://localhost:3400/post/create", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `bearer ${token}`,
          },
        })
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    }
  };

  const changeHandeler = (e: React.FormEvent<HTMLFormElement>) => {
    const name = e.target.name;
    if (name !== "images") {
      setForm({ ...form, [name]: e.target.value });
    } else {
      setForm({ ...form, [name]: e.target.files[0] });
    }
  };

  return (
    <form onChange={changeHandeler} className="flex flex-col gap-6">
      <label htmlFor="title">عنوان</label>
      <input
        className="w-[300px] border rounded-md p-1 outline-none text-gray-500"
        type="text"
        name="title"
        id="title"
      />
      <label htmlFor="content">توضیحات</label>
      <textarea
        style={{ resize: "none" }}
        className="w-[300px] border rounded-md p-1 outline-none text-gray-500"
        name="content"
        id="content"
      />
      <label htmlFor="city">شهر</label>
      <input
        className="w-[300px] border rounded-md p-1 outline-none text-gray-500"
        type="text"
        name="city"
        id="city"
      />
      <label htmlFor="amount">قیمت</label>
      <input
        className="w-[300px] border rounded-md p-1 outline-none text-gray-500"
        type="number"
        name="amount"
        id="amount"
      />
      <label htmlFor="category" id="category">
        دسته بندی
      </label>
      <select
        className="bg-gray-400 w-[200px] outline-none p-1 rounded-md text-black font-bold"
        name="category"
        id="category"
      >
        {data?.data.map((i) => (
          <option key={i._id} value={i._id}>
            {i.name}
          </option>
        ))}
      </select>
      <label htmlFor="images">عکس</label>
      <input type="file" name="images" id="images" className="cursor-pointer" />
      <div className="flex justify-center w-[300px]">
        <button
          onClick={clickHandeler}
          className="bg-red-400 w-[130px] p-1 rounded-md text-white font-bold"
        >
          ارسال
        </button>
      </div>
    </form>
  );
}

export default AddDashboard;
