import { Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "./components/Nav/Nav";
import "./App.css";
import NotFoundView from "./pages/NotFoundView/NotFoundView";

const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage" /* webpackChunkName: 'HomePage' */)
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage/MoviesPage" /* webpackChunkName: 'MoviesPage' */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: 'MovieDetailsPage' */
  )
);

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<p>waiting...</p>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/Movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route path="/Movies" exact>
            <MoviesPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
