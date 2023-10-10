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

// let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// let personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// };

// let a = prompt("Один из последних просмотренных фильмов?", "");
// let b = +prompt("На сколько оцените его?", "");
// let c = prompt("Один из последних просмотренных фильмов?", "");
// let d = +prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// ________________________________________________

// ПРАКТИКА, ЧАСТЬ 2

// let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// let personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// };

// let a = prompt("Один из последних просмотренных фильмов?", "");
// let b = +prompt("На сколько оцените его?", "");
// let c = prompt("Один из последних просмотренных фильмов?", "");
// let d = +prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// ________________________________________________

// ПРАКТИКА, ЧАСТЬ 3

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

if (personalMovieDB.count < 11) {
	alert("Просмотрено мало фильмов!");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 31) {
	alert("Вы классный зритель!");
} else if (personalMovieDB.count > 30) {
	alert("Да вы киноман!");
} else {
	alert("Ошибка!");
}

for (let i = 0; i < 2; i++) {
	let a = prompt("Один из последних просмотренных фильмов?", "");
	let b = +prompt("На сколько оцените его?", "");
    
	if (a == "" || b == "" || a == null || b == null || a.length > 50 || b.length > 50) {
		i--;
	} else {
		personalMovieDB.movies[a] = b;
	}
}

// Условия в цикле выше можно прописать от обратного (с помощью оператора "Не" - "!")

console.log(personalMovieDB);










