
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import AppRoutes from './Components/AppRoutes';
import routes from './Config/routes';
import { AuthProvider } from './Context'; 

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          {routes.map((route) => (
            <AppRoutes 
              key={route.path}
              path={route.path}
              component={route.component}
              isPrivate={route.isPrivate}
              exact
            />
          ))}
        </Switch>
      </Router>    
    </AuthProvider>
  );
}

export default App;
