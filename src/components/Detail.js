import { useParams } from "react-router-dom";
import MovieList from '../features/MoviesList/MoviesList';
const Detail = () => {
  const { id } = useParams();
  const foundedMovie = MovieList.find(movie => movie.id === Number(id));

  return (
    <div>
      <img className="w-full filter h-screen z-0" alt={foundedMovie.title} src={foundedMovie.backgroundImg} />
      <div className="z-10 absolute top-20 left-12 2xl:top-40">
        <img className="w-72" alt={foundedMovie.title} src={foundedMovie.titleImg} />
        <div className="flex flex-row my-4">
          <div className="transform duration-500 cursor-pointer flex flex-row justify-center items-center w-24 bg-transparent rounded lg border-2 border-white mr-4 pr-2 hover:scale-105">
            <img src="/images/play-icon-white.png" alt="" />
            <span>Play</span>
          </div>
          <div className="flex flex-row justify-center items-center w-24 bg-transparent rounded lg border-2 border-white mr-4 pr-2 transform duration-500 cursor-pointer hover:scale-105">
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </div>
          <div>
            <img src="/images/group-icon.png" alt="" />
          </div>
        </div>
        <h1 className="text-2xl">{foundedMovie.subTitle}</h1>
        <div className="md:w-1/2">{foundedMovie.description}</div>
      </div>
    </div>
  );
};

export default Detail;
