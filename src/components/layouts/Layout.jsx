import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { useRef, createContext } from "react";

export const LayoutContext = createContext({})

export const Layout = () => {
  const expRef = useRef(null);
  const skillRef = useRef(null);
  const aboutRef = useRef(null);
  const eduRef = useRef(null);
  // const skillRef = useRef(null)

  return (
    <div className="container">
      <div className="tpc"></div>
      <div className="tpd">
        <div className="wrapper">
          <LayoutContext.Provider value={{ expRef ,skillRef,aboutRef,eduRef}}>
            <Header />
            <Outlet />
            <Footer />
          </LayoutContext.Provider>
        </div>
      </div>
    </div>
  );
};
