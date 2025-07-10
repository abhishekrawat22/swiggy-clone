import { Footer, Header } from "../components";

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main className="w-full mx-auto max-w-7xl">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
