//const fetch = require('node-fetch');
/*
 * Functions for Trakt API requests.
 */




async function getNutritionbyid(id) {
  
  let basicAPI = 'https://api.spoonacular.com/recipes/';
  let basicAPI2 = '/nutritionWidget.json?apiKey=';
  let key = process.env.SPOONACULAR_CLIENT_ID;
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
async function getRecipiesbyingrapid(ingred) {
  
  //let basicAPI = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=';
  //let key = process.env.RAPIDAPI_KEY;
  //let query1 = '&includeIngredients=';
  //let query2 = '&diet=vegetarian&number=5';
  //let reqUrl = basicAPI + key +query1 + ingred + query2;
  reqUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?includeIngredients=apple,flour,sugat&diet=vegetarian&number=5';
  var response = await fetch(
    reqUrl,
    {
      method: "GET",
      headers: {
        
        'X-RapidAPI-Key': '3d86433ca2msh17eb7eb047b8770p1d874cjsne158a68bfc39',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    }
  );
  return await response.json();
}
async function getRecipiesbying(ingred,num) {
  
  let basicAPI = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=';
  let key = process.env.SPOONACULAR_CLIENT_ID;
  let query1 = '&includeIngredients=';
  let query2 = '&diet=vegetarian&number=';
  let reqUrl = basicAPI + key +query1 + ingred + query2 + num;
  
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




module.exports = {
  getRecipiesbying,
  getRecipiesbyingrapid,
  getNutritionbyid
    };