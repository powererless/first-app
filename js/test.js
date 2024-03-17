"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
	}
}
start();


const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

function rememberMyFilms() {
	for(let i = 0; i < 1; i++) {
		const a = prompt("Один из нескольких просмотренных фильмов?", " ");
		const b = prompt("На сколько оцените его?", "");
    
		if(a != null && b!= null && a != "" && b != "" && a.length < 50){
			personalMovieDB.movies[a] = b;
			console.log("Done");
		} else {
			console.log("Error");
			i--;
		}
    
	} 
}
rememberMyFilms();


function detectPersonalLevel() {
	if (personalMovieDB.count < 10){
		console.log("Вы просмотрели очень мало фильмов");
	} else if(personalMovieDB.count > 10 && personalMovieDB.count < 30) {
		console.log("Вы классический зритель"); 
	} else if (personalMovieDB.count > 30) {
		console.log("ВЫ КИНОМАН!");
	} else{
		console.log("Error");
	}
    
}

detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden ){
		console.log(personalMovieDB);
	}
    
}
showMyDB(personalMovieDB.private);

function writeYourGenres() {
	for(let i = 1; i <= 3; i++) {
		const genre = prompt(`Ваш любимый жанр под номером ${i}`);
		personalMovieDB.genres[i - 1] = genre;
	}

}
writeYourGenres();

