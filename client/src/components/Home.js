import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import SelectMenu from './Select'
import Random from './Random'
import RecipeReviewCard from './RecipeReviewCard';
//import './App.css'
import '../App.css'


class Home extends React.Component {
  state = {
    random: {},
    meals: [],
    randomIsActive: true,
    filter: false,
    mealsById: {},
    ingredients: [],
    measurements: [],
    ingredientsLoading: true
  }

  componentDidMount() {
    console.log("Component Did Mount")
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then(examples => {
        this.setState({ random: examples.meals[0] })
       //console.log(this.state.random)
      })
  }

  setFilter = (bool) => {
    this.setState(state => ({ filter: bool }))
  }

  render() {
    {
      return (
        <div>
          {console.log(this.state.filter)}
          <SelectMenu filter={this.state.filter} setFilter={this.setFilter} />
          {!this.state.filter && (
            <RecipeReviewCard 
            // className ="tester1"
               Meal={this.state.random}
                style={{width: "100%"}}
              //className= "random-card"
            />
          )
          }

        </div>
      );
    }
  }
}
export default Home;
