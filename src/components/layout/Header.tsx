import logo from "../../images/DivarLogo.png";

// icons
import { IoLocationOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between w-full shadow-md rounded-lg p-3 items-center">
      <div className="flex items-center gap-10">
        <Link to="/">
          <img src={logo} alt="logo" className="w-[60px] rounded-full" />
        </Link>
        <div className="flex items-center gap-1">
          <IoLocationOutline size={23} color="gray" />
          <span className="font-bold text-gray-500">تهران</span>
        </div>
      </div>

      {/* <div>left</div> */}

      <div className="flex gap-6 items-center">
        <div className="flex items-center gap-2">
          <FaRegUser size={20} color="gray" />
          <Link to="/dashboard">
            <span className="text-gray-500 font-bold">دیوار من</span>
          </Link>
        </div>
        <Link to="/auth">
          <button className="bg-red-500 p-2 rounded-md text-white font-bold">
            ثبت آگهی
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
