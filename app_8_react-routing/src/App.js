//First Component
import {Home} from './Components/Home';
import {Nav} from './Components/Nav';
import {Item} from './Components/Item';
import {Shop} from './Components/Shop';
import AboutSite from './Components/About';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';

const App =()=>{
    return(
        <Router> 
        <div>
            <Nav/>
            <Switch>
            <Route path="/"  exact component={Home}/>

            {/* :id sets parameter after path, to get parameter use match property of props/response inside component */}
            <Route path="/shop/:id" component={Item}></Route> 
            
            <Route path="/About" component={AboutSite}/>
            <Route path="/Shop" exact component={Shop}/>
            </Switch>
        </div>
        </Router>
    )
}

export default App;