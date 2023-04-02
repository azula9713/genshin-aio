import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  if (typeof children !== "object") {
    throw new Error("Container component only accepts React children.");
  }

  return (
    <div className="bg-gray-900">
      <Header />
      <main className="bg-gray-900 text-white overflow-x-hidden min-h-screen w-full flex flex-col items-center justify-start mt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Container;
