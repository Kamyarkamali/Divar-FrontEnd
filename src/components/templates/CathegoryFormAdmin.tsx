import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { addCategory } from "../../services/admin";
import { Isate } from "../../types/interface";
import Loader from "../Loader";

function CathegoryFormAdmin() {
  const [form, setForm] = useState<Isate>({
    name: "",
    icon: "",
    slug: "",
  });

  const query = useQueryClient();

  const [show, setShow] = useState<boolean>(false);

  const { mutate, isLoading, data } = useMutation(addCategory, {
    onSuccess: () => query.invalidateQueries("getcategories"),
  });
  // changeHandeler
  const changeHandeler = (e: React.ChangeEvent<HTMLFormElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // submitHandeler
  const submitHandeler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.slug || !form.icon) return;
    mutate(form);
  };

  useEffect(() => {
    if (data?.status) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [data]);

  if (isLoading) return <Loader />;

  return (
    <div>
      {show && (
        <div>
          {data?.status && (
            <p className="bg-green-700 text-white rounded-md text-center p-1">
              فیلد مورد نظر ساخته شد
            </p>
          )}
        </div>
      )}
      <form
        onChange={changeHandeler}
        onSubmit={submitHandeler}
        className="flex flex-col gap-6"
      >
        <h1>دسته بندی</h1>
        <label className="text-gray-500 font-bold" htmlFor="name">
          اسم دسته بندی
        </label>
        <input
          className="outline-none border-[1px] w-[300px] p-1 rounded-md border-gray-500"
          type="text"
          name="name"
          id="name"
        />
        <label className="text-gray-500 font-bold" htmlFor="slug">
          اسلاگ
        </label>
        <input
          className="outline-none border-[1px] w-[300px] p-1 rounded-md border-gray-500"
          type="text"
          name="slug"
          id="slug"
        />
        <label className="text-gray-500 font-bold" htmlFor="icon">
          آیکون
        </label>
        <input
          className="outline-none border-[1px] w-[300px] p-1 rounded-md border-gray-500"
          type="text"
          name="icon"
          id="icon"
        />
        <div className="flex justify-center w-[300px] mt-3">
          <button className="bg-red-500 p-1 w-[120px] rounded-md text-white font-bold">
            ایجاد
          </button>
        </div>
      </form>
    </div>
  );
}

export default CathegoryFormAdmin;
