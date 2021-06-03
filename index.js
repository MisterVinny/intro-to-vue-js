/* global Vue */
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Movie Time!",
      movies: ["Alien", "Aliens", "Alien 3", "Inception", "The Matrix", "The Secret Window"],
      newMovie: ""
    };
  },

  methods: {
    createNewMovie: function () {
      this.movies.push(this.newMovie);
      this.newMovie = "";
    }
  }
});