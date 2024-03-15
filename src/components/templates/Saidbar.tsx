import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/admin";

function Saidbar() {
  const { data } = useQuery(["getcategories"], getCategory);

  return (
    <div className="border-2 w-[200px] rounded-md p-2 h-[500px] flex flex-col items-center gap-4">
      <h3>دسته بندی ها</h3>
      <ul>
        {data?.data.map((i) => (
          <li
            key={i._id}
            className="mt-9 text-center text-gray-500 font-bold cursor-pointer"
          >
            {i.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Saidbar;
