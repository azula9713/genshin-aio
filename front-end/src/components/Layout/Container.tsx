import Header from "./Header";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const Container: React.FC<Props> = ({ children }) => (
  <div className="bg-white dark:bg-gray-900 dark:text-white overflow-x-hidden min-h-screen">
    <Header />
    {children}
  </div>
);

export default Container;
