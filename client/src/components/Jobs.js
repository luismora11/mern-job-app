import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import axios from "axios"




const Jobs = ({posts}) => {
const [job, setJob] = useState([]);
//DELETE
const deleteJob = id =>{
  axios.delete(`/jobs/${id}`)
  .then(res => alert(res.data))
  setJob(job.filter(elem => elem._id !== id));
};
 
    
   

    return (
        
        <MainContainer >




            {posts.map((job, key) =>(
                
                <div className="container" key={key}>

                <Link to={{
                    pathname: `/job/${job._id}`
                }}>
                <h2>{job.title}</h2>
                </Link>
                <h5>{job.name}</h5>
                <p>{job.description}</p>
                <div className="apply">
                <a className="button js-button" href={`mailto:${job.email}`}>Apply</a>
                </div>
                <div className="row "  >
                    <div className="col-sm-2">
                     <Link to={`/update/${job._id}`} className="btn btn-success">Edit Job</Link>
                    </div>
               
                <div className="col-sm-2" >
                    <button onClick={() => deleteJob(job)} className="btn btn-danger">Delete Job</button>
                </div>
    
                </div>
                <hr />
                </div>
            )
                
            )}
</MainContainer>
        
    );
};

export default Jobs


//MAIN CONTAINER

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

.btn{
  display: none;
}



`;
