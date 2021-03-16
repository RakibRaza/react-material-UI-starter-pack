import { CssBaseline, ThemeProvider } from "@material-ui/core";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { theme } from "./theme";
import SingleNews from "./components/SingleNews/SingleNews";
import Footer from "./components/Footer/Footer";
import About from "./components/Pages/About";
function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
