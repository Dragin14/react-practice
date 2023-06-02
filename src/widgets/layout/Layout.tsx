import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import HeaderLink from "./HeaderLink";

type Props = { children: ReactNode };

function Layout({ children }: Props) {
  return (
    <div className="w-screen">
      <header className="p-4 mb-8">
        <nav>
          <ul className="flex items-center justify-center gap-12">
            <li>
              <HeaderLink href="/">Home</HeaderLink>
            </li>
            <li>
              <HeaderLink href="/outfits/">Outfits</HeaderLink>
            </li>
            <li>
              <HeaderLink href="/contacts/">Contacts</HeaderLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex justify-center flex-col px-16 w-full">
        {children}
      </main>
    </div>
  );
}

export default Layout;
