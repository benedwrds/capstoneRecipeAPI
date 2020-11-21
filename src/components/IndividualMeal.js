import React, {useEffect} from 'react'
import RecipeReviewCard from './RecipeReviewCard';

const IndividualMeal = (props) => {
  const [meal, setMeal] = React.useState([]);
  const [open, setOpen] = React.useState(true); //open, setOpen
  const [mealId, setMealId] = React.useState("");

  // ingredientsArr = (obj) => {
  //   let newArr = Object.entries(obj);
  //   let filtered= newArr.filter(item => {
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
  let id = parseInt(props.match.params.id)
 const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

const getMealByName = async () => {
  try {
    console.log(id)
    const res = await fetch(BASE_URL + id);
    const data = await res.json();
    setMeal(data.meals);
   console.log(data)
  } catch (e) {
    console.log(e);
  }
};

useEffect(() => {
  getMealByName();
}, [mealId]);

  return (
    <div>
      <h1>Hello</h1>
      <RecipeReviewCard
      Meal={meal}
      />
    </div>
  )
}

export default IndividualMeal;
