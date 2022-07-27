import React, { useState } from 'react';
import axios from "axios";

const Addstudent = () => {

    const[name,setname] = useState("");
    const[age,setage] = useState("");
    const[gender,setgender] = useState("");

    const send_data =(e)=>{
        
        e.preventDefault();
        
       

        const new_student ={
            name,
            age,
            gender
        }

        axios.post("http://localhost:8080/student/add",new_student)
        .then(()=>{
            alert("student added");
            setname("");
            setgender("");
            setage("");
        }).catch((err)=>{
            alert(err);
        })


        
    }

    
  return (
    
        <form className='container' onSubmit={send_data}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Studen Name: </label>
                <input type="text" className="form-control" id="name" aria-describedby="emailHelp" 
                 onChange={(e)=>{
                    setname(e.target.value);
                 }}/>
              
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age :</label>
                <input type="text" className="form-control" id="age"
                onChange={
                    (e)=>{
                        setage(e.target.value);
                    }
                }/>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="gender">Gender : </label>
                <input type="text" className="form-control" id="gender" onChange={
                    (e)=>{
                        setgender(e.target.value);
                    }
                }/>
                
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

  )
}

export default Addstudent