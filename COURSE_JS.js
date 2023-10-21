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

// let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// let personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// };

// if (personalMovieDB.count < 11) {
// 	alert("Просмотрено мало фильмов!");
// } else if (personalMovieDB.count > 10 && personalMovieDB.count < 31) {
// 	alert("Вы классный зритель!");
// } else if (personalMovieDB.count > 30) {
// 	alert("Да вы киноман!");
// } else {
// 	alert("Ошибка!");
// }

// for (let i = 0; i < 2; i++) {
// 	let a = prompt("Один из последних просмотренных фильмов?", "");
// 	let b = +prompt("На сколько оцените его?", "");
    
// 	if (a == "" || b == "" || a == null || b == null || a.length > 50 || b.length > 50) {
// 		i--;
// 	} else {
// 		personalMovieDB.movies[a] = b;
// 	}
// }

// // Условия в цикле выше можно прописать от обратного (с помощью оператора "Не" - "!")

// console.log(personalMovieDB);

// ________________________________________________

// ПРАКТИКА, ЧАСТЬ 4

// let numberOfFilms;

// function start() {
// 	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// 	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
// 		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
// 	}
// }

// start();

// let personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// };


// Первый вариант:

// function showMyDb() {
// 	if (personalMovieDB.privat == false) {
// 		console.log(personalMovieDB);
// 	} else {
// 		alert("Доступ закрыт!");
// 	}
// }

// showMyDb();

// Второй вариант:

// function showMyDb(hidden) {
// 	if (!hidden) {
// 		console.log(personalMovieDB);
// 	} else {
// 		alert("Доступ закрыт!");
// 	}
// }

// showMyDb(personalMovieDB.privat);

// function detectPersonalLevel() {
// 	if (personalMovieDB.count < 11) {
// 		alert("Просмотрено мало фильмов!");
// 	} else if (personalMovieDB.count > 10 && personalMovieDB.count < 31) {
// 		alert("Вы классный зритель!");
// 	} else if (personalMovieDB.count > 30) {
// 		alert("Да вы киноман!");
// 	} else {
// 		alert("Ошибка!");
// 	}
// }

// detectPersonalLevel();

// function rememberMyFilms() {
// 	for (let i = 0; i < 2; i++) {
// 		let a = prompt("Один из последних просмотренных фильмов?", "");
// 		let b = +prompt("На сколько оцените его?", "");
		
// 		if (a == "" || b == "" || a == null || b == null || a.length > 50 || b.length > 50) {
// 			i--;
// 		} else {
// 			personalMovieDB.movies[a] = b;
// 		}
// 	}
// }

// rememberMyFilms();

// function writeYourGenres() {
// 	let genre;
// 	for (let i = 1; i < 4; i++) {
// 		genre = prompt(`Ваш любимый жанр под номером ${i}`);
// 		personalMovieDB.genres[i - 1] = genre;

// Так же можно записать таким образом:
// personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
// 	}
// }

// writeYourGenres();

// console.log(personalMovieDB);

// ________________________________________________

// ПРАКТИКА, ЧАСТЬ 5

let personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
	
		while (this.count == "" || this.count == null || isNaN(this.count)) {
			this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
		}
	},
	rememberMyFilms: function() {
		for (let i = 0; i < 2; i++) {
			let a = prompt("Один из последних просмотренных фильмов?", "");
			let b = +prompt("На сколько оцените его?", "");
			
			if (a == "" || b == "" || a == null || b == null || a.length > 50 || b.length > 50) {
				i--;
			} else {
				this.movies[a] = b;
			}
		}
	},
	detectPersonalLevel: function() {
		if (this.count < 11) {
			alert("Просмотрено мало фильмов!");
		} else if (this.count > 10 && this.count < 31) {
			alert("Вы классный зритель!");
		} else if (this.count > 30) {
			alert("Да вы киноман!");
		} else {
			alert("Ошибка!");
		}
	},
	showMyDb: function(hidden) {
		if (!hidden) {
			console.log(this);
		} else {
			alert("Доступ закрыт!");
		}
	},
	writeYourGenres: function() {
		for (let i = 1; i < 4; i++) {
			let genre = prompt(`Ваш любимый жанр под номером ${i}`);
			if (genre == "" || genre == null) {
				i--;
			} else {
				this.genres[i - 1] = genre;
			}
		}
		this.genres.forEach(function(item, index) {
			let genresLog = `Любимый жанр ${index + 1} - это ${item}`;
			console.log(genresLog);
		});
	},
	toggleVisibleMyDB: function() {
		if (!this.privat) {
			this.privat = true;
		} else if (this.privat) {
			this.privat = false;
		}
	},
};











