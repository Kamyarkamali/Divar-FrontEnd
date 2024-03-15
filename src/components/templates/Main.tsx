import { FC } from "react";
import { Datas } from "../../types/interface";

const Main: FC<Datas> = ({ datas }) => {
  console.log(datas);
  const BASE_URL: string = " http://localhost:3400";
  return (
    <div className="flex justify-center w-full gap-5 flex-wrap">
      {datas.data.posts.map((i) => (
        <div key={i._id} className="border-2 p-1 w-[300px] h-[300px]">
          <img src={`${BASE_URL}${i.images[0]}`} alt="/" />
          <p>{i.options.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Main;
