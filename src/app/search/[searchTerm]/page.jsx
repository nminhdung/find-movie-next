import ListMovie from "@/components/ListMovie";
import React from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.API_KEY_TOKEN}`,
  },
};
const SearchPage = async ({ params }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${params.searchTerm}&include_adult=false&language=en-US&page=1`,
    options
  );
  const data = await res.json();
  return (
    <div>
      {data && data.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {data && <ListMovie list={data.results} />}
    </div>
  );
};

export default SearchPage;
