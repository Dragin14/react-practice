import React from "react";
import Layout from "../../widgets/layout/Layout";

type Props = {};

function Contacts({}: Props) {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4 text-center text-slate-900 font-serif">
        About us
      </h1>
      <p className="mb-16 text-center text-slate-800">
        Frontend developer: <b>Dragin Anatoliy</b>
        <p className="mb-16 text-center text-slate-800">
          Built with TypeScript, React & Vite
        </p>
      </p>
      <p className="mb-16 text-center text-slate-800">
        Backend developers: <b>Ershov Anatoliy</b>, <b>Gorba Ivan</b>
        <p className="mb-16 text-center text-slate-800">
          Built with Python, Django & Rest API
        </p>
      </p>
    </Layout>
  );
}

export default Contacts;
