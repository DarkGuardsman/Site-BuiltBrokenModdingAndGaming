import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Games from './pages/games.jsx';
import Home from './pages/home.jsx';
import News from './pages/news.jsx';
import Minecraft from './pages/minecraft.jsx';
import About from './pages/about.jsx';
import './index.css';
import './App.css';
import Logo from './logo_64.png';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <nav className="Header">
        <Link to="/" className="Logo">
            <img src={Logo} alt="Built Broken Modding" />
            Built Broken Modding
            <h6 className="Motto">Build it | Break it | Reanimate it</h6>
        </Link>
        <div className="NavLink">
            <Link className="Nav" to="/">Home</Link>
            <Link className="Nav" to="/news">News</Link>
            <Link className="Nav" to="/minecraft">Minecraft</Link>
            <Link className="Nav" to="/games">Games</Link>
        </div>
    </nav>
    <div className="Content">
    <Switch>
        <Route path="/games">
            <Games />
        </Route>
        <Route path="/minecraft">
            <Minecraft />
        </Route>
        <Route path="/news">
            <News />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Switch>
    </div>
    <footer className="Footer">
        <p>Copyright BuiltBrokenModding ©2020</p>
        <Link className="Nav" to="/about">About</Link>
        <a href="https://github.com/DarkGuardsman/Site-BuiltBrokenModdingAndGaming">Visit our Github!</a>
    </footer>
   </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*
 * Header:
 *      Logo Link Link Link Link
 *
 *
 *  Content:
 *      Slides about as other options are selected
 *      Needs to be given events by the Header... or Footer, hmm...
 *
 *
 *
 * Footer:
 *      Copyright GH_Link, blah
 */
