import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { AuthProvider } from "../../contexts/AuthContext";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Home from "../Home/Home";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import ViewBook from "../ViewBook/ViewBook";
import Explore from "../Explore/Explore";
import Read from "../Read/Read";
import NewChapter from "../NewChapter/NewChapter";
import Profile from "../Profile/Profile";
import Write from "../Write/Write";

function App() {
  return (
    <React.Fragment>
      <Router>
        <AuthProvider>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/forgot-password" component={ForgotPassword} />

          <Route exact path="/explore" component={Explore} />
          {/* <PrivateRoute exact path="/explore" component={Explore} /> */}
          <Route exact path="/view-book/" component={ViewBook} />

          <Route exact path="/read/" component={Read} />

          <Route exact path="/write" component={Write} />
          <Route exact path="/write/new-chapter/:bookId/:chapterNumber" component={NewChapter} />

          <Route exact path="/profile" component={Profile} />

          {/* Add ^^ book id in the path  */}

        </AuthProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
