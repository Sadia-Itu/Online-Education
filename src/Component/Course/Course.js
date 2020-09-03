import React from 'react';
import './Course.css'

const Course = (props) => {
    console.log(props);
    return (
        <div className="course">
            
            <div >
              <h4 className="courseName">Corse:{props.course.course}</h4>
              <br/>
              <p><small>by:{props.course.author}</small></p>
              <p>Price:${props.course.price}</p>
             
              <button className="btn" onClick={()=>props.handleCourses(props.course)}>add to cart</button>

            </div>
            
            
            
        </div>
    );
};

export default Course;