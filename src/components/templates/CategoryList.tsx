import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/admin";
import Loader from "../Loader";

import { deleteCategory } from "../../services/admin";

export default function CategoryList() {
  const { data, isLoading, refetch } = useQuery(["getcategories"], getCategory);
  console.log({ data, isLoading });

  const handeledelete = async (id) => {
    try {
      await deleteCategory(id);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        data?.data.map((i) => (
          <div
            key={i._id}
            className="flex items-center justify-between border-2 rounded-md mt-5 p-1"
          >
            <img src={`${i.icon}.svg`} alt="/" />
            <h3>{i.name}</h3>
            <p>slug {i.slug}</p>
            <button
              onClick={() => handeledelete(i._id)}
              className="bg-red-500 p-1 rounded-md text-white w-[90px]"
            >
              حذف
            </button>
          </div>
        ))
      )}
    </div>
  );
}
