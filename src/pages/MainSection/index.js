import { connect } from "react-redux";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Login from "../../pages/Login";
import Leaderboard from "../../pages/Leaderboard";
import Questions from "../../pages/Questions";
import QuestionForm from "../../pages/QuestionForm";
import PageNotFound from "../../pages/PageNotFound";
import PrivateRoute from "../../components/PrivateRoute";

import "./style.css";

const MainSection = ({ dispatch, loggedIn }) => {
  return (
    <>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/leaderboard"
          exact
          element={
            <PrivateRoute>
              <Leaderboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/questions/:question_id"
          element={
            <PrivateRoute>
              <Questions />
            </PrivateRoute>
          }
        />
        <Route
          path="/add"
          exact
          element={
            <PrivateRoute>
              <QuestionForm />
            </PrivateRoute>
          }
        />
        <Route path="/404" exact element={<PageNotFound />} />
      </Routes>
    </>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(MainSection);