import React from "react";

const ListMovie = ({ list }) => {
  return <div>
    {
        list.map(movie=>{
            return (
                <div key={movie.id}>
                    <h2>{movie.original_title}</h2>
                </div>
            )
        })
    }
  </div>;
};

export default ListMovie;
