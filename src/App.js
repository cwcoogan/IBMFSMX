import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Installations from './pages/Installations';
import Connecting from './pages/Connecting';
import Team from './pages/Team';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import { UserProvider } from './states/userState';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/installations'>
            <Installations />
          </Route>
          <Route path='/connecting'>
            <Connecting />
          </Route>
          <Route path='/team'>
            <Team />
          </Route>
          <Route path='/blog'>
            <Blog />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserProvider>
  );
};

export default App;