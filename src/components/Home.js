import React, {Component, useEffect, useState} from 'react';
import ReactDOM from 'react-dom'
import SelectMenu from './Select'
import Random from './Random'
import RecipeReviewCard from './Card';

class Home extends React.Component {
  // const [random, setRandom] = useState({});
  // const [meals, setMeals] = useState([]);
  // const [randomIsActive, setRandomIsActive] = useState(true);
  // const [filter, setFilter] = useState(false);
  // const [mealsById, setMealsById] = useState({});
  // const [ ingredients, setIngredients] = useState([]);
  // const [ measurements, setMeasurements] = useState([]);
  // const [ isLoading, setIsLoading] = useState(true);  
  state = {
    random: {},
    meals: [],
    randomIsActive: true,
    filter: false,
    mealsById: {},
    ingredients : [],
    measurements : [],
    ingredientsLoading: true
  }


//****** Florin Pop code ******
//   ingredAndMeasure = () => {
//     const ingred = []
//     for(let i=1; i<=20; i++){
//       if(mealData['strIngredient' + i]){
//             ingred.push(`${mealData['strIngredient'+i] / ${mealData['strMeasure'+i]}`)
//       }else{
//         break;
//       }
//   }
// }
  // const ingredientsArr = (obj) => {
  //   let newArr = Object.entries(obj);
  //   let filtered = newArr.filter(item => {
  //     if(item[1] !== ""){
  //       return item
  //     }
  //   })
  //   let items = filtered.map(item => {
  //     return item[1]
  //   })
  //   //return items
  //   console.log(items)
  // }
  //random
  componentDidMount() {
    console.log("Component Did Mount")
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(examples => {
        this.setState({random: examples.meals[0]})
        //console.log(examples)
        //console.log(this.state.data.meals.map(x => x.strMeal))
        console.log(this.state.random)
        //console.log(this.state.filter)

    }) 
  }
  
  // const getMeals = async() => {
  //   console.log("Component Did Mount")
  //   const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  //   const data = await res.json()
  //       //this.setState({random: examples.meals[0]})
  //       setRandom(data.meals[0])
  //       //setIsLoading(false)
  //       //console.log(examples)
  //       //console.log(this.state.data.meals.map(x => x.strMeal))
  //       console.log({random})
  //       //console.log(this.state.filter) 
  // }
  

  // ingredientsArr = (obj) => {
  //   let newArr = Object.entries(obj);
  //   let filtered = newArr.filter(item => {
  //     if(item[1] !== ""){
  //       return item
  //     }
  //   })
  //   let items = filtered.map(item => {
  //     return item[1]
  //   })
  //   //return items
  //   console.log(items)
  // }

  // componentDidMount(){
  //   ingredientsArr();
  // };

  
  // useEffect(() => {
  //   getMeals();
  //   setIsLoading(false)
  //   //ingredientsArr();
  // }, [])

// measureArr = (list) => {
//   let newArr = Object.entries(list);
//   let strIng = newArr.slice(19, 26)
//   let filtered = strIng.filter(item => {
//     if(item[1] !== ""){
//       return item
//     }
//   })
//    let items = filtered.map(item => {
//     return item[1]
//   })
//   return items
// }

// measureArr(ingredientsObj)

  // filterToTrue = () => {
  // this.setState(state => ({filter: true}))
  // }

  // filterToFalse = () => {
  //   this.setState(state => ({filter: false}))
  // }

    setFilter = (bool) => {
      this.setState(state => ({filter: bool}))
    }

    // const filtered = (bool) => {
    //   setFilter(bool)
    // }
  render(){
    // <div>
    //    if(!isLoading) 
    //     return       
    //     !isLoading && <SelectMenu  filter={filter} setFilter={filtered} />
    //   }
    //   </>
    //  <>
    //     {
    //     isLoading &&            
        
    //       <SelectMenu filter={this.state.filter} setFilter={this.setFilter} />
    //         <h2>Featured Recipe:</h2>
    //         <Card
    //         Meal={this.state.random} 
    //         Ingredients={this.state.ingredients} 
    //         Measurements={this.state.measurements}
    //     }
    //     </>
   // </div>
       
       {
       // if(this.toggleShowHide){
          return(
            <div>
                {console.log(this.state.filter)} 
                <SelectMenu filter={this.state.filter} setFilter={this.setFilter} /> 
              {!this.state.filter && (
                <RecipeReviewCard
                Meal={this.state.random} 
                Ingredients={this.state.ingredients} 
                Measurements={this.state.measurements}
                />
                )
              }
         {/* {console.log("Hello "+ this.state.filter)}  */}
           </div>  
          );
          // return (
          // <div>
          // <SelectMenu filter={this.state.filter} setFilter={this.setFilter} />
          //   <h2>Featured Recipe:</h2>
          //   <RecipeReviewCard
          //   Meal={this.state.random} 
          //   Ingredients={this.state.ingredients} 
          //   Measurements={this.state.measurements}
          //   />
          // </div>
          // )

      }
  } 
}
export default Home;
