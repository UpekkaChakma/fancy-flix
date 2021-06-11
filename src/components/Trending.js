import { Link } from "react-router-dom";
import MoviesList from '../features/MoviesList/MoviesList';

const Recommends = () => {
  const movies = MoviesList.slice(12, 16);

  return (
    <div>
      <h4>Trending</h4>
      <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-4">
        {movies &&
          movies.map(movie => (
            <div key={movie.id}
              style={{
                marginBottom: '20px',
                marginTop: '-16px',
                transition: `all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s`,
                border: `0px solid grey`,
              }}
              className="transform  overflow-hidden cursor-pointer relative hover:border-white"
            >
              <Link to={`/detail/` + movie.id}>
                <img className="w-full transform duration-500 hover:scale-110" src={movie.cardImg} alt={movie.title} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Recommends;
