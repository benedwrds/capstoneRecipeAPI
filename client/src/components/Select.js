import React, { useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Card from './RecipeReviewCard'
import { Link } from 'react-router-dom'
import IndividualMeal from './IndividualMeal';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  center: {
    left: '40%'
  },
}));



export default function SelectMenu(props) {
  const classes = useStyles();
          //age, setAge
  const [meals, setMeals] = React.useState([]);
  const [open, setOpen] = React.useState(true); //open, setOpen
  const [category, setCategory] = React.useState("");
  const [individualMeal, setIndividualMeal] = React.useState("")

  const BASE_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=`;

  const getMealsByCategory = async () => {
    try {
      const res = await fetch(BASE_URL + category);
      const data = await res.json();
      setMeals(data.meals);
      console.log(data.meals)
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMealsByCategory();
  }, [category]);

  //console.log(filter)
  //console.log(this.setState({filter: true}))

  const handleChange = (event) => {
    event.preventDefault()
    //console.log(filter)
    //this.setState({filter : true})
    if(event.target.value){
      props.setFilter(true);
    } else{
      props.setFilter(false);
    }
    setCategory(event.target.value);
  };

  const handleClose = () => {
   setOpen(false);
   //console.log(filter)
   //set state
    //setCategory(false);
  };

  const handleOpen = () => {
    setOpen(true);
    //this.setState({filter: false})
    //set state
    //setCategory(true);
  };

  const selectMeal = (id) => {
      setIndividualMeal(id);
      //console.log(id)
  }


  return (
  
    <div className="tester1">
      <h1>Recipe Finder</h1>
      {/* <input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder={"Enter a category"}
      /> */}

       <Button className={classes.button} onClick={handleOpen}>
        
      </Button>
      
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={category}
          onChange={handleChange}
          className="selectorSpace"
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={"Beef"}>Beef</MenuItem>
          <MenuItem value={"Chicken"}>Chicken</MenuItem>
          <MenuItem value={"Dessert"}>Dessert</MenuItem> 
          <MenuItem value={"Lamb"}>Lamb</MenuItem>  
          <MenuItem value={"Pasta"}>Pasta</MenuItem> 
          <MenuItem value={"Pork"}>Pork</MenuItem>
          <MenuItem value={"Seafood"}>Seafood</MenuItem>
          <MenuItem value={"Side"}>Side</MenuItem>
          <MenuItem value={"Starter"}>Starter</MenuItem> 
          <MenuItem value={"Vegan"}></MenuItem>
          <MenuItem value={"Vegetarian"}>Vegetarian</MenuItem>
          <MenuItem value={"Breakfast"}>Breakfast</MenuItem>
          <MenuItem value={"Goat"}>Goat</MenuItem>
        </Select>
      </FormControl> 
      {meals &&
        meals.map((meal, idx) => {
          return ( 
            // <div>
            //div may be individualmeal component that links to indiMealDetails component
             <div key={meal.idMeal}> 
            <Link
            //onClick={() => selectMeal(id)} 
            id={meal.idmeal}//may not need
            to={`/meal/${meal.idMeal}`}
            >
              <p className="SelectText"
              style={{textAlign: "center"}}
              >{meal.strMeal}</p>
              
             {/* <h3>{meal.strMeal}</h3>  */}
               {/* <h3 key={meal.idMeal}>{meal.strMeal}</h3> */}
              <img 
              style={{width: "40%", height: "auto",  display: "block",
              marginLeft: "auto",
              marginRight: "auto"
              }} 
              // className="tester1"
              src={meal.strMealThumb}/>
            </Link>
            </div>
          )
        })
        }
    </div>
  );
}

// return (
//   <div>
//   <SelectMenu filter={this.state.filter}/>
//     <h2>Featured Recipe:</h2>
//   <h3>{this.state.random.strMeal}</h3>
//   <img style={{width: "20%", height: "auto"}} src={this.state.random.strMealThumb}/>
//   </div>