import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import Home from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PageNotFound from "./PageNotFound";
import ScrollToTop from "./ScrollToTop";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <ScrollToTop />
        {/* {Nav} */}

        <Switch>
          <Route exact path="/" component={withRouter(Home)} />

          <Route exact path="/home" component={Home} />

          <Route exact path="/contact" component={ContactPage} />


          <Route exact path="*" component={PageNotFound} />
        </Switch>

        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
