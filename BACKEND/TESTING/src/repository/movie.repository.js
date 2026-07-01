const Movie = require("../models/movie.model");

const getAllMovies = async () => {
	const movies = await Movie.find();
	return movies;
};

const getMovieById = async (id) => {
	const movie = await Movie.findById(id);
	return movie;
};

const createMovie = async (data) => {
	const newMovie = new Movie(data);
	await newMovie.save();
	return newMovie;
};

const editMovie = async (id, data) => {
	const movie = await Movie.findByIdAndUpdate(id, data);
	return movie;
};

const deleteMovie = async (id) => {
	const movie = await Movie.findByIdAndDelete(id);
	return movie;
};

module.exports = {
	getAllMovies,
	getMovieById,
	createMovie,
	editMovie,
	deleteMovie,
};
