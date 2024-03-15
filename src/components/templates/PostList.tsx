import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/userReactQuerys";
import Loader from "../Loader";
import { sp } from "../../number/replaceNumber";

function PostList() {
  const BASE_URL: string = "http://localhost:3400/";
  const { data, isLoading } = useQuery(["getPosts"], getPosts);
  console.log({ data, isLoading });
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h3>آگهی های شما</h3>
          {data?.data.posts.map((post) => (
            <div
              className="flex flex-col border-2 p-2 rounded-md gap-6 items-start"
              key={post._id}
            >
              <img src={`${BASE_URL}${post.images[0]}`} alt="/" />
              <div>
                <p className="font-bold text-gray-800">{post.options.title}</p>
                <p className="text-gray-500 font-bold">
                  {post.options.content}
                </p>
              </div>
              <div className="flex justify-end w-full gap-5">
                <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
                <p>{sp(post.amount)}تومان</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PostList;
