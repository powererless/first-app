"use strict";


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

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


if (personalMovieDB.count < 10){
	console.log("Вы просмотрели очень мало фильмов");
} else if(personalMovieDB.count > 10 && personalMovieDB.count < 30) {
	console.log("Вы классический зритель"); 
} else if (personalMovieDB.count > 30) {
	console.log("ВЫ КИНОМАН!");
} else{
	console.log("Error");
}

console.log(personalMovieDB);


