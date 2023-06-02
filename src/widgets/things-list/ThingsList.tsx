import React from "react";

export type Thing = {
  id: number;
  outfit: {
    id: number;
    category: {
      id: number;
      name: string;
      photo: string;
      url: string;
    };
    photo: string;
    name: string;
  };
  photo: string;
  name: string;
};

type Props = { things: Thing[] };

function ThingsList({ things }: Props) {
  return (
    <div className="">
      <ul className="scrollbar-thin scrollbar-thumb-blue-500 px-16 gap-16 overflow-x-scroll snap-x snap-mandatory flex w-full">
        {things.map((thing) => (
          <li
            key={thing.id}
            className="relative w-1/2 bg-slate-900 flex-grow-0 flex-shrink-0 basis-72 inline-block snap-center"
          >
            <img src={thing.photo} className="w-full h-full object-cover" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ThingsList;
