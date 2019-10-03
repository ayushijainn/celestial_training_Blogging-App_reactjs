import Home from './components/Home.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import info from './components/info.js'

import App from './App.js'
//simport { useAlert } from 'react-alert'
//import TransitionGroup from "react-transition-group";
//import FadeTransition from "fadeTransition";
const MainMenu = () => {
    return (
     <div className="buttons">
      <Link to="/components/Home">
        <button type="button" className="menu-btn">home</button>
      </Link>
      <Link to="/components/About">
        <button type="button" className="menu-btn">About</button>
      </Link>
      
      <Link to="/components/Contact">
        <button type="button" className="menu-btn">contact</button>
      </Link>
      <Link to="/components/info">
        <button type="button" className="menu-btn">info</button>
      </Link>
    </div>
  );
};

const Welcome = ()=> {
  // This is a dumb "stateless" component
  return (
    <div>
     <Router>
       <div className="mainmenu">
       // <MainMenu/>
      
       </div> 
          <div className="linking">
        
            <Route exact path="/components/Home" component={Home} />
            <Route exact path="/components/About" component={About} />
          
            <Route exact path="/components/Contact" component={Contact} />
            <Route exact path="/components/info" component={info} />
            
          </div>
          </Router>
      Welcome !
      <a href="javascript:;" onClick={App.onSignOut}>Sign out</a>
    </div>
  )
}
export default Welcome; 