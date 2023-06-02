import clsx from "clsx";
import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  href: string;
  children: ReactNode;
};

function HeaderLink({ children, href }: Props) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        clsx(
          "rounded-full px-2 py-1 hover:bg-slate-200 transition-colors duration-200",
          {
            "text-blue-500": isActive,
            // "text-slate-700": !isActive,
          }
        )
      }
    >
      {children}
    </NavLink>
  );
}

export default HeaderLink;
