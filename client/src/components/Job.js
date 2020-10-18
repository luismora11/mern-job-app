import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Job = props => {

const [title, setTitle] = useState('')
const [name, setName] = useState('')
const [description, setDescription] = useState('')
const [email, setEmail] = useState('')


useEffect(() => {
    axios.get(`/jobs/${props.match.params.id}`)
    .then(res =>[
        setTitle(res.data.title),
        setName(res.data.name),
        setDescription(res.data.description),
        setEmail(res.data.email)
    ])
    .catch(error => console.log(error))
}, [props]);










    return (
        <MainContainer>
        <div className="container">
            <h2>{title}</h2>
            <h5>{name}</h5>
            <p>{description}</p>
            <a className="button js-button" href={`mailto:${email}`}>Apply</a>
        </div>

        </MainContainer>
    )
}

export default Job






const MainContainer = styled.div`
margin: 5rem 0;



.apply{
    margin: 2rem 0;
}


.button {
  background-color: #f06b43;  
  border-radius: 5px;
  color: white;
  padding: .5em 1em;
  text-decoration: none;
}

.button:focus,
.button:hover {
  background-color: #b83209;
  color: White;
}

.content {
  display: none;
  margin: 1em 0;
}

.content.active,
.no-js .content {
  display: block;
}



`;