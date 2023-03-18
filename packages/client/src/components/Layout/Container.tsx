import Header from "./Header";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const Container: React.FC<Props> = ({ children }) => (
  <div className="bg-slate-100 dark:bg-gray-900 dark:text-white overflow-x-hidden min-h-screen w-full flex flex-col items-center justify-start">
    <Header />
    {children}
  </div>
);

export default Container;
