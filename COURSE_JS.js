/* eslint-disable no-unused-vars */

// ПРАКТИКА, ЧАСТЬ 1

// ПЕРВЫЙ ВАРИАНТ ЗАПИСИ:

// let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// let personalMovieDB = {
// 	count: numberOfFilms,
// 	actors: {},
// 	genres: [],
// 	privat: false,
// };

// let oneOfLastFilms = prompt("Один из последних просмотренных фильмов?", "");
// let ratingOfFilm = +prompt("На сколько оцените его?", "");
// let oneOfLastFilms_2 = prompt("Один из последних просмотренных фильмов?", "");
// let ratingOfFilm_2 = +prompt("На сколько оцените его?", "");

// personalMovieDB["movies"] = {
// 	[oneOfLastFilms]: ratingOfFilm,
// 	[oneOfLastFilms_2]: ratingOfFilm_2,
// };

// console.log(personalMovieDB);

// ВТОРОЙ ВАРИАНТ ЗАПИСИ:

// let obj = {
// 	movies: {},
// 	genres: {},
// 	another: {
// 		trash: {},
// 	},
// };

// let a = prompt("Какой жанр смотрел?");
// let b = +prompt("Поставь оценку жанру");

// obj["another"]["trash"][a] = b;

// console.log(obj);

// ТРЕТИЙ ВАРИАНТ ЗАПИСИ:

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

let a = prompt("Один из последних просмотренных фильмов?", "");
let b = +prompt("На сколько оцените его?", "");
let c = prompt("Один из последних просмотренных фильмов?", "");
let d = +prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);












