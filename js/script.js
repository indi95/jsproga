
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов", "");
const b = prompt("На сколько оцените его", "");

personalMovieDB.movies[a] = b;

console.log(personalMovieDB);