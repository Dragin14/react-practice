import React from "react";
import { NavLink } from "react-router-dom";

export type Category = {
  id: number;
  name: string;
  photo: string;
};

type Props = { categories: Category[] };

function CategoriesList({ categories }: Props) {
  return (
    <div>
      <ul className="flex items-center gap-16 flex-wrap justify-center">
        {categories.map((category) => (
          <li
            key={category.id}
            className="relative w-72 h-96 bg-slate-900 hover:opacity-75 transition-opacity"
          >
            <img src={category.photo} className="w-full h-full object-cover" />
            <NavLink
              to={`/outfits?category=${category.id}`}
              className={"absolute [content:''] top-0 right-0 bottom-0 left-0"}
            ></NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesList;
