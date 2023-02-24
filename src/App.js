import React from "react";
import { AppBar, Link, Toolbar,  } from "@material-ui/core";
import useStyles from './styles';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PokeApi from "./pokeapi/PokeApi";
import CalcApp from "./calc/CalcApp";
import './App.css';

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div>
        <AppBar>
          <Toolbar>
            <Link href = "/calc" color="inherit" className={classes.link} underline="none">
              Kalkulačka
            </Link>

            <Link href = "/pokeapi" color="inherit" className={classes.link} underline="none">
              PokeApi
            </Link>

            <Link color="inherit" className={classes.link} underline="none">
              Piškvorky
            </Link>

            <Link color="inherit" className={classes.link} underline="none">
              Filmová databáze
            </Link>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route index element={<Navigate to={"Project"} />}/>
          <Route path ="/pokeapi">
            <Route index element = {<PokeApi/>}/>
          </Route>

          <Route path ="/calc">
            <Route index element = {<CalcApp/>}/>
          </Route>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
