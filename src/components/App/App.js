import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Home from "../Home/Home";
import ViewBook from "../ViewBook/ViewBook";
import Explore from "../Explore/Explore";
import Read from "../Read/Read";
import NewChapter from "../NewChapter/NewChapter";
import Profile from "../Profile/Profile";
import Write from "../Write/Write";

import TestComponent from "../Testcomponent/TestComponent";
import ProfileButton from "../ProfileButton/ProfileButton";
import { AuthProvider } from "../../contexts/AuthContext";

function App() {
  return (
    <React.Fragment>
      <Router>
        <AuthProvider>
          <Route exact path="/" component={Home} />

          <PrivateRoute exact path="/explore" component={Explore} />
          <Route exact path="/view-book/" component={ViewBook} />

          <Route exact path="/read/" component={Read} />

          <Route exact path="/write" component={Write} />
          <Route exact path="/write/new-chapter" component={NewChapter} />

          <Route exact path="/profile" component={Profile} />

          <Route exact path="/test" component={TestComponent} />

          {/* Add ^^ book id in the path  */}

        </AuthProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
