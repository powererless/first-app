"use strict";


//const result = confirm("Is Everything OK?");
//console.log(result);



//const answer = +prompt("You have 18+?", "10");
//console.log(answer + 5);



//const answers = [];
//
//answers[0] = prompt("Как тебя зовут?", "");
//answers[1] = prompt("Сколько тебе лет?", "");
//
//document.write(answers);

//---------------------------

//const cat = "mouse";
//console.log(`https://blitz.com/${cat}/5`);

//console.log("https://blitz.com/" + cat);

//----------------------------------

//const name = [];
//name[0] = prompt("Как тебя зовут?"); 
//alert(`Здравствуйте ${name}`);


//-----------------------------------


//incr++; Если знак стоит до это префиксное значение, если после то постфиксное значение
//dincr--; В консоль логе эти операторы работает только в префиксном значении!!!!

// Знак равенства (=) это присваивание!
// && - и, || - или, ! - отрицание 



const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

const a = prompt("Один из нескольких просмотренных фильмов?", " ");
const b = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;

console.log(personalMovieDB);