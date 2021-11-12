import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Nav/Nav";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundView from "./pages/NotFoundView/NotFoundView";

import "./App.css";

function App() {
  return (
    <div>
      <Navigation />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

         <Route path="/Movies/:movieId">
          <MovieDetailsPage />
        </Route>


        <Route path="/Movies">
          <MoviesPage />
        </Route>

       
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
