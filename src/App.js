import {planets} from './components/DetailsList';
import PlanetSection from './components/PlanetSection';
import Navigation from './components/Navigation';
import useFetch from './components/useFetch';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import CharacterCards from './components/CharacterCards';
import { Container, Row, Navbar} from 'react-bootstrap';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { cards } = useFetch(planets)


  return (
    <div className="App">
     <Container className="p-5">
        <Row>
        <Navbar expand="lg" variant="light" className="flex-column align-items-start ">
            <Navbar.Brand href="#" className='pb-1'>Spacious</Navbar.Brand>
        </Navbar>
        <Router>
        <div class="home">
        <Switch>
          <Route exact path="/">
           { cards && <Navigation true={true} false={false} display="d-none"/>}
            <PlanetSection />
          </Route>
          <Route path="/characters">
           { cards && <Navigation true={false} false={true} display="d-block"/>}

            <CharacterCards />
          </Route>
        </Switch>
        </div>
        
      </Router> 
        </Row>
    </Container>
    </div>
  );
}

export default App;
