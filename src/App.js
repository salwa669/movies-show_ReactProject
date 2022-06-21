import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./pages/header/header"
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Movies from "./pages/movies/movies";
import MovieDetails from './pages/movies/moviedetails';
function App() {
  return (
   <>

   <div className='container'>

<Router>
  <Header />
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/about" exact component={About}/>
    <Route path="/contact" exact component={Contact}/>
    <Route path="/movies" exact component={Movies} />
    <Route path="/details/:id" exact component={MovieDetails}/>
  </Switch>
</Router>
   </div>
   </>
  );
}

export default App;
