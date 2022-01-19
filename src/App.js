import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import {Route, Switch} from 'react-router-dom'
function App() {
  return (
      <>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path= "/login" component={LoginPage}/>
        </Switch>
      </>
  );
}

export default App;
