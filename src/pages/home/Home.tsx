import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

type Props = {};

function Home({}: Props) {
  const query = useQuery("todos", () => {
    return axios.get("http://localhost:8000").then((res) => res.data);
  });
  console.log(query.data);
  return <div>Home</div>;
}

export default Home;
