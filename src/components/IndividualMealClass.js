import React, { Component } from 'react'
//import ReactDOM from 'react-dom';


export default class IndividualMealClass extends Component {
  state = {
    ingredNew: [],
    measureNew: [],
    meal: [],
    mealObj: {},
    BASE_URL: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=',
    //id: ""
  }

  //id = parseInt(props.match.params.id)
  //BASE_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
 
  componentDidMount() {
    let id = parseInt(this.props.match.params.id)
     console.log(id)
     fetch(this.BASE_URL + id)
     .then(res =>  res.json())
     .then(json => this.setState({meal: json.meals[0]}));
     //setMeal(data.meals[0]);
     //  setMealObj(data.meals)
    //console.log(data)
    };
  

//  this.setState({
//    ingredNew: this.state.ingredNew
//  }, () => {
//    console.log(this.state.ingredNew)
//  })
  measureNew = [];
  ingredNew = [];
  clean (obj){
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
    //console.log(ingredNew)

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
  //console.log(measureNew)
  } 
    //y.push(obj)


//clean(meal)

  render() {
    return (
      <div>
        // {this.state.ingredNew} , {this.state.measureNew}
      </div>
      )
    }
}



