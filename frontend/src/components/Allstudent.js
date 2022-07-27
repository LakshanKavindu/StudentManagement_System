import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Allstudent = () => {

    const[students,setstudents] = useState([]);

    useEffect(()=>{
        const getstudents = ()=>{
            axios.get("http://localhost:8080/student/").then((res)=>{
                    setstudents(res.data);
                    console.log(students);
                    
            }).catch((err)=>{
                    console.log(`error ${err}`);
            })
        }
        getstudents();
    },[])
  return (
    <div className='container'>
        <div className="titles">
            <h2>Names</h2>
            <h2>Age</h2>
            <h2>Gender</h2>
            
        </div>
 
        {students.map((student)=>(

            <div className="cont">
                   <div className='wrapper'>
                <h4  key={student.id} >{student.name}</h4>
                <h4>{student.age}</h4>
                <h4>{student.gender}</h4>
                
            </div>
                <hr />
            </div>

         
           
        ))}
    </div>
  )
}

export default Allstudent