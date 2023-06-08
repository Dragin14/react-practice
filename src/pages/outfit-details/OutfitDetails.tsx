import axios from "axios";
import React, { useMemo } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Outfit } from "../../widgets/outfits-list/OutfitsList";
import Layout from "../../widgets/layout/Layout";
import ThingsList, { Thing } from "../../widgets/things-list/ThingsList";

type Props = {};

function OutfitDetails({}: Props) {
  const { id } = useParams<{ id: string }>();

  const thingsQuery = useQuery("things", () => {
    return axios
      .get<Thing[]>("http://localhost:8000/things/")
      .then((res) => res.data);
  });

  const outfitQuery = useQuery(`outfits-${id}`, () => {
    return axios
      .get<Outfit>(`http://localhost:8000/outfits/${id}/`)
      .then((res) => res.data);
  });

  const filteredThings = useMemo(() => {
    if (!thingsQuery.data || !outfitQuery.data) {
      return [];
    }

    return thingsQuery.data.filter(
      (thing) => thing.outfit.id === outfitQuery.data.id
    );
  }, [thingsQuery.data, outfitQuery.data]);

  return (
    <Layout>
      <h1 className="text-center text-2xl font-bold mb-4">
        {outfitQuery.data?.name}
      </h1>
      <div className="flex flex-col sm:flex-row items-center w-full justify-center">
        <div className="w-full max-w-[400px] pr-10">
          <img
            src={outfitQuery.data?.photo}
            className="w-full h-full object-cover"
          />
        </div>
        {outfitQuery.data ? <ThingsList things={filteredThings} /> : null}
      </div>
    </Layout>
  );
}

export default OutfitDetails;
