import ListMovie from "@/components/ListMovie";
import Image from "next/image";
const API_KEY_TOKEN = process.env.API_KEY_TOKEN;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY_TOKEN}`,
  },
  next: { revalidate: 10000 },
};

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchPopular";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? "/movie/top_rated" : "/movie/popular"
    }?language=en-US&page=1`,
    options
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const listMovie = data.results;
  
  return (
    <div>
      <ListMovie list={listMovie} />
    </div>
  );
}
