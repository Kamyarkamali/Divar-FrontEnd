import { FC } from "react";
import { Ichildren } from "../../types/interface";

// components layout-header and footer
import Header from "./Header";
import Footer from "./Footer";

const Layout: FC<Ichildren> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-[900px]">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
