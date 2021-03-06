import logo from './logo.svg';
import './App.css';
import './footer.css';
import Header from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Volunteers from './components/Volunteers';
import SpecialThanks from './components/SpecialThanks';
import Objectives from './components/Objectives';
import Achievements from './components/Achievements';
import History from './components/History';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
        <ScrollToTop />
       <Header />
       <Container style ={{minHeight:"100vh"}}>
        
          <Switch>
            <Route path='/' exact component={Home} />
             <Route path='/home' component={Home} />
             <Route path='/contact-us' component={ContactUs} />
             <Route path='/volunteers' component={Volunteers} />
             <Route path='/special-thanks' component={SpecialThanks} />
             <Route path='/objectives' component={Objectives} />
             <Route path='/achievements' component={Achievements} />
             <Route path='/history' component={History} />
          </Switch>
        
       </Container>
       <Footer />
    </Router>
  );
}

export default App;
