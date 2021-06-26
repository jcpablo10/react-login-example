
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import routes from './Config/routes';
import { AuthProvider } from './Context'; 

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route 
              key={route.path}
              path={route.path}
              component={route.component}
              exact
            />
          ))}
        </Switch>
      </Router>    
    </AuthProvider>
  );
}

export default App;
