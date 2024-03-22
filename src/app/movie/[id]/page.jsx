import Image from "next/image";
import React from "react";
const API_KEY_TOKEN = process.env.API_KEY_TOKEN;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY_TOKEN}`,
  },
};

export default async function MoviePage({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}`,
    options
  );
  const data = await res.json();
  return (
    <div className="max-w-6xl mx-auto mt-16">
      <div className="p-4 flex flex-col md:flex-row gap-8 items-center">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.poster_path
          }`}
          width={500}
          height={300}
          alt="poster"
          className="rounded-lg max-w-full h-full"
        />
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">{data.title || data.name}</h2>
          <div className="text-lg flex">
            <span className="font-semibold">Genres:&nbsp;</span>
            <div className="flex items-center">
              {data?.genres.length > 0 &&
                data.genres.map((genre, index) => {
                  if (index === data.genres.length - 1) {
                    return <span key={genre.id}>{genre.name}</span>;
                  } else {
                    return <span key={genre.id}>{genre.name + ","}&nbsp;</span>;
                  }
                })}
            </div>
          </div>
          <p className="text-lg">
            <span className="font-semibold">Overview:&nbsp;</span>
            {data.overview}
          </p>
          <p className="">
            <span className="font-semibold">Date Released:&nbsp;</span>
            {data.release_date}
          </p>
          <div className=" flex gap-4">
            <p>
              <span className="font-semibold">Points:&nbsp;</span>
              {data.vote_average.toFixed(1)}
            </p>
            <p className="">
              <span className="font-semibold">Rating:&nbsp;</span>
              {data.vote_count.toLocaleString('en-US')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
