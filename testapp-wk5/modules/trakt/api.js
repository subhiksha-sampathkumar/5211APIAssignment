const trakt = "https://api.trakt.tv"; //base URL for any Trakt API requests

/*
 * Functions for Trakt API requests.
 */
//------------------------------------------------------------------------//

//-------------------------------------------------------------------------//
async function getRecipiesbying(ingred) {
  
  let basicAPI = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=';
  let key = '38cbb2d17f2b452ea8aaee669e784acb';
  let query1 = '&includeIngredients=';
  let query2 = '&diet=vegetarian&number=5';
  let reqUrl = basicAPI + key + query1 + ingred + query2;
  
  var response = await fetch(
    reqUrl,
    {
      method: "GET",
      headers: {
        
        //'x-api-key': process.env.SPOONACULAR_CLIENT_ID,
        //'X-api-Host': 'api.spoonacular.com'
      }
    }
  );
  return await response.json();
}
//------------------------------------------------------------------------//

//-------------------------------------------------------------------------//
async function getNutritionbyid(id) {
  
  let basicAPI = 'https://api.spoonacular.com/recipes/';
  let basicAPI2 = '/nutritionWidget.json?apiKey=';
  let key = '38cbb2d17f2b452ea8aaee669e784acb';
  //let query1 = '&includeIngredients=';
  //let query2 = '&diet=vegetarian&number=5';
  let reqUrl = basicAPI + id + basicAPI2 + key; 
  
  var response = await fetch(
    reqUrl,
    {
      method: "GET",
      headers: {
        
        //'x-api-key': process.env.SPOONACULAR_CLIENT_ID,
        //'X-api-Host': 'api.spoonacular.com'
      }
    }
  );
  return await response.json();
}
//------------------------------------------------------------------------//

//------------------------------------------------------------------------//
async function getTrendingMovies() {
  let reqUrl = `${trakt}/movies/trending`;
  var response = await fetch(
    reqUrl,
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": 2,
        "trakt-api-key": process.env.TRAKT_CLIENT_ID
      }
    }
  );
  return await response.json();
}

async function getMovieRatings(id) {
  let reqUrl = `${trakt}/movies/${id}/ratings`;
  let response = await fetch(
    reqUrl,
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": 2,
        "trakt-api-key": process.env.TRAKT_CLIENT_ID
      }
    }
  );
  return await response.json(); //convert response to JSON and return it
}

async function getMovieSummary(id) {
  let reqUrl = `${trakt}/movies/${id}`;
  let response = await fetch(
    reqUrl,
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": 2,
        "trakt-api-key": process.env.TRAKT_CLIENT_ID
      }
    }
  );
  return await response.json();
}

async function getPopularShows() {
  let reqUrl = `${trakt}/shows/popular?page=1&limit-15`;
  var response = await fetch(
    reqUrl,
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": 2,
        "trakt-api-key": process.env.TRAKT_CLIENT_ID,
      }
    }
  );
  return await response.json();
}

module.exports = {
  getRecipiesbying,
  getNutritionbyid,
  getTrendingMovies,
  getPopularShows,
  getMovieRatings,
  getMovieSummary
  };