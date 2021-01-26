import React, {useContext} from "react";
import { Switch, Route, } from "react-router-dom";
import {__RouterContext} from 'react-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar1";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal"
import Portfolio from "./components/Portfolio/Portfolio"
import KindWords from "./components/Portfolio/KindWords"
import Launch from "./components/Launch/Launch"
import {useTransition, animated} from "react-spring"
import About from "./components/About/About"




function App() {
  
  const {location} = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: {opacity: 0, transform: "translate(100%, 0)"},
    enter: {opacity: 1,transform: "translate(0, 0)"},
    leave: {opacity: 0,transform: "translate(-50%, 0)"}
  });
  
  

  return (
    <React.Fragment>
      
      
      <Navbar ></Navbar>
      <Route path = "/kindwords" component = {KindWords}></Route>
      <Route path = "/portfolio" component = {Portfolio}></Route>
        {transitions.map(({item, props, key}) => (
          <animated.div key={key} style={props}>
               <Switch location={item}>
            <Route exact path="/" component={Launch}></Route>
            <Route path = "/about" component = {About}></Route>     
            <Route path = "/products" component = {ProductList}></Route>
            <Route path= "/details" component={Details}></Route>  
            <Route path="/cart" component={Cart}></Route>  
            <Route componenet={Default}></Route>
      </Switch>
      <Modal />
          </animated.div>
        ))}
      
      

    </React.Fragment>
  );
}

export default App;
