import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

type MainWrapperProps = {
  children: ReactNode;
};

const MainWrapper = ({ children }: MainWrapperProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#171717]">
      <Navbar />
      <main className="flex-1">
        {children}
        </main>
      <Footer />
    </div>
  );
};

export default MainWrapper;
