import React, { Component } from 'react'


export default class IndividualMealClass extends Component {
  state = {
    ingredNew: [],
    measureNew: []
  }

   let id = parseInt(props.match.params.id)
  const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
 
 const getMealByName = async () => {
   try {
     console.log(id)
     const res = await fetch(BASE_URL + id);
     const data = await res.json();
     setMeal(data.meals[0]);
     setMealObj(data.meals)
    //console.log(data)
   } catch (e) {
     console.log(e);
   }
 }

 //let measureNew = [];
  //let ingredNew = [];
  function clean (obj){
    for (var propName in obj) { 
      if (obj[propName] === null || obj[propName] === "") {
      delete obj[propName];
      } 
    }
    // const ingredNew = []
      for(let i = 1; i <= 20; i++){
   // `${strMeasure[i] strIngredient[i]}`
      let toString = i.toString();
      let ingred = "strIngredient";
      let ingredToString = ingred + toString;
      console.log(ingredToString);
      console.log(i)
      if(obj[ingredToString]){
        this.state.ingredNew.push(`${obj[ingredToString]}`)
      } else {
        break;
      }
    }
    console.log(ingredNew)

    // const measureNew = []
    for(let i = 1; i <= 20; i++){
 // `${strMeasure[i] strIngredient[i]}`
    let toString = i.toString();
    let ingred = "strMeasure";
    let ingredToString = ingred + toString;
    console.log(ingredToString);
    console.log(i)
    if(obj[ingredToString]){
      this.state.measureNew.push(`${obj[ingredToString]}`)
      //   setIngredients(
      //  `${obj[ingredToString]}`
      //);
    } else {
      break;
    }
  }
  console.log(measureNew)
  } 
    //y.push(obj)


clean(meal)

  render() {
    return (
      <div>
        
      </div>
    )
  }
}


