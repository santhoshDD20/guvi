class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    toString() {
        return Title: ${this.title}, Studio: ${this.studio}, Rating: ${this.rating};
    }
static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}
const movie1 = new Movie("Inception", "Warner Bros.", "PG-13");
const movie2 = new Movie("The Lion King", "Disney", "PG");
const movie3 = new Movie("Finding Nemo", "Pixar", "PG");
const movie4 = new Movie("The Matrix", "Warner Bros.", "R");

const movies = [movie1, movie2, movie3, movie4];
const pgMovies = Movie.getPG(movies);

console.log(pgMovies);

// Create an instance of the Movie class
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(casinoRoyale.toString());