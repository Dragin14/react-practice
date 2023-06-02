import React, { useMemo } from "react";
import Layout from "../../widgets/layout/Layout";
import { useQuery } from "react-query";
import axios from "axios";
import OutfitsList, { Outfit } from "../../widgets/outfits-list/OutfitsList";
import { useSearchParams } from "react-router-dom";
import { Category } from "../../widgets/categories-list/CategoriesList";

type Props = {};

function Outfits({}: Props) {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("category");

  const categoryQuery = useQuery({
    queryKey: `category-${categoryId}`,
    queryFn: () => {
      return axios
        .get<Category>(`http://localhost:8000/categories/${categoryId}/`)
        .then((res) => res.data);
    },
    enabled: Boolean(categoryId),
  });

  const outfitsQuery = useQuery("outfits", () => {
    return axios
      .get<Outfit[]>("http://localhost:8000/outfits/")
      .then((res) => res.data);
  });

  const filteredOutfits = useMemo(() => {
    if (!outfitsQuery.data) {
      return [];
    }
    if (!categoryId || !+categoryId) {
      return outfitsQuery.data;
    }
    return outfitsQuery.data.filter(
      (outfit) => outfit.category.id === +categoryId
    );
  }, [outfitsQuery.data, categoryId]);

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4 text-slate-900 text-center font-serif">
        {categoryQuery.data?.id ? categoryQuery.data.name : "Check them out!"}
      </h1>

      {categoryQuery.data?.id ? null : (
        <p className="mb-16 text-center text-slate-800">
          All outfits are put together
        </p>
      )}
      {outfitsQuery.data ? <OutfitsList outfits={filteredOutfits} /> : null}
    </Layout>
  );
}

export default Outfits;
