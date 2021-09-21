import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import store from "./store";
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home}/>
          <Route exact path="/movie/:id" component={MovieDetail}/>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
