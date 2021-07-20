import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
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

class App extends React.Component {
 render() {
  return (
    <UserProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/installations' component={Installations}/>
          <Route exact path='/connecting' component={Connecting}/>
          <Route exact path='/team' component={Team}/>
          <Route exact path='/blog' component={Blog}/>
          <Route exact path='/contact' component={Contact}/>
          <Route component={NoMatchPage} />
        </Switch>
        <Footer />
      </Router>
    </UserProvider>
  );
 }
};

export default App;