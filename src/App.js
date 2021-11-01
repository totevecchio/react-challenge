import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Band from "./components/Band";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <NavBar />
      {isAuthenticated ? (
        <Route exact path="/" component={Home} />
      ) : (
        <Route exact path="/" component={Login} />
      )}
      <Route
        exact
        path="/profile"
        render={() => (isAuthenticated ? <Profile /> : <Redirect to="/" />)}
      />
      <Route
        exact
        path="/band/:id"
        render={(props) => (isAuthenticated ? <Band query={props} /> : <Redirect to="/" />)}
      />
    </Router>
  );
}

export default App;
