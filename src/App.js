import { CssBaseline } from "@material-ui/core";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleNews from "./components/SingleNews/SingleNews";
import Footer from "./components/Footer/Footer";
import About from "./components/Pages/About";
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <News />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/news/:params">
          <SingleNews />
        </Route>
      </Switch>
      <Footer />
      <CssBaseline />
    </Router>
  );
}

export default App;
