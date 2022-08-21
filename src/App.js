import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import Header from "./components/Header";
import MainSection from "./pages/MainSection";

function App({ dispatch, loggedIn }) {
  useEffect(() => {
    dispatch(handleInitialData());
  });

  return (
    <div>
      {loggedIn && <Header />}
      <MainSection />
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(App);
