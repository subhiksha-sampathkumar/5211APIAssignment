//import required modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
let recipesList = [];
let ingred = "";
let num = "";
dotenv.config();
const spoon = require("./modules/spoonacular/api");
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
//set up Express app
const app = express();
const port = process.env.PORT || 8888;

//define important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//setup public folder
app.use(express.static(path.join(__dirname, "public")));
 
// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(upload.array()); 
app.use(express.static('public'));

//PAGE ROUTES
app.get("/", (request, response) => {
    response.render("getingred");
});

app.get("/recipe", async (request, response) => {
  
  let recipes = await spoon.getRecipiesbying(ingred,num);
  response.render("index", { title: "Recipes", recipeList: recipes });
  
}); 

app.post("/", (request, response) => {
  //get form data
  let ingrednt = request.body.ingredients; //get the value for field with name="ingredients"
  ingred = ingrednt;
  //request.body is form POST data
  let Number = request.body.numRecipe;
  num = Number;
  response.render("router", {ing: ingrednt, no: Number});
  });

app.get("/nutrition/:id", async (request, response) => {
  
  let nutritionInfo = await spoon.getNutritionbyid(request.params.id);
  
  response.render("nutVal", { title: "Nutrition Information", nutritionList: nutritionInfo, recipe: request.params.id});
});

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

