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

const NoMatchPage = () => {
  return (
    <div
      style={{ textAlign: 'center', minHeight: 'calc(100vh - 87px - 127px)' }}
    >
      <h3 style={{ paddingTop: '3rem' }}>404 - Not found</h3>
    </div>
  );
};

const App = () => {
  return (
    <UserProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path={["/IBMFSMX","/home","/IBMFSMX/home"]}>
            <Home />
          </Route>
          <Route path={["/IBMFSMX/about","/about"]}>
            <About />
          </Route>
          <Route path={["/IBMFSMX/installations","/installations"]}>
            <Installations />
          </Route>
          <Route path={["/IBMFSMX/connecting","/connecting"]}>
            <Connecting />
          </Route>
          <Route path={["/IBMFSMX/team","/team"]}>
            <Team />
          </Route>
          <Route path={["/IBMFSMX/blog","/blog"]}>
            <Blog />
          </Route>
          <Route path={["/IBMFSMX/contact","/contact"]}>
            <Contact />
          </Route>
          <Route component={NoMatchPage} />
        </Switch>
        <Footer />
      </Router>
    </UserProvider>
  );
};

export default App;