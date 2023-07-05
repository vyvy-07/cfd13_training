import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AuthenProvider } from "../component/AuthenContext";
import FormModal from "../component/AuthenModal";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Modal from "../component/Modal";
import NavBar from "../component/Navbar";

const MainLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [pathname]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/dest/main.js";
    document.body.appendChild(script);
  }, []);

  return (
    <AuthenProvider>
      {/* Loading */}
      {/*<PageLoading />*/}
      {/*header*/}
      <Header />
      {/* NavBar */}
      <NavBar />
      {/*main*/}
      <Outlet />
      {/* Footer */}
      <Footer />
      {/* Modal*/}
      <Modal />
      {/* Modalogin */}
      <FormModal />
    </AuthenProvider>
  );
};

export default MainLayout;
