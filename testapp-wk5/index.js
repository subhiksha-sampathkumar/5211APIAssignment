//import required modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
let recipesList = [];
dotenv.config();
const trakt = require("./modules/trakt/api");

//set up Express app
const app = express();
const port = process.env.PORT || 8888;

//define important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//setup public folder
app.use(express.static(path.join(__dirname, "public")));

//PAGE ROUTES
 /*app.get("/", async (request, response) => {
  let movies = await trakt.getTrendingMovies();
  //console.log(movies);
  response.render("index", { title: "Movies", movieList: movies });
}); */
app.get("/", async (request, response) => {
  let movies = await trakt.getRecipiesbying('banana,sugar,flour,cinnamon');
  recipesList = movies;
  //console.log(movies);
  response.render("index", { title: "Recipes", movieList: movies });
  //let nutritionInfo = await trakt.getNutritionbyid(1003464);
  //response.render("ratings", { title: "Calories", movieList: nutritionInfo });
}); 

app.get("/ratings/:id", async (request, response) => {
  //console.log(request.params.id);
  let ratings = await trakt.getMovieRatings(request.params.id);
  let info = await trakt.getMovieSummary(request.params.id);
  response.render("ratings", { title: "Movie ratings", ratings: ratings, movieInfo: info });
});
app.get("/nutrition", async (request, response) => {
  
  let nutritionInfo = await trakt.getNutritionbyid(recipesList.results[1].id);
  
  response.render("ratings", { title: "Nutrition Information", movieList: nutritionInfo, recipe: recipesList.results[1]});
});

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});


