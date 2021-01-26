import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
//import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
//import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    //background: red[500]
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const IndividualMeal = (props) => {
  const classes = useStyles();
  const [meal, setMeal] = React.useState({});
  const [mealObj, setMealObj] = React.useState([]);
  const [open, setOpen] = React.useState(true); //open, setOpen
  const [mealId, setMealId] = React.useState("");

//Card Component
  const [expanded, setExpanded] = React.useState(false);
  const [ingredients, setIngredients] = React.useState([]);
const [ measurements, setMeasurements] = React.useState([]);
//const [ isLoading, setIsLoading] = useState(true);
const [combinedState, setCombined] = React.useState()

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
};

console.log(meal)

  //let y = [];
  let measureNew = [];
  let ingredNew = [];
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
        ingredNew.push(`${obj[ingredToString]}`)
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
      measureNew.push(`${obj[ingredToString]}`)
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

let combinedArr = []
function combined(){measureNew.reduce((acc, current, index) => {
  //return current, ingredNew[index]
  //let ingredNewIndex = ingredNew[index]
  console.log(current, ingredNew[index])
  //let combinedVal =  [current, ingredNew[index]]
  combinedArr.push(current + " " + ingredNew[index]);
  //setCombined(current + " " + ingredNew[index]);
  }, [])
}
console.log(combinedArr)
//setCombined(combinedArr)

//const fooder = combinedArr.map((food) => console.log(food))
//console.log(fooder)

combined(meal)

useEffect(() => {
  getMealByName();
  //ingredientsArr(meal);
}, []);

//Card Component
const handleExpandClick = () => {
  setExpanded(!expanded);
};

// function styleTest(){
  const styleObject = {
    //textAlign: "center"
    position: 'absolute', left: '40%', top: '25%',
  //}
}

  return (
     <div>
    <Card className={classes.root} style={styleObject}> 
    {/* style={{textAlign: "center"}}> */}
      <CardHeader
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={meal.strMeal}
        //subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={meal.strMealThumb}
       // title="Paella dish"
      />
      <CardContent>
       {/* <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography> */}
            <ul>{combinedArr.map((ingred) => 
                <li>{ingred}</li>
              )}
            </ul>
            <Typography paragraph>
            {/* {meal.strInstructions} */}
          </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          {/* can't resolve shareIcon */}
          {/* <ShareIcon /> */}
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {/* When I click on the expandMoreIcon it gives me an error*/}
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
       <Collapse in={expanded} timeout="auto" unmountOnExit> 
         <CardContent>
        <Typography paragraph>

           {/* if ingredients is true return ingredients.map() */}
          {/* {ingredients && ingredients.map((item, idx) =>{
              <ul>
                 <li>{item}</li>
              </ul> 
          }) */}
      {/*********** TESTING ARRAYS TO SETSTATE **************/}
      {/* <ul>{combinedArr.map((ingred) => 
        <li>{ingred}</li>
      )}
      </ul> */}
        </Typography>
         
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            {/* props.meal.strIns... undefined */}
            {/* ****** would like my strInstuctions to work here so that when the ExpandMoreIcon is clicked the instructions show up ****** */}
            {meal.strInstructions}
          </Typography>
           {/*
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        */}    
              
        </CardContent> 
      </Collapse>
    </Card>     
    </div>
  )
}

export default IndividualMeal;
