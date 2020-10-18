import React, {useState, useEffect} from 'react';
import {Route} from "react-router-dom";
import axios from 'axios';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layouts/Header";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer"
import Jobs from "./components/Jobs";
import Job from "./components/Job";
import AddJob from "./components/AddJob";
import EditJob from "./components/EditJob";






function App() {
const [posts, setPosts] = useState([]);
useEffect(() => {
  axios
  .get("/jobs")
  .then(res => setPosts(res.data))
  .catch(error => console.log(error));
});















  return (
    <div className="App">
     < Header />
     <Navbar />
     <Route exact path="/" render={() => <Jobs posts={posts} /> }/>
     <Route path="/job/:id" render={(props) => <Job {...props} posts={posts} /> }/>
     <Route path="/update/:id" render={props => <EditJob {...props} posts={posts} /> }/>
     <Route path="/add-job" component={AddJob} />
     <Footer />
     
   
    </div>
  );
}

export default App;
