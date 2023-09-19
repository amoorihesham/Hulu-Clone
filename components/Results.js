import Thumbnail from "@/components/Thumbnail";
import FlipMove from "react-flip-move";

function Results({ movies }) {
  const allMovies = movies.results;
  return (
    <div
      className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 
    3xl:grid-cols-4"
    >
      {allMovies?.map((movie) => (
        <Thumbnail key={movie.id} movies={movie} />
      ))}
    </div>
  );
}

export default Results;
