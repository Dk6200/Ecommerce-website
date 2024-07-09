import "./App.css";
import Header from "./Components/Header";
import ItemList from "./Components/ItemList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import ProductDetails from "./Components/ProductDetails";
import Wrapper from "./Components/Wrapper";
const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Wrapper />
  </Router>
);

export default App;
