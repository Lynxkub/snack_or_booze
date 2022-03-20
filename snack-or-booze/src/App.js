import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
// import Menu from "./FoodMenu";
import Menu from './Menu';
// import Snack from "./FoodItem";
import MenuItem from './MenuItem';
import NewMenuItemForm from "./NewMenuItemForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks , setDrinks] = useState([]);
  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);
 

  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
   
    getDrinks();
  } , []);

  



  if (isLoading) {
   
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar numDrinks = {drinks.length} numSnacks = {snacks.length} />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} />
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" category='Snack' />
            </Route>
            <Route path="/snacks/:id">
              <MenuItem items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path='/drinks'>
              <Menu items={drinks} title='Drinks' category='Drink'/>
            </Route>
            <Route path='/drinks/:id'>
              <MenuItem items={drinks} cantFind='/drinks' />
            </Route>
            <Route exact path ='/add_item'>
              <NewMenuItemForm />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
