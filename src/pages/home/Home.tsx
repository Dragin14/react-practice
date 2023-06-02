import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Layout from "../../widgets/layout/Layout";
import CategoriesList from "../../widgets/categories-list/CategoriesList";

type Props = {};

function Home({}: Props) {
  const query = useQuery("categories", () => {
    return axios
      .get("http://localhost:8000/categories/")
      .then((res) => res.data);
  });

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4 text-center text-slate-900 font-serif">
        Outfits categories
      </h1>
      <p className="mb-16 text-center text-slate-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      {query.data ? <CategoriesList categories={query.data} /> : null}
    </Layout>
  );
}

export default Home;
