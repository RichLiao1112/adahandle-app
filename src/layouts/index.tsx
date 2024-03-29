import React, { FC, useEffect, useState } from "react";

import Header from "../components/header";
import { usePolicyID } from "../lib/helpers/env";

import '../styles/global.css';

const Layout: FC = ({ children }): JSX.Element => {
  const [mintPage, setMintPage] = useState<boolean>(false);
  const policyID = usePolicyID();

  useEffect(() => {
    setMintPage(window.location.pathname.includes('mint'));
  });

  return (
    <>
      <Header showMint={!mintPage} className="bg-dark-100 text-dark-400 text-gray-900" />
      <div className="flex flex-col min-h-screen font-sans bg-dark-100 text-dark-400 text-gray-900 overflow-hidden">

        <main className="w-full px-4 pt-12 mx-auto md:px-8 md:pt-16">
          {children}
        </main>

        <footer className="bg-dark-100 pt-16 text-dark-350 text-center">
          &copy; ADA Handle • {policyID}
        </footer>
      </div>
    </>
  );
}

export default Layout;
