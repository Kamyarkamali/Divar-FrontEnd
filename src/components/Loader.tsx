import { ColorRing } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-[400px]">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
}

export default Loader;
