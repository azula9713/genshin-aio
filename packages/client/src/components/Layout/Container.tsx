import { FC, ReactNode } from "react";

import Footer from "./Footer/Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

type Props = {
  children: ReactNode;
};

const Container: FC<Props> = ({ children }) => {
  if (typeof children !== "object") {
    throw new Error("Container component only accepts React children.");
  }

  return (
    <>
      <Sidebar />

      {/* disable scroll if sidebar is open */}

      <div className="bg-gray-900 w-full flex flex-col items-center justify-start">
        <Header />
        <main className="bg-gray-900 text-white overflow-x-hidden min-h-screen w-full flex flex-col items-center justify-start mt-16">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Container;
