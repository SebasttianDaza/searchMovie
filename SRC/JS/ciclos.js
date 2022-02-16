//*Obetener Poster Path dinamicamente

export function getPosterPath(movie) {
  const arrPoster = [];
  const imgKey = "https://image.tmdb.org/t/p/w500/";

  for (let i = 0; i < movie.length; i++) {
    arrPoster.push(imgKey + movie[i].poster_path);
  }

  return arrPoster;
}
