import React from 'react';
import './App.css';
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import NewPoll from "./components/NewPoll";
import PollPage from "./components/PollPage";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import {connect} from "react-redux";

function App() {
  return (
    <>
        <Header/>
        <div className="container">
        <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/questions/:id" element={<PollPage />} />
            <Route path="/new" exact element={<NewPoll />} />
        </Routes>
        <Footer />
    </div>
    </>
  );
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps)(App);