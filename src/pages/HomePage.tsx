//components
import { useQuery } from "@tanstack/react-query";
import { getAllPost } from "../services/userReactQuerys";

import Main from "../components/templates/Main";
import Saidbar from "../components/templates/Saidbar";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";

function HomePage() {
  const { data, isLoading } = useQuery(["postAll"], getAllPost);

  const [text, setText] = useState<boolean>(false);

  useEffect(() => {
    setText(true);
  }, []);

  return (
    <div>
      {text && (
        <div className="w-full bg-red-500 rounded-lg h-[300px] z-[10000]">
          <div className="flex flex-col items-center justify-end gap-4 h-[140px]">
            <h1 className="text-2xl font-bold">توجه</h1>
            <p className="lg:text-xl text-sm w-[1200px] text-center text-gray-200 font-bold">
              این پروژه با بک اند واقعی کدنویسی شده است و هدف صرفا نمایش کدنویسی
              بوده است , فایل بک اند پروژه جدا است و برای اجرا کردن پروژه ابتدا
              بایدفایل بک اند را دانلود کرده و سپس پروژه فرانت اند را اجرا کرد,{" "}
              <span className="text-blue-400 font-bold">
                اگر عکس های پروژه لود نشد امکان دارد سرور پرروژه به مشکل خورده
                باشد
              </span>
            </p>
          </div>
          <div className="flex justify-center mt-9">
            <button className="bg-blue-700 p-2 rounded-md text-white font-bold">
              دانلود بک اند پروژه
            </button>
          </div>
          <div className="flex justify-center mt-9">
            <button
              onClick={() => setText(false)}
              className="bg-gray-500 p-2 rounded-md text-white font-bold"
            >
              متوجه شدم
            </button>
          </div>
        </div>
      )}

      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex mt-4">
          <Saidbar />
          <Main datas={data} />
        </div>
      )}
    </div>
  );
}

export default HomePage;
