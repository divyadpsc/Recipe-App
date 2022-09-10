import logo from './logo.svg';
import './App.css';
import {useEffect, useState,useRef} from 'react';
import Recipe from './recipe';
function App() {
  const APP_ID = "f9d6227b";
  const APP_KEY = "d5eff2bacfe00011a323d6ee713ac331";
  const [search,setsearch]=useState("")
  const [recipes,setrecipe]=useState([])
  const [query,setquery]=useState("")

function handle(e){
  e.preventDefault();
  setquery(search);
  setsearch("");
}
useEffect(()=>{
  const getRecipes=async()=>{
    const response=await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      
    );
    const data=await response.json();
    setrecipe(data.hits);
    console.log("DATA HITS",data.hits);
  };
  getRecipes();
},[query]);
return(
<div className='App'>
  <h1 className='App_title'>Search Recipes</h1>
  <form onSubmit={handle} className="search_form">
    <input type="text" value={search} className="search_input" onChange={(e)=>setsearch(e.target.value)}/>
    <button type="submit" className='search_button'>Submit</button>
  </form>


<div className="recipes_container">
        {recipes.map((q) => (
          <Recipe key={q.recipe.label} recipe={q} />
        ))}
      </div>
    </div>
  );
}





export default App;
