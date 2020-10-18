import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import axios from "axios";

const EditJob = props => {



const [title, setTitle] = useState("");
const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [email, setEmail] = useState("");





const changeOnClick = e =>{
    e.preventDefault();

    const jobs={
        title,
        name,
        description,
        email
    }

    setTitle("");
    setName("");
    setDescription("");
    setEmail("");


    

axios
.put(`/jobs/update/${props.match.params.id}`, jobs)
.then(res => console.log(res.data))
.catch(err => console.log(err));


};




useEffect(() => {
    axios.get(`/jobs/${props.match.params.id}`)
    .then(res =>[
        setTitle(res.data.title),
        setName(res.data.name),
        setDescription(res.data.description),
        setEmail(res.data.email)
    ])
    .catch(error => console.log(error))
}, []);









    return (
        <AddJobContainer>
        <div className="container">
        <h1>Update Job</h1>
       
        <form onSubmit={changeOnClick} encType="multipart/form-data" >
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="form-control" placeholder="Title"/>
        </div>
        <div className="form-group">
          <label htmlFor="name">Company Name</label>
          <input type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className="form-control" placeholder="Title"/>
        </div>
        <div className="form-group">
    <label htmlFor="description">Description</label>
    <textarea value={description} onChange={e => setDescription(e.target.value)}
     className="form-control"  rows="3"></textarea>
  </div>
  <div className="form-group">
    <label htmlFor="email">Email address To Apply For Job</label>
    <input value={email} onChange={e => setEmail(e.target.value)}
     type="email" className="form-control"  placeholder="name@example.com"/>
  </div>
        <button type="submit" className="btn btn-primary" >Update Job</button>
      </form>
      </div>
      </AddJobContainer>
    )
}

export default EditJob;

//FORM CONTAINER

const AddJobContainer = styled.div`

margin: 3rem auto;
padding: 4rem;
width: 80%;

h1{
  font-weight: 400; 
  color: #240387; 
}

.btn-primary{
    margin-top: 1.5rem;
}

.message{
    color: red;
    padding: 1rem;
}

`;
