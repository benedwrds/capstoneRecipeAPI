import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Random extends Component {

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

}

export default Random;