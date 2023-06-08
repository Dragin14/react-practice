import React from "react";
import { Category } from "../categories-list/CategoriesList";
import { NavLink } from "react-router-dom";

export type Outfit = {
  id: number;
  category: Category;
  photo: string;
  name: string;
};

type Props = { outfits: Outfit[] };

function OutfitsList({ outfits }: Props) {
  return (
    <div>
      <ul className="flex items-center gap-16 flex-wrap justify-center mx-3">
        {outfits.map((outfit) => (
          <li
            key={outfit.id}
            className="relative w-72 h-96 bg-slate-900 hover:opacity-75 transition-opacity"
          >
            <img src={outfit.photo} className="w-full h-full object-cover" />
            <NavLink
              to={`/outfits/${outfit.id}`}
              className={"absolute [content:''] top-0 right-0 bottom-0 left-0"}
            ></NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OutfitsList;
