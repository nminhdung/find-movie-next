import React from "react";
import Card from "./Card";

const ListMovie = ({ list }) => {
  return (
    <div
      className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4
     max-w-6xl mx-auto mt-20"
    >
      {list.map((movie) => {
        return <Card data={movie} key={movie.id} />;
      })}
    </div>
  );
};

export default ListMovie;
