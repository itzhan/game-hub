import UseGenre from "./useGenre";

const findGenre = (genreId?: number) => {
  const { data: genres } = UseGenre();
  genres?.results.find((genre) => genre.id === genreId);
};

export default findGenre;
